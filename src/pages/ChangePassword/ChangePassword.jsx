import React, {useState} from 'react';
import {Button, ConfigProvider, DatePicker, Form, Input, Select, Space} from "antd";
import _ from "lodash";
import jwtDecode from "jwt-decode";
import {useNavigate} from "react-router-dom";
import {changePasswordEmployee} from "~/api/employee.api";
import {changePasswordCustomer} from "~/api/customer.api";

const validateMessages = {
  required: '${label} là bắt buộc!',
  types: {
    email: '${label} không hợp lệ!',
  },
};

const initForm = {
  type: JSON.parse(process.env.REACT_APP_ANIME)
};

const layout = {
  labelCol: { span: 24 },
  wrapperCol: { span: 24 },
};


const ChangePassword = () => {
  const token = window.localStorage.getItem("token");
  const account = token ? jwtDecode(token) : null;
  const [form] = Form.useForm();
  const navigate = useNavigate();

  const submitForm = async () => {
    try {
      const formData = form.getFieldsValue();
      const body = {...formData};

      if (account?.role == 1) {
        await changePasswordEmployee(account?.id, body);
      }
      console.log(formData)
      if (account?.role == 2) {
        await changePasswordCustomer(account?.id, body);
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
            <h1 className={"font-weight-bold"}>Đổi mật khẩu</h1>
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
              style={{width: '50%'}}
            >
              <Form.Item
                label="Mật khẩu cũ"
                name="oldPassword"
                rules={[{ required: true }]}
                hasFeedback
              >
                <Input.Password />
              </Form.Item>
              <Form.Item
                label="Mật khẩu mới"
                name="newPassword"
                rules={[
                  { required: true },
                  { validator: (_, value) => {
                      if (value.length < 8 || !/^[a-zA-Z0-9]*$/.test(value)) {
                        return Promise.reject(
                          new Error(
                            'Mật khẩu phải có ít nhất 8 ký tự và không chứa ký tự đặc biệt!'
                          )
                        );
                      }
                      return Promise.resolve();
                    },
                  }
                ]}
                hasFeedback
              >
                <Input.Password />
              </Form.Item>
              <Form.Item
                label="Nhập lại mật khẩu mới"
                name="confirm"
                rules={[
                  { required: true },
                  ({ getFieldValue }) => ({
                    validator(_, value) {
                      if (!value || getFieldValue('newPassword') === value) {
                        return Promise.resolve();
                      }
                      return Promise.reject(new Error('Mật khẩu không trùng khớp!'));
                    },
                  }),
                ]}
                dependencies={['newPassword']}
                hasFeedback
              >
                <Input.Password />
              </Form.Item>


              <ConfigProvider
                theme={{
                  token: {
                    colorBgBase: '#03C988',
                  },
                }}
              >
                <Button size={'large'}
                        style={{color: 'white', border: 0}}
                        onClick={submitForm}
                >
                  Xác nhận
                </Button>
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

export default ChangePassword;