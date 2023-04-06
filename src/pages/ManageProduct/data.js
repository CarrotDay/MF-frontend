import { Link } from "react-router-dom";
import SearchIcon from '@mui/icons-material/Search';
import EditIcon from '@mui/icons-material/Edit';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { IconButton } from '@mui/material';

export const productHead = [
  {
    key: 'id',
    title: 'ID'
  },
  {
    key: 'name',
    title: 'Name'
  },
  {
    key: 'srcImg',
    title: 'Thumbnail',
    format: value => (
      <img width="100px" height="100px" src={value} alt="thumbnail" />
    )
  },
  {
    key: 'price',
    title: 'Price'
  },
  {
    key: 'amount',
    title: 'Amount'
  },
  {
    key: 'sale',
    title: 'Sale'
  },
  {
    key: 'type',
    title: 'Type',
    format: value => value ? 'Figure' : 'Anime'
  },
  {
    key: 'createAt',
    title: 'Create At',
    format: value => value.substring(0, 10)
  },
  {
    key: 'meta',
    title: '',
    format: value => (
      <>
        <Link to={`/manage/product/${value}`}>
          <IconButton color="primary">
            <SearchIcon />
          </IconButton>
        </Link>
        <Link to={`/manage/product/update/${value}`}>
          <IconButton color="primary">
            <EditIcon />
          </IconButton>
        </Link>
        <Link to={`/manage/product/${value}`}>
          <IconButton color="error">
            <DeleteOutlineIcon />
          </IconButton>
        </Link>
      </>
    )
  }
];