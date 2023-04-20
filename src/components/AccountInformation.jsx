import React from 'react';
import {Link} from "react-router-dom";
import TextArea from "antd/es/input/TextArea";
import {Label} from "@mui/icons-material";
import {Button, ConfigProvider, Input, Space} from "antd";
import {EditOutlined} from "@ant-design/icons";

const AccountInformation = () => {
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
                  colorPrimary: '#00b96b',
                },
              }}
            >
              <Button type="primary" colorBgContainer={'green-6'} size={'large'} icon={<EditOutlined /> }>Chỉnh sửa thông tin</Button>
            </ConfigProvider>
            <div className="form-group text-left">
              <label htmlFor="name" className={"font-weight-bold"}>Họ & Tên</label>
              <Input type="text" className={"form-control"} id={"name"} maxLength={20} disabled />
            </div>
            <div className="form-group text-left">
              <label htmlFor="account" className={"font-weight-bold"}>Tên tài khoản</label>
              <Input type="text" className={"form-control"} id={"account"} disabled />
            </div>
            <div className="form-group text-left">
              <label htmlFor="phone" className={"font-weight-bold"}>Số điện thoại</label>
              <Input type="text" className={"form-control"} id={"phone"} disabled />
            </div>
            <div className="form-group text-left">
              <label htmlFor="address" className={"font-weight-bold"}>Địa chỉ</label>
              <Input type="text" className={"form-control"} id={"address"} disabled />
            </div>
            <div className="form-group text-left">
              <label htmlFor="email" className={"font-weight-bold"}>Email</label>
              <Input type="text" className={"form-control"} id={"email"} disabled />
            </div>
            <div className="form-group text-left">
              <label htmlFor="birthday" className={"font-weight-bold"}>Ngày sinh</label>
              <Input type="date" className={"form-control"} id={"birthday"} disabled />
            </div>
          </Space>
        </div>
      </div>
    </section>
  );
};

export default AccountInformation;