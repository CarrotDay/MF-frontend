import React, {useEffect, useState} from 'react';
import jwtDecode from "jwt-decode";
import {Form, Input, Table, Typography} from "antd";
import get from 'lodash/get';
import find from 'lodash/find';
import { columns } from './data';

import {useQuery} from "@tanstack/react-query";
import {getEmployees} from "~/api/employee.api";
import {useParams} from "react-router-dom";
import {getTransactionsByMeta} from "~/api/transaction.api";
import axios from "axios";

const layout = {
  labelCol: { span: 24 },
  wrapperCol: { span: 24 },
};


function ManageTransactionDetail() {
  const [form] = Form.useForm();
  const { meta } = useParams();
  const token = window.localStorage.getItem("token");
  const decode = token?jwtDecode(token):null;

  const [employees, setEmployees] = useState([]); // lấy tất cả nhân viên
  // const [nameEmp, setNameEmp] = useState(get(find(employees, {'username': get(decode, 'username')}), 'name'));
  const [nameEmp, setNameEmp] = useState('Nguyễn Thanh Thuý'); // tên nhân viên xác nhận đơn hàng
  const [transaction, setTransaction] = useState(null); // lấy thông tin đơn hàng của khách hàng
  const [transactionDetail, setTransactionDetail] = useState(null); // lấy các chi tiết đơn hàng của đơn hàng trên
  const [fee, setFee] = useState(0); // phí vận chuyển
  const [cost, setCost] = useState(0); // tổng tiền

  const [province, setProvince] = useState();
  const [district, setDistrict] = useState();
  const [ward, setWard] = useState();


  const configGetFee = {
    headers: {
      'Content-Type': 'application/json',
      'Token': '0c09627a-c105-11ed-ab31-3eeb4194879e',
      'ShopId': '122111'
    }
  };

// data get fee
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


  useQuery({
    queryKey: ['employees'],
    queryFn: getEmployees,
    onSuccess: data => {
      const employees = data.data;
      const currentEmployee = find(employees, {'username': get(decode, 'username')});
      setEmployees(employees);
      setNameEmp(get(currentEmployee, 'name'));
    }
  });

  useQuery({
    queryKey: ['transaction', meta],
    queryFn: () => getTransactionsByMeta(meta),
    onSuccess: data => {
      console.log('data',data.data);
      setTransaction(data.data);
    }
  });
  // get province id
  useEffect(() => {
      axios.get('https://dev-online-gateway.ghn.vn/shiip/public-api/master-data/province', {
        headers: {
          'Content-Type': 'application/json',
          'Token': '0c09627a-c105-11ed-ab31-3eeb4194879e'
        }
      })
        .then(response => {
          const provinces = response.data.data;

        })
        .catch(error => {
          // Xử lý lỗi
        });
    }
    , []);

  // get District Id
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
        })
        .catch(error => {
          // Xử lý lỗi
        });
    }
    , [province]);
  // get ward id
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
        })
        .catch(error => {
          // Xử lý lỗi
        });
    }
    , [district]);
  // get fee
  useEffect(() => {
    axios.post('https://dev-online-gateway.ghn.vn/shiip/public-api/v2/shipping-order/fee', dataGetFee, configGetFee)
      .then(response => {
        setFee(response.data.data.total)
        // Xử lý dữ liệu trả về
      })
      .catch(error => {
        console.error(error);
        // Xử lý lỗi
      });
  }, []);

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
            name="nameEmp"
            label="Nhân viên thực hiện"
          >
            <Input defaultValue={nameEmp} readOnly />
          </Form.Item>
          <Form.Item
            name="nameCustomer"
            label="Khách hàng"
          >
            <Input defaultValue={'Tên khách hàng'} readOnly />
          </Form.Item>
          <Form.Item
            name="phone"
            label="Số điện thoại khách hàng"
          >
            <Input defaultValue={'0356625002'} readOnly />
          </Form.Item>
          <Form.Item
            name="nameStatus"
            label="Trạng thái đơn hàng"
          >
            <Input defaultValue={'Chờ thanh toán'} readOnly />
          </Form.Item>
          <Form.Item
            name="isActive"
            label="Hoạt động"
          >
            <Input defaultValue={'Hiện'} readOnly />
          </Form.Item>
          <Form.Item
            name="fee"
            label="Phí vận chuyển"
          >
            <Input defaultValue={fee} readOnly />
          </Form.Item>
          <Form.Item
            name="address"
            label="Địa chỉ khách hàng"
          >
            <Input defaultValue={'A23, Nguyễn Hữu Thọ, Phước Kiển, Nhà Bè, Hồ Chí Minh'} readOnly />
          </Form.Item>
          <Typography.Title level={4}>Danh sách sản phẩm</Typography.Title>
          {!transactionDetail && (<>
            <Table
              columns={columns}
              dataSource={transactionDetail}
            />
          </>)}
          <Typography.Title level={4}>Tổng tiền (Đã tính phí vận chuyển): {cost+fee}</Typography.Title>
        </Form>
      </div>
    </section>
  );
}

export default ManageTransactionDetail;
