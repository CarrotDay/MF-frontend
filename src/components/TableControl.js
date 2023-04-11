import { Link } from "react-router-dom";
import SearchIcon from '@mui/icons-material/Search';
import EditIcon from '@mui/icons-material/Edit';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { IconButton } from '@mui/material';

function TableControl(props) {
  return (
    <>
      <Link to={props.detailLink}>
        <IconButton color="primary">
          <SearchIcon />
        </IconButton>
      </Link>
      <Link to={props.editLink}>
        <IconButton color="primary">
          <EditIcon />
        </IconButton>
      </Link>
      <Link to={props.delLink}>
        <IconButton color="error">
          <DeleteOutlineIcon />
        </IconButton>
      </Link>
    </>
  );
}

export default TableControl;