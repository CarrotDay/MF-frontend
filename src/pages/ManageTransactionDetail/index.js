import React, {useEffect, useState} from 'react';
import jwtDecode from "jwt-decode";
import { Form, Input, Table, Typography, Button, Modal } from "antd";
import {useQuery, useQueryClient} from "@tanstack/react-query";
import {useParams} from "react-router-dom";
import axios from "axios";
import get from 'lodash/get';
import find from 'lodash/find';

import { getTransactionsByMeta, updateTransaction } from "~/api/transaction.api";
import Money, { getMoney } from "~/components/Money";

import { columns } from './data';

const layout = {
  labelCol: { span: 24 },
  wrapperCol: { span: 24 },
};

const dataGetFee = {
  from_district_id: 1449, // để cố định
  service_id: 53320, // loại dịch vụ cố định: Chuẩn
  service_type_id: null, // để cố định
  to_district_id: 1452, // lấy district id người nhận
  to_ward_code: '21012', // lấy ward id người nhận
  height: 50, // để cố định
  length: 20,// để cố định
  weight: 500,// để cố định
  width: 20,// để cố định
  insurance_value: 10000, // số tiền tổng sản phẩm
  coupon: null
};

const token = window.localStorage.getItem("token");
const account = token?jwtDecode(token):null;
console.log(account);

function ManageTransactionDetail() {
  const [form] = Form.useForm();
  const queryClient = useQueryClient();
  const { meta } = useParams();

  const [updateTransactionModel, setUpdateTransactionModel] = useState(null);
  const [transactionDetail, setTransactionDetail] = useState(null); // lấy các chi tiết đơn hàng của đơn hàng trên
  const [cost, setCost] = useState(0); // tổng tiền
  const [status, setStatus] = useState(null);

  useQuery({
    queryKey: ['transaction', meta],
    queryFn: () => getTransactionsByMeta(meta),
    onSuccess: data => {
      form.setFieldsValue({
        nameEmp: data?.data?.employeeNavigation?.name || '',
        nameCustomer: data?.data?.customerNavigation?.name,
        phone: data?.data?.customerNavigation?.phone,
        nameStatus: data?.data?.statusNavigation?.content,
        isActive: data?.data?.active,
        address: data?.data?.address,
        fee: getMoney(data?.data?.fee)
      });

      setStatus(data?.data?.statusNavigation?.id < 4);

      setCost(data?.data?.fee + data?.data?.price);

      setTransactionDetail(data?.data?.transactionDetails?.map((e, i) => ({
        key: i,
        nameProduct: e?.productNavigation?.name,
        amount: e?.amount,
        price: e?.price,
        cost: e?.amount * e?.price
      })));
    }
  });
  
  const updateTransactionHandle = async (status) => {
    try {
      await updateTransaction(meta, { status });
      alert('Cập nhật hóa đơn thành công');
      if (updateTransactionModel === true) setUpdateTransactionModel(false);
      queryClient.invalidateQueries(['transaction']);
    }
    catch (err) {
      alert('Cập nhật hóa đơn thất bại');
    }
  }

  return (
    <section className="container py-5 h-100">
      {status && (
        <div className="text-left">
          {String(account?.role) === String(0) || (
            <Button 
              onClick={() => setUpdateTransactionModel(true)}
              type="primary" 
              style={{ margin: '4px' }}
            >Cập nhật đơn hàng</Button>
          )}

          <Button type="primary" style={{ margin: '4px' }} danger>Hủy đơn hàng</Button>
        </div>
      )}
      <div className="row form-ant" style={{backgroundColor: "#fff"}}>
        <Form
          {...layout}
          form={form}
          name="control-hooks"
          className={"p-5 col-12 form-body-ant"}
        >
          <Form.Item
            name="nameEmp"
            label="Nhân viên thực hiện"
          >
            <Input readOnly />
          </Form.Item>
          <Form.Item
            name="nameCustomer"
            label="Khách hàng"
          >
            <Input readOnly />
          </Form.Item>
          <Form.Item
            name="phone"
            label="Số điện thoại khách hàng"
          >
            <Input readOnly />
          </Form.Item>
          <Form.Item
            name="nameStatus"
            label="Trạng thái đơn hàng"
          >
            <Input readOnly />
          </Form.Item>
          <Form.Item
            name="isActive"
            label="Hoạt động"
          >
            <Input readOnly />
          </Form.Item>
          <Form.Item
            name="fee"
            label="Phí vận chuyển"
          >
            <Input readOnly />
          </Form.Item>
          <Form.Item
            name="address"
            label="Địa chỉ khách hàng"
          >
            <Input readOnly />
          </Form.Item>
          <Typography.Title level={4}>Danh sách sản phẩm</Typography.Title>
            <Table
              columns={columns}
              dataSource={transactionDetail}
            />
          <Typography.Title level={4}>Tổng tiền (Đã tính phí vận chuyển): <Money money={cost}/></Typography.Title>
        </Form>
      </div>
      
      <Modal
        open={updateTransactionModel}
        title="Cập nhật hóa đơn"
        onCancel={() => setUpdateTransactionModel(false)}
        footer={[]}
      >
        <div style={{ padding: '12px' }}>
          {(status < 2) && (
            <Button 
              type="primary"
              style={{ width: '100%', margin: '8px 0px' }}
              onClick={() => updateTransactionHandle(2)}
            >Xác nhận thanh toán đơn hàng</Button>
          )}

          {(status < 3) && (
            <Button 
              type="primary"
              style={{ width: '100%', margin: '8px 0px' }}
              onClick={() => updateTransactionHandle(3)}
            >Đang vận chuyển đơn hàng</Button>
          )}

          {(status < 4) && (
            <Button 
              type="primary"
              style={{ width: '100%', margin: '8px 0px' }}
              onClick={() => updateTransactionHandle(4)}
            >Xác nhận đơn hàng</Button>
          )}
        </div>
      </Modal>
    </section>
  );
}

export default ManageTransactionDetail;
