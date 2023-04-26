import React, {useEffect, useState} from 'react'
import axios from 'axios';
import {Link} from 'react-router-dom';
import {Button, Form, Input, Select, DatePicker, Divider} from 'antd';
import _ from "lodash";

const layout = {
  labelCol: { span: 24 },
  wrapperCol: { span: 24 },
};

const validateMessages = {
  required: '${label} là bắt buộc!',
  types: {
    email: '${label} không hợp lệ!',
  },
};

const { Option } = Select;

function SignUp() {
  const [optionsPro, setOptionsPro] = useState([]);
  const [province, setProvince] = useState();
  const [optionsDistrict, setOptionsDistrict] = useState([]);
  const [district, setDistrict] = useState();
  const [optionsWard, setOptionsWard] = useState([]);
  const [ward, setWard] = useState();

  const [form] = Form.useForm();
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
    }
  , []);

  useEffect(() => {
      axios.get('https://dev-online-gateway.ghn.vn/shiip/public-api/master-data/district', {
        headers: {
          'Content-Type': 'application/json',
          'Token': '0c09627a-c105-11ed-ab31-3eeb4194879e'
        },
        params: {
          "province_id": province
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
    , [province]);

  useEffect(() => {
      axios.post('https://dev-online-gateway.ghn.vn/shiip/public-api/master-data/ward?district_id',{
        "district_id": district
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
    , [district]);
  const onFinish = (values) => {
    console.log('values',values);
  };

  const handleSelectPro = (value) => {
    setProvince(value);
    return value;
  }

  const handleSelectDistrict = (value) => {
    console.log('value', value)
    setDistrict(value);
    return value;
  }

  const handleSelectWard = (value) => {
    setWard(value);
    return value;
  }

  return (
    <section className="container py-5 h-100">
      <div className="row form-ant" style={{backgroundColor: "#fff"}}>
        <div className="img-form d-none d-lg-block col-lg-6 p-0">
          <img src="/Uploads/figure/1.png" className={"h-100"}/>
        </div>
        <Form
          {...layout}
          name="control-hooks"
          onFinish={onFinish}
          validateMessages={validateMessages}
          className={"p-5 col-12 col-lg-6 form-body-ant"}
        >
          <div className="logo">
            <img src="/Uploads/img/logo/2.png" alt=""/>
          </div>
          <h1 className={"title font-weight-bold"}>Đăng ký</h1>
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
            name="account"
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
            label="Mật khẩu"
            name="password"
            rules={[{ required: true }]}
            hasFeedback
          >
            <Input.Password />
          </Form.Item>
          <Form.Item
            label="Nhập lại mật khẩu"
            name="confirm"
            rules={[
              { required: true },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue('password') === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(new Error('Mật khẩu không trùng khớp!'));
                },
              }),
            ]}
            dependencies={['password']}
            hasFeedback
          >
            <Input.Password />
          </Form.Item>

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
            <Input />
          </Form.Item>
          <div className="btn-group d-flex flex-column mt-3">
            <Button className={"btn-submit"} htmlType="submit" >
              Đăng ký
            </Button>
            <Divider plain>Hoặc</Divider>
            <Link to={'/sign-in'}>
              <Button className={"btn-submit"} >
                Quay lại trang Đăng nhập
              </Button>
            </Link>
          </div>
        </Form>
      </div>
    </section>
  );
}

export default SignUp;