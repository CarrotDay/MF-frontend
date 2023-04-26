import React, {useEffect, useState} from "react";
import ProductCart from "~/components/ProductCart";
import {Button} from "@mui/material";
import Money from "~/components/Money";
import {Form, Input, Select} from "antd";
import axios from "axios";
import _ from "lodash";

const layout = {
  labelCol: { span: 24 },
  wrapperCol: { span: 24 },
};

const validateMessages = {
  required: '${label} là bắt buộc!',
};

const { Option } = Select;


export default function Cart() {
  const [form] = Form.useForm();

  const [address, setAddress] = useState('A23, Nguyễn Hữu Thọ, Phước Kiển, Nhà Bè, Hồ Chí Minh');

  const [optionsPro, setOptionsPro] = useState([]);
  const [province, setProvince] = useState({id: null, name: ''});
  const [optionsDistrict, setOptionsDistrict] = useState([]);
  const [district, setDistrict] = useState({id: null, name: ''});
  const [optionsWard, setOptionsWard] = useState([]);
  const [ward, setWard] = useState({id: null, name: ''});
  const [road, setRoad] = useState();

  function getAddressComponents(address) {
    const parts = address.split(',').map(part => part.trim());

    const provinceName = parts.pop();
    const districtName = parts.pop();
    const wardName = parts.pop();
    const roadName = parts.join(', ');

    return { roadName, wardName, districtName, provinceName };
  }

  useEffect(() => {
    const {roadName, wardName, districtName, provinceName} = getAddressComponents(address);
    setRoad(roadName);
    setWard({...ward  , 'name': wardName});
    setDistrict({...district  , 'name': districtName});
    setProvince({...province  , 'name': provinceName});
  }, [address]);


  useEffect(() => {
    axios.get('https://dev-online-gateway.ghn.vn/shiip/public-api/master-data/province', {
      headers: {
        'Content-Type': 'application/json',
        'Token': '0c09627a-c105-11ed-ab31-3eeb4194879e'
      }
    })
      .then(response => {
        const provinces = response.data.data;
        const opt = [];
        provinces.forEach((province) => {
          opt.push({
            value: province.ProvinceID,
            label: province.ProvinceName,
          })
        });
        setOptionsPro(opt);
      })
      .catch(error => {
        // Xử lý lỗi
      });
  }, []);

  useEffect(() => {
    if (province.id) {
      axios.get('https://dev-online-gateway.ghn.vn/shiip/public-api/master-data/district', {
        headers: {
          'Content-Type': 'application/json',
          'Token': '0c09627a-c105-11ed-ab31-3eeb4194879e'
        },
        params: {
          "province_id": province.id
        }
      })
        .then(response => {
          const districts = response.data.data.reverse();
          const opt = [];
          districts.forEach((district) => {
            opt.push({
              value: district.DistrictID,
              label: district.DistrictName,
            })
          });
          setOptionsDistrict(opt);
        })
        .catch(error => {
          // Xử lý lỗi
        });
    }
  }, [province]);

  useEffect(() => {
    if (district.id) {
      axios.post('https://dev-online-gateway.ghn.vn/shiip/public-api/master-data/ward?district_id',{
        "district_id": district.id
      }, {
        headers: {
          'Content-Type': 'application/json',
          'Token': '0c09627a-c105-11ed-ab31-3eeb4194879e'
        },
      })
        .then(response => {
          const wards = response.data.data;
          const opt = [];
          wards.forEach((ward) => {
            opt.push({
              value: ward.WardCode,
              label: ward.WardName,
            })
          });
          setOptionsWard(opt);
        })
        .catch(error => {
          // Xử lý lỗi
        });
    }
  }, [district]);

  const handleSelectPro = (value) => {
    setProvince({ ...province, id: value});
    return value;
  }

  const handleSelectDistrict = (value) => {
    setDistrict({ ...district, id: value });
    return value;
  }

  const handleSelectWard = (value) => {
    setWard({ ...ward, id: value});
    return value;
  }

  return (
    <section className="cart container center">
      <div className="row my-3">
        <div className="content-list col-12 col-lg-8 text-left ">
          <div className="title-list px-3">
            <h1 className="font-weight-bold">Giỏ hàng</h1>
          </div>
          <div className="list-product container" style={{backgroundColor: "#fff"}}>
            <ProductCart />
            <ProductCart />
            <ProductCart />
            <ProductCart />
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
                  <Select placeholder='Chọn tỉnh/thành' onSelect={handleSelectPro}>
                    {optionsPro?_.map(optionsPro, (o) => {
                      return (<Option value={o.value}>{o.label}</Option>);
                    }):null}
                  </Select>
                </Form.Item>
                <Form.Item
                  name="district"
                  label="Quận/Huyện"
                  rules={[{ required: true }]}>
                  <Select placeholder='Chọn quận/huyện' onSelect={handleSelectDistrict}>
                    {optionsDistrict?_.map(optionsDistrict, (o) => {
                      return (<Option value={o.value}>{o.label}</Option>);
                    }):null}
                  </Select>
                </Form.Item>
                <Form.Item
                  name="ward"
                  label="Phường/Xã/Thị trấn"
                  rules={[{ required: true }]}>
                  <Select placeholder='Chọn phường/xã/thị trấn' onSelect={handleSelectWard}>
                    {optionsWard?_.map(optionsWard, (o) => {
                      return (<Option value={o.value}>{o.label}</Option>);
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
                  <Input value={road} />
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
                <tr>
                  <th className={"text-left"}>Tên</th>
                  <th>Số lượng</th>
                  <th className={"text-right"}>Giá tiền</th>
                </tr>
                <tr>
                  <td className={"text-left"}>Boku girl</td>
                  <td>4</td>
                  <td className={"text-right"}><Money money={20000}/></td>
                </tr>
              </table>
              <table className={"table"}>
                <tr>
                  <th className={"text-left"}>Phí vận chuyển:</th>
                  {/*chèn phí vận chuyển vào*/}
                  <td className={"text-right"}><Money money={30000}/></td>
                </tr>
                <tr>
                  <th className={"text-left"}>Tổng tiền:</th>
                  <td className={"text-right"}><Money money={110000}/></td>
                </tr>
              </table>
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
                Đặt hàng
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}