import React, { useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { Layout, Menu, theme } from 'antd';
import Footer from "~/components/Footer";
import {DashboardOutlined, NotificationOutlined, ContactsOutlined, AlignRightOutlined, UserOutlined,UsergroupAddOutlined,DollarOutlined} from "@ant-design/icons";

const { Header, Sider } = Layout;

const items = [
  {
    name: '/manage/dashboard',
    label: <Link to="/manage/dashboard" style={{ textDecoration: 'none' }}>Dashboard</Link>,
    icon: <DashboardOutlined />,
  },
  {
    name: '/manage/product',
    label: <Link to="/manage/product" style={{ textDecoration: 'none' }}>Product</Link>,
    icon: <AlignRightOutlined />,
  },
  {
    name: '/manage/customer',
    label: <Link to="/manage/customer" style={{ textDecoration: 'none' }}>Customer</Link>,
    icon: <UserOutlined />,
  },
  {
    name: '/manage/transaction',
    label: <Link to="/manage/transaction" style={{ textDecoration: 'none' }}>Transaction</Link>,
    icon: <DollarOutlined />,
  },
].map((e, index) => ({
  ...e,
  key: index
}));

function AdminLayout() {
  const location = useLocation()
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout
      style={{
        minHeight: '100vh',
      }}
    >
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div className="logo">
          <Link to={'/'} title={'Về trang chủ'}>
            <img src={'/Uploads/img/logo/2.png'}
                 style={{
                   height: '50px',
                   width: '50px',
                   boxSizing: 'border-box',
                   margin: '10px 5px 0px 0px'
                 }}
            />
          </Link>
        </div>
        <Menu theme="dark" defaultSelectedKeys={[String(items.findIndex(e => location.pathname.includes(e.name)))]} mode="inline" items={items} />
      </Sider>
      <Layout className="site-layout">
        <Header>
          
        </Header>

        <Outlet />

        {/*<Footer*/}
        {/*  style={{*/}
        {/*    textAlign: 'center',*/}
        {/*  }}*/}
        {/*>*/}
        {/*  Footer*/}
        {/*</Footer>*/}
      </Layout>
    </Layout>
  );
}

export default AdminLayout;