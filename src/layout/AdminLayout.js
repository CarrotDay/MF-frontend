import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { Layout, Menu, theme } from 'antd';
import Footer from "~/components/Footer";

const { Header, Sider } = Layout;

const items = [
  {
    key: '1',
    label: <Link to="/manage/product" style={{ textDecoration: 'none' }}>Products</Link>
  },
  {
    key: '2',
    label: <Link to="/manage/customer" style={{ textDecoration: 'none' }}>Customer</Link>
  },
  {
    key: '3',
    label: <Link to="/manage/employee" style={{ textDecoration: 'none' }}>Employee</Link>
  },
  {
    key: '4',
    label: <Link to="/manage/transaction" style={{ textDecoration: 'none' }}>Transaction</Link>
  },
  {
    key: '5',
    label: <Link to="/manage/announce" style={{ textDecoration: 'none' }}>Announce</Link>
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
        <div
          style={{
            height: 32,
            margin: 16,
            background: 'rgba(255, 255, 255, 0.2)',
          }}
        />
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
      </Sider>
      <Layout className="site-layout">
        <Header>
          Header
        </Header>

        <Outlet />

        <Footer
          style={{
            textAlign: 'center',
          }}
        >
          Footer
        </Footer>
      </Layout>
    </Layout>
  );
}

export default AdminLayout;