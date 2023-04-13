import { Outlet, Navigate } from 'react-router-dom';

function LoginRoute() {
  const token = window.localStorage.getItem('token');

  return (
    <>
      {!token ? <Navigate to="/sign-in" /> : <Outlet />}
    </>
  );
}

export default LoginRoute;