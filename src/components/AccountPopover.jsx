import React, {useState} from 'react';
import { Box, Divider, Typography, Stack, MenuItem, Popover } from '@mui/material';
import jwtDecode from "jwt-decode";
import { Link } from "react-router-dom";

const MENU_OPTIONS_FOR_CUSTOMER = [
  {
    id: 4,
    label: 'Tài khoản của bạn',
    icon: 'fa-user-circle-o',
    url: '/account-information'
  },
  {
    id: 5,
    label: 'Đơn hàng của bạn',
    icon: 'fa fa-table',
    url: '/transaction'
  },
  {
    id: 2,
    label: 'Đăng xuất',
    icon: 'fa fa-sign-out',
    url: '/sign-in'
  },
];

const MENU_OPTIONS_FOR_ADMIN_EMPLOYEE = [
  {
    id: 3,
    label: 'Quản lý',
    icon: 'fa fa-tasks',
    url: '/manage/dashboard'
  },
  {
    id: 2,
    label: 'Đăng xuất',
    icon: 'fa fa-sign-out',
    url: '/sign-in'
  },
];

const MENU_OPTIONS_FOR_ANONYMOUS = [
  {
    id: 0,
    label: 'Đăng nhập',
    icon: 'fa-user-circle-o',
    url: '/sign-in'
  },
  {
    id: 1,
    label: 'Đăng ký',
    icon: 'fa fa-user-circle',
    url: '/sign-up'
  },
];

const AccountPopover = ({isLogin,data}) => {
  const [open, setOpen] = useState(null);
  const token = window.localStorage.getItem("token");
  const role = token?jwtDecode(token).role:null;
  const handleOpen = (event) => {
    setOpen(event.currentTarget);
  };

  const handleClose = (id) => {
    if (id == 2) {
      window.localStorage.removeItem('token');
    }

    setOpen(null);
  };

  const renderPopover = (role) => {
    if (role == 2) {
      // khach hang
      return (
        <>
          <Box sx={{ my: 1.5, px: 2.5 }}>
            <Typography variant="subtitle2" noWrap>
              {data.username}
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }} noWrap>
              {data.phone}
            </Typography>
          </Box>
          <Divider sx={{ borderStyle: 'dashed' }} />

          <Stack sx={{ p: 1 }}>
            {MENU_OPTIONS_FOR_CUSTOMER.map((option) => (
              <Link to={option.url} style={{textDecoration: 'none', color: 'black'}} >
                <MenuItem key={option.id} onClick={() => handleClose(option.id)}>
                  {option.label}
                </MenuItem>
              </Link>
            ))}
          </Stack>
        </>
      );
    }
    else if (role == 1 || role == 0) {
      // nhan vien
      return (
        <Stack sx={{ p: 1 }}>
          {MENU_OPTIONS_FOR_ADMIN_EMPLOYEE.map((option) => (
            <Link to={option.url} style={{textDecoration: 'none', color: 'black'}} >
              <MenuItem key={option.id} onClick={() => handleClose(option.id)}>
                {option.label}
              </MenuItem>
            </Link>
          ))}
        </Stack>
      );
    } else {
      return (
        <Stack sx={{ p: 1 }}>
          {MENU_OPTIONS_FOR_ANONYMOUS.map((option) => (
            <Link to={option.url} style={{textDecoration: 'none', color: 'black'}} >
              <MenuItem key={option.id} onClick={() => handleClose(option.id)}>
                {option.label}
              </MenuItem>
            </Link>
          ))}
        </Stack>
      );
    }
  }

  return (
    <>
      <span onClick={handleOpen}>
        <i className="fa fa-user-circle-o" aria-hidden="true"></i>
      </span>
      <Popover
        open={Boolean(open)}
        anchorEl={open}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        PaperProps={{
          sx: {
            p: 0,
            mt: 1.5,
            ml: 0.75,
            width: 180,
            '& .MuiMenuItem-root': {
              typography: 'body2',
              borderRadius: 0.75,
            },
          },
        }}
      >
        {renderPopover(role)}
      </Popover>
    </>
  );
};

export default AccountPopover;