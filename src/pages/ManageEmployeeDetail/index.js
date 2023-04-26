import React from 'react';
import {Button, DatePicker, Form, Input, Select} from "antd";
import _ from "lodash";
import {signUpApi} from "~/api/site.api";
import {createEmployee} from "~/api/employee.api";
import {useNavigate} from "react-router-dom";
import {uploadFile} from "~/api/uploadFile.api";
import {createProduct, updateProduct} from "~/api/product.api";

const layout = {
  labelCol: { span: 24 },
  wrapperCol: { span: 24 },
};
function ManageEmployeeDetail() {
  const [form] = Form.useForm();

  const navigate = useNavigate();
  const submitForm = async () => {
    try {
      const formData = form.getFieldsValue();
      const body = {
        ...formData,
        birthday: new Date(formData?.birthday?.['$d'])
      };

      const res = await createEmployee(body);
      console.log('rés', res)
      alert('Tạo tài khoản thành công!');
      navigate('/manage/employee');
    }
    catch (err) {
      alert('Tạo tài khoản thất bại!');
      console.log(err);
    }
  }

  return (
    <section className="container py-5 h-100">
      <div className="row form-ant" style={{backgroundColor: "#fff"}}>
        <Form
          {...layout}
          form={form}
          name="control-hooks"
          className={"p-5 col-12 form-body-ant"}
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
            name="address"
            label="Địa chỉ"
            rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Button className={"btn-submit"} onClick={submitForm}  >
            Tạo tài khoản
          </Button>
        </Form>
      </div>
    </section>
  );
}

export default ManageEmployeeDetail;