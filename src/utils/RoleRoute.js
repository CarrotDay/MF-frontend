import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import jwtDecode from 'jwt-decode';

import { routesWithoutLayout, routesWithLayout, routesCustomer, routesEmployee, routesAdmin } from '~/routes';
import { AdminLayout, EmployeeLayout, UserLayout } from '~/layout';

const layoutMapping = (role, path) => {
  if ( !path.includes('manage') ) {
    return <UserLayout />
  }
  else if (role == 1) {
    return <EmployeeLayout />
  }
  else {
    return <AdminLayout />
  }
}

const routesMapping = {
  0: routesAdmin,
  1: routesEmployee,
  2: routesCustomer
};

function RoleRoute() {
  const location = useLocation()
  const token = window.localStorage.getItem('token');
  const account = token ? jwtDecode(token) : '';

  return (
      <Routes>
        {routesWithoutLayout.map(({ path, Component }, index) => <Route path={path} element={<Component />} key={index} />)}

        <Route element={<UserLayout />}>
          {routesWithLayout.map(({ path, Component }, index) => <Route path={path} element={<Component />} key={index} />)}
        </Route>

        <Route element={layoutMapping(Number(account?.role), location.pathname)}>
          {routesMapping[Number(account?.role)]?.map(({ path, Component }, index) => <Route path={path} element={<Component />} key={index} />)}
        </Route>

        <Route path="*" element={<Navigate to="/" />} />

        {/* <Route path="*" element={<Navigate to="/sign-in" />} /> */}
      </Routes>
  );
}

export default RoleRoute;