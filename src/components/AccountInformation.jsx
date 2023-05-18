import React, {useEffect, useState} from 'react';
import {Button, ConfigProvider, DatePicker, Divider, Form, Input, Select, Space} from "antd";
import {EditOutlined} from "@ant-design/icons";
import jwtDecode from "jwt-decode";
import find from "lodash/find";
import get from "lodash/get";
import {getCustomer} from "~/api/customer.api";
import {useQuery} from "@tanstack/react-query";
import moment from "moment";
import {useNavigate} from "react-router-dom";
import {getEmployee} from "~/api/employee.api";

const layout = {
  labelCol: { span: 24 },
  wrapperCol: { span: 24 },
};

const initForm = {
  type: JSON.parse(process.env.REACT_APP_ANIME)
};

const getUser = {
  1: getEmployee, 
  2: getCustomer,
}


const AccountInformation = () => {
  const token = window.localStorage.getItem("token");
  const account = token ? jwtDecode(token) : null;

  const [form] = Form.useForm();
  const navigate = useNavigate();

  useQuery({
    queryKey: ['user', account?.id],
    queryFn: () => getUser[account?.role](account?.id),
    onSuccess: data => {
      const users = data.data;
      users.birthday = moment(users.birthday);
      form.setFieldsValue(users);
      console.log(users)
    }
  });

  const onFinish = (values) => {
    console.log('values',values);
  };

  return (
    <section className={"container"}>
      <div className="row  my-3">
        <div className="account-detail col-12 text-left mb-3">
          <div className="title-list px-3">
            <h1 className={"font-weight-bold"}>Thông tin tài khoản</h1>
          </div>
          <Space direction="vertical" className="account-ìnor container pt-3 pb-5 px-5" style={{backgroundColor: "#fff"}}>
            <Space direction="horizontal">
              <ConfigProvider
                theme={{
                  token: {
                    colorBgBase: '#03C988',
                  },
                }}
              >
                <Button type="primary" size={'large'} icon={<EditOutlined /> } style={{color: 'white', border: 0}} onClick={() => navigate('/update-account-information')}>Chỉnh sửa thông tin</Button>
              </ConfigProvider>
              <ConfigProvider
                theme={{
                  token: {
                    colorBgBase: '#03C988',
                  },
                }}
              >
                <Button size={'large'} icon={<EditOutlined /> } style={{marginLeft: 10, color: 'white', border: 0}} onClick={() => navigate('/change-password')}>Đổi mật khẩu</Button>
              </ConfigProvider>
            </Space>
            <Form
              {...layout}
              form={form}
              name="control-hooks"
              onFinish={onFinish}
              className={"form-body-ant"}
              initialValues={initForm}
            >
              <Form.Item
                name="name"
                label="Họ và Tên"
              >
                <Input readOnly/>
              </Form.Item>
              <Form.Item
                name="username"
                label="Tên tài khoản"
              >
                <Input readOnly/>
              </Form.Item>
              <Form.Item
                name="phone"
                label="Số điện thoại"
              >
                <Input readOnly/>
              </Form.Item>
              <Form.Item name={'email'} label="Email">
                <Input readOnly/>
              </Form.Item>
              <Form.Item name="birthday" label="Ngày sinh" >
                <DatePicker format={'DD/MM/YYYY'} disabled />
              </Form.Item>

              <Form.Item
                name="address"
                label="Địa chỉ"
              >
                <Input readOnly />
              </Form.Item>
            </Form>

          </Space>
        </div>
      </div>
    </section>
  );
};

export default AccountInformation;