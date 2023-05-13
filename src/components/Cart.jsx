import React, {useEffect, useState} from "react";
import ProductCart from "~/components/ProductCart";
import {Button} from "@mui/material";
import Money from "~/components/Money";
import {Form, Input, Select} from "antd";
import axios from "axios";
import _ from "lodash";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getCarts } from '~/api/cart.api';
import jwtDecode from "jwt-decode";
import { createTransaction } from '~/api/transaction.api';
import { removeCart } from '~/api/cart.api';
import { useNavigate } from "react-router-dom";

const layout = {
  labelCol: { span: 24 },
  wrapperCol: { span: 24 },
};

const validateMessages = {
  required: '${label} là bắt buộc!',
};

const { Option } = Select;

const axiosOpt = {
  headers: {
    'Content-Type': 'application/json',
    'Token': '0c09627a-c105-11ed-ab31-3eeb4194879e'
  }
};

const token = window.localStorage.getItem("token");
const account = token ? jwtDecode(token) : null;

export default function Cart() {
  const [ form ] = Form.useForm();
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const [optionsPro, setOptionsPro] = useState([]);
  const [optionsDistrict, setOptionsDistrict] = useState([]);
  const [optionsWard, setOptionsWard] = useState([]);
  const [updateForm, setUpdateForm] = useState(null);
  const [products, setProducts] = useState([]);

  useQuery({
    queryKey: ['carts'],
    queryFn: async () => getCarts({ customer: account?.id }),
    onSuccess: data => {
      setProducts(data?.data?.map(e => ({ ...e.productNavigation, number: 1, cartId: e.id })));
    }
  });

  useQuery({
    queryKey: ['province'],
    queryFn: async () => {
      return axios.get('https://dev-online-gateway.ghn.vn/shiip/public-api/master-data/province', axiosOpt);
    },
    onSuccess: data => {
      setOptionsPro(data?.data?.data?.map(e => ({
        value: e.ProvinceID,
        label: e.ProvinceName,
      })));
    }
  });

  useQuery({
    queryKey: ['district', updateForm !== null && form?.getFieldValue('province')],
    queryFn: async () => {
      return axios.get('https://dev-online-gateway.ghn.vn/shiip/public-api/master-data/district', {
        ...axiosOpt,
        params: {
          "province_id": form?.getFieldValue('province')
        }
      });
    },
    onSuccess: data => {
      setOptionsDistrict(data?.data?.data?.map(e => ({
        value: e.DistrictID,
        label: e.DistrictName,
      })).reverse());
    },
    enabled: updateForm !== null
  });

  useQuery({
    queryKey: ['ward', updateForm !== null && form?.getFieldValue('district')],
    queryFn: async () => {
      return axios.get('https://dev-online-gateway.ghn.vn/shiip/public-api/master-data/ward', {
        ...axiosOpt,
        params: {
          "district_id": form?.getFieldValue('district')
        }
      });
    },
    onSuccess: data => {
      setOptionsWard(data?.data?.data?.map(e => ({
        value: e.WardCode,
        label: e.WardName,
      })).reverse());
    },
    enabled: Boolean(updateForm !== null && form?.getFieldValue('district'))
  });

  function getAddressComponents(address) {
    const parts = address.split(',').map(part => part.trim());

    const provinceName = parts.pop();
    const districtName = parts.pop();
    const wardName = parts.pop();
    const roadName = parts.join(', ');

    return { roadName, wardName, districtName, provinceName };
  }

  useEffect(() => {
    (async () => {
      const {
        roadName, 
        wardName, 
        districtName, 
        provinceName
      } = getAddressComponents(account?.address);
      console.log('dataa')
      const _province = (await axios.get('https://dev-online-gateway.ghn.vn/shiip/public-api/master-data/province', axiosOpt))?.data?.data?.map(e => ({
        value: e.ProvinceID,
        label: e.ProvinceName,
      }));
      const _provinceId = _province?.find(e => e.label === provinceName).value;

      const _district = (await axios.get('https://dev-online-gateway.ghn.vn/shiip/public-api/master-data/district', {
        ...axiosOpt,
        params: {
          "province_id": _provinceId
        }
      }))?.data?.data?.map(e => ({
        value: e.DistrictID,
        label: e.DistrictName,
      }));
      const _districtId = _district?.find(e => e.label === districtName).value;

      const _ward = (await axios.get('https://dev-online-gateway.ghn.vn/shiip/public-api/master-data/ward', {
        ...axiosOpt,
        params: {
          "district_id": _districtId
        }
      }))?.data?.data?.map(e => ({
        value: e.WardCode,
        label: e.WardName,
      }));
      const _wardId = _ward?.find(e => e.label === wardName).value;

      setUpdateForm(true);
      form.setFieldsValue({
        province: _provinceId,
        district: _districtId,
        ward: _wardId,
        road: roadName
      });
    })();
  }, []);

  const updateFormHandle = (str) => {
    if (str === "province") {
      const data = {
        province: form.getFieldValue('province')
      };
      form.resetFields();
      form.setFieldsValue(data);
    }
    else if (str === 'district') {
      const data = {
        province: form.getFieldValue('province'), 
        district: form.getFieldValue('district'), 
      };
      form.resetFields();
      form.setFieldsValue(data);
    }
    setUpdateForm(!updateForm);
  }

  const changeNumberHandle = (id, number) => {
    if (number < 1) {
      return;
    }

    setProducts(products.map(e => {
      if (e.id !== id) {
        return e;
      }

      if (e.amount < number) {
        return e;
      }

      return {
        ...e,
        number: number
      }
    }))
  }

  const removeCartHandle = async (id) => {
    try {
      await removeCart(id);

      queryClient.invalidateQueries(['carts']);
    }
    catch (err) {
      console.log('Bỏ sản phẩm ra khỏi giỏ thất bại');
    }
  }

  const submitHandle = async () => {
    try {
      const addressForm = form.getFieldsValue();
      const address = [
        addressForm?.road,
        optionsWard?.find(e => e.value === addressForm.ward)?.label,
        optionsDistrict?.find(e => e.value === addressForm.district)?.label,
        optionsPro?.find(e => e.value === addressForm.province)?.label
      ].join(', ');

      const data = await createTransaction({
        customer: account?.id,
        address: address,
        products: products
      });

      alert('Đặt hàng thành công')
      navigate('/transaction');
    }
    catch (err) {
      console.log('Bug');
    }
  }

  return (
    <section className="cart container">
      <div className="row my-3">
        <div className="content-list col-12 col-lg-8 text-left ">
          <div className="title-list px-3">
            <h1 className="font-weight-bold">Giỏ hàng</h1>
          </div>
          <div className="list-product container" style={{backgroundColor: "#fff"}}>
            {products?.map(e => (
              <ProductCart 
                product={e}
                changeNumberHandle={(number) => changeNumberHandle(e.id, number)}
                removeCartHandle={() => removeCartHandle(e.cartId)}
                key={e.id} 
              />
            ))}
          </div>
        </div>
        <div className="check-out col-12 col-lg-4 text-left d-flex flex-column">
          <div className={'mb-3'}>
            <div className="title-list px-3 col-12">
              <h1 className="font-weight-bold">Địa chỉ</h1>
            </div>
            <div className="money mb-2"style={{backgroundColor: "#fff"}}>
              <Form
                {...layout}
                form={form}
                name="control-hooks"
                validateMessages={validateMessages}
                className={"p-2 form-body-ant"}
              >
                <Form.Item
                  name="province"
                  label="Tỉnh/Thành"
                  rules={[{ required: true }]}>
                  <Select 
                    placeholder='Chọn tỉnh/thành'
                    onChange={() => updateFormHandle("province")}
                  >
                    {optionsPro? _.map(optionsPro, (o) => {
                      return (<Option value={o.value} key={o.value}>{o.label}</Option>);
                    }):null}
                  </Select>
                </Form.Item>
                <Form.Item
                  name="district"
                  label="Quận/Huyện"
                  rules={[{ required: true }]}
                >
                  <Select 
                    placeholder='Chọn quận/huyện'
                    onChange={() => updateFormHandle("district")}
                  >
                    {optionsDistrict?_.map(optionsDistrict, (o) => {
                      return (<Option value={o.value} key={o.value}>{o.label}</Option>);
                    }):null}
                  </Select>
                </Form.Item>
                <Form.Item
                  name="ward"
                  label="Phường/Xã/Thị trấn"
                  rules={[{ required: true }]}>
                  <Select placeholder='Chọn phường/xã/thị trấn'>
                    {optionsWard?_.map(optionsWard, (o) => {
                      return (<Option value={o.value} key={o.value}>{o.label}</Option>);
                    }):null}
                  </Select>
                </Form.Item>
                <Form.Item
                  name="road"
                  label="Số nhà/Đường"
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
              </Form>
            </div>
            <div className="">
              <Button sx={{
                width: "100%",
                backgroundColor: "rgb(255,145,77)",
                border: "1px solid rgb(255,145,77)",
                ":hover": {
                  backgroundColor: "transparent",
                  color: "rgb(255,145,77)",
                  border: 1,
                  borderColor: "rgb(255,145,77)"
                }
              }} className={"btn-check-out"}  variant="contained" >
                Xác nhận
              </Button>
            </div>
          </div>
          <div className={'mb-3'}>
            <div className="title-list px-3 col-12">
              <h1 className="font-weight-bold">Thành tiền</h1>
            </div>
            <div className="money"style={{backgroundColor: "#fff"}}>
              <table className={"table"}>
                <tbody>
                  <tr>
                    <th className={"text-left"}>Tên</th>
                    <th>Số lượng</th>
                    <th className={"text-right"}>Giá tiền</th>
                  </tr>
                  {products?.map(e => (
                    <tr key={e.id}>
                      <td className={"text-left"}>{e.name}</td>
                      <td>{e.number}</td>
                      <td className={"text-right"}><Money money={e.price}/></td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <table className={"table"}>
                <tbody>
                  <tr>
                    <th className={"text-left"}>Phí vận chuyển:</th>
                    {/*chèn phí vận chuyển vào*/}
                    <td className={"text-right"}><Money money={30000}/></td>
                  </tr>
                  <tr>
                    <th className={"text-left"}>Tổng tiền:</th>
                    <td className={"text-right"}><Money money={products?.reduce((pre, curr) => {
                      return pre + curr.price * curr.number;
                    }, 0)}/></td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="">
              <Button 
                sx={{
                  width: "100%",
                  backgroundColor: "rgb(255,145,77)",
                  border: "1px solid rgb(255,145,77)",
                  ":hover": {
                    backgroundColor: "transparent",
                    color: "rgb(255,145,77)",
                    border: 1,
                    borderColor: "rgb(255,145,77)"
                  }
                }} 
                className={"btn-check-out"}  
                variant="contained" 
                onClick={submitHandle}
              >
                Đặt hàng
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}