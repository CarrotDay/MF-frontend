import React, {useState} from 'react';
import jwtDecode from "jwt-decode";
import {Form, Input} from "antd";
import get from 'lodash/get';
import find from 'lodash/find';

import {useQuery} from "@tanstack/react-query";
import {getEmployees} from "~/api/employee.api";
import {useParams} from "react-router-dom";
import {getTransactionsByMeta} from "~/api/transaction.api";
const layout = {
  labelCol: { span: 24 },
  wrapperCol: { span: 24 },
};
function ManageTransactionDetail() {
  const [form] = Form.useForm();
  const { meta } = useParams();
  const token = window.localStorage.getItem("token");
  const decode = token?jwtDecode(token):null;
  const [employees, setEmployees] = useState([]);
  // const [nameEmp, setNameEmp] = useState(get(find(employees, {'username': get(decode, 'username')}), 'name'));
  const [nameEmp, setNameEmp] = useState('Nguyễn Thanh Thuý');
  const [transaction, setTransaction] = useState(null);

  useQuery({
    queryKey: ['employees'],
    queryFn: getEmployees,
    onSuccess: data => {
      const employees = data.data['$values'];
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
            name="nameCustomer"
            label="Khách hàng"
          >
            <Input defaultValue={'Tên khách hàng'} readOnly />
          </Form.Item>
        </Form>
      </div>
    </section>
  );
}

export default ManageTransactionDetail;
