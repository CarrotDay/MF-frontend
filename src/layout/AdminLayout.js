import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { Layout, Menu, theme } from 'antd';
import Footer from "~/components/Footer";
import {DashboardOutlined, NotificationOutlined, ContactsOutlined, AlignRightOutlined, UserOutlined,UsergroupAddOutlined,DollarOutlined} from "@ant-design/icons";

const { Header, Sider } = Layout;

const items = [
  {
    key: '1',
    label: <Link to="/manage/dashboard" style={{ textDecoration: 'none' }}>Dashboard</Link>,
    icon: <DashboardOutlined />,
  },
  {
    key: '2',
    label: <Link to="/manage/site" style={{ textDecoration: 'none' }}>Site</Link>,
    icon: <ContactsOutlined />,
  },
  {
    key: '3',
    label: <Link to="/manage/product" style={{ textDecoration: 'none' }}>Product</Link>,
    icon: <AlignRightOutlined />,
  },
  {
    key: '4',
    label: <Link to="/manage/customer" style={{ textDecoration: 'none' }}>Customer</Link>,
    icon: <UserOutlined />,
  },
  {
    key: '5',
    label: <Link to="/manage/employee" style={{ textDecoration: 'none' }}>Employee</Link>,
    icon: <UsergroupAddOutlined />,
  },
  {
    key: '6',
    label: <Link to="/manage/transaction" style={{ textDecoration: 'none' }}>Transaction</Link>,
    icon: <DollarOutlined />,
  },
  {
    key: '7',
    label: <Link to="/manage/announce" style={{ textDecoration: 'none' }}>Announce</Link>,
    icon: <NotificationOutlined />,
  }
];

function AdminLayout() {
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
        </div>>
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
      </Sider>
      <Layout className="site-layout">
        <Header>
          Header
        </Header>

        <Outlet />
      </Layout>
    </Layout>
  );
}

export default AdminLayout;