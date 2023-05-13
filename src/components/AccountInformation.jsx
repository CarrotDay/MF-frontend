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

const layout = {
  labelCol: { span: 24 },
  wrapperCol: { span: 24 },
};

const initForm = {
  type: JSON.parse(process.env.REACT_APP_ANIME)
};

const token = window.localStorage.getItem("token");
const account = token ? jwtDecode(token) : null;

const AccountInformation = () => {
  const [form] = Form.useForm();
  const [users, setUsers] = useState({});
  const navigate = useNavigate();

  useQuery({
    queryKey: ['users', account?.id],
    queryFn: () => () => {
      if (jwtDecode(token).role === 1) {
        return getCustomer(account?.id);
      }
      if (jwtDecode(token).role === 2) {
        return getCustomer(account?.id);
      }
    },
    onSuccess: data => {
      const users = data.data;
      users.birthday = moment(users.birthday);
      form.setFieldsValue(users);
      setUsers(users);
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
            <ConfigProvider
              theme={{
                token: {
                  colorBgBase: '#03C988',
                },
              }}
            >
              <Button type="primary" colorBgContainer={'green-6'} size={'large'} icon={<EditOutlined /> } onClick={() => navigate('/update-account-information')}>Chỉnh sửa thông tin</Button>
            </ConfigProvider>
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