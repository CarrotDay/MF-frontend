import React, {useEffect, useState} from 'react';
import {Button, ConfigProvider, DatePicker, Form, Input, Select, Space} from "antd";
import jwtDecode from "jwt-decode";
import _ from "lodash";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import {useQuery} from "@tanstack/react-query";
import {getCustomer, updateCustomer} from "~/api/customer.api";
import dayjs from 'dayjs';
import {getEmployee, updateEmployee} from "~/api/employee.api";

const validateMessages = {
  required: '${label} là bắt buộc!',
  types: {
    email: '${label} không hợp lệ!',
  },
};

const initForm = {
  type: JSON.parse(process.env.REACT_APP_ANIME)
};

const { Option } = Select;

const layout = {
  labelCol: { span: 24 },
  wrapperCol: { span: 24 },
};

const token = window.localStorage.getItem("token");
const account = token ? jwtDecode(token) : null;

const axiosOpt = {
  headers: {
    'Content-Type': 'application/json',
    'Token': '0c09627a-c105-11ed-ab31-3eeb4194879e'
  }
};

const UpdateAccountInfo = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();

  const [updateForm, setUpdateForm] = useState(null);

  function getAddressComponents(address) {
    const parts = address.split(',').map(part => part.trim());

    const provinceName = parts.pop();
    const districtName = parts.pop();
    const wardName = parts.pop();
    const roadName = parts.join(', ');

    return { roadName, wardName, districtName, provinceName };
  }

  useQuery({
    queryKey: ['user', account?.id],
    queryFn: async () => {
      if (account?.role == 1) {
        return await getEmployee(account?.id);
      }
      if (account?.role == 2) {
        return await getCustomer(account?.id);
      }
    },
    onSuccess: data => {
      const _user = data.data;
      const {
        roadName,
        wardName,
        districtName,
        provinceName
      } = getAddressComponents(_user?.address);
      _user.road = roadName;
      _user.ward = wardName;
      _user.district = districtName;
      _user.province = provinceName;
      _user.birthday = dayjs(_user.birthday);
      form.setFieldsValue(_user);
    }

  });

  const [optionsPro, setOptionsPro] = useState([]);
  const [optionsDistrict, setOptionsDistrict] = useState([]);
  const [optionsWard, setOptionsWard] = useState([]);

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

  useEffect(() => {
    (async () => {
      const {
        roadName,
        wardName,
        districtName,
        provinceName
      } = getAddressComponents(account?.address);
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
        ...form.getFieldsValue(),
        district: null,
        ward: null,
        road: null
      };
      form.setFieldsValue(data);
    }
    else if (str === 'district') {
      const data = {
        ...form.getFieldsValue(),
        ward: null,
        road: null
      };
      form.setFieldsValue(data);
    }
    setUpdateForm(!updateForm);
  }

  const submitForm = async () => {
    try {
      const formData = form.getFieldsValue();
      const addressForm = form.getFieldsValue();
      const address = [
        addressForm?.road,
        optionsWard?.find(e => e.value === addressForm.ward)?.label,
        optionsDistrict?.find(e => e.value === addressForm.district)?.label,
        optionsPro?.find(e => e.value === addressForm.province)?.label
      ].join(', ');
      const body = {
        ...formData,
        username: formData.username,
        birthday: formData.birthday.format('YYYY/MM/DD'),
        address: address,
      };

      if (account?.role == 1) {
        await updateEmployee(account?.id, body);
      }
      if (account?.role == 2) {
        await updateCustomer(account?.id, body);
      }
      alert('Cập nhật thành công!');
      navigate('/account-information');
    }
    catch (err) {
      alert('Cập nhật thất bại!');
      console.log(err);
    }
  }

  return (
    <section className={"container"}>
      <div className="row  my-3">
        <div className="account-detail col-12 text-left mb-3">
          <div className="title-list px-3">
            <h1 className={"font-weight-bold"}>Thông tin tài khoản</h1>
          </div>
          <Space direction="vertical" className="account-ìnor container pt-3 pb-5 px-5" style={{backgroundColor: "#fff"}}>
            <Form
              {...layout}
              form={form}
              name="control-hooks"
              onFinish={submitForm}
              className={"form-body-ant"}
              initialValues={initForm}
              validateMessages={validateMessages}
            >
              <Form.Item
                name="name"
                label="Họ và Tên"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                name="username"
                label="Tên tài khoản"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                name="phone"
                label="Số điện thoại"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item name={'email'} label="Email" rules={[{ type: 'email', required: true }]}>
                <Input />
              </Form.Item>
              <Form.Item name="birthday" label="Ngày sinh" rules={[{ required: true }]}>
                <DatePicker />
              </Form.Item>

              <Form.Item
                name="province"
                label="Tỉnh/Thành"
                rules={[{ required: true }]}>
                <Select placeholder='Chọn tỉnh/thành' onChange={() => updateFormHandle("province")}>
                  {optionsPro?_.map(optionsPro, (o) => {
                    return (<Option value={o.value}>{o.label}</Option>);
                  }):null}
                </Select>
              </Form.Item>
              <Form.Item
                name="district"
                label="Quận/Huyện"
                rules={[{ required: true }]}>
                <Select placeholder='Chọn quận/huyện' onChange={() => updateFormHandle("district")}>
                  {optionsDistrict?_.map(optionsDistrict, (o) => {
                    return (<Option value={o.value}>{o.label}</Option>);
                  }):null}
                </Select>
              </Form.Item>
              <Form.Item
                name="ward"
                label="Phường/Xã/Thị trấn"
                rules={[{ required: true }]}>
                <Select placeholder='Chọn phường/xã/thị trấn' >
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
                <Input />
              </Form.Item>

              <ConfigProvider
                theme={{
                  token: {
                    colorBgBase: '#03C988',
                  },
                }}
              >
                <Button size={'large'} style={{color: 'white', border: 0}} onClick={submitForm}>Xác nhận</Button>
              </ConfigProvider>
              <ConfigProvider
                theme={{
                  token: {
                    colorBgBase: '#ED2B2A',
                  },
                }}
              >
                <Button size={'large'} style={{marginLeft: 10, color: 'white', border: 0}} onClick={() => navigate('/account-information')}>Huỷ</Button>
              </ConfigProvider>
            </Form>
          </Space>
        </div>
      </div>
    </section>
  );
};

export default UpdateAccountInfo;