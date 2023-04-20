import React, {useState} from 'react';
import { Box, Divider, Typography, Stack, MenuItem, Avatar, IconButton, Popover } from '@mui/material';
import {Link} from "react-router-dom";

const MENU_OPTIONS_FOR_USER = [
  {
    label: 'Tài khoản của bạn',
    icon: 'fa-user-circle-o',
    url: ''
  },
  {
    label: 'Đơn hàng của bạn',
    icon: 'fa fa-table',
    url: ''
  },
  {
    label: 'Đăng xuất',
    icon: 'fa fa-sign-out',
    url: 'sign-in'
  },
];

const MENU_OPTIONS_FOR_ANONYMOUS = [
  {
    label: 'Đăng nhập',
    icon: 'fa-user-circle-o',
    url: '/sign-in'
  },
  {
    label: 'Đăng ký',
    icon: 'fa fa-user-circle',
    url: '/sign-up'
  },
];

const AccountPopover = ({isLogin,data}) => {
  const [open, setOpen] = useState(null);

  const handleOpen = (event) => {
    setOpen(event.currentTarget);
  };

  const handleClose = () => {
    setOpen(null);
  };
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
        {isLogin?
          <div className={'action-account-login'}>
            <Box sx={{ my: 1.5, px: 2.5 }}>
              <Typography variant="subtitle2" noWrap>
                {data.username}
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }} noWrap>
                {data.email}
              </Typography>
            </Box>
            <Divider sx={{ borderStyle: 'dashed' }} />

            <Stack sx={{ p: 1 }}>
              {MENU_OPTIONS_FOR_USER.map((option) => (
                <MenuItem key={option.label} onClick={handleClose}>
                  <Link to={option.url} style={{textDecoration: 'none', color: 'black'}} >
                    {option.label}
                  </Link>
                </MenuItem>
              ))}
            </Stack>

          </div>
          :
          <div className={'action-account'}>
            <Stack sx={{ p: 1 }}>
              {MENU_OPTIONS_FOR_ANONYMOUS.map((option) => (
                <MenuItem key={option.label} onClick={handleClose}>
                  {option.label}
                </MenuItem>
              ))}
            </Stack>
          </div>
        }


      </Popover>
    </>
  );
};

export default AccountPopover;