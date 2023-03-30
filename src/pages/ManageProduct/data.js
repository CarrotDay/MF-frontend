import { Link } from "react-router-dom";

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
        <button type="button" className="MyBtn MyBtn-primary">
          <Link className="text-white" to={`/manage/product/${value}`}>Detail</Link>
        </button>
        <button type="button" className="MyBtn MyBtn-primary">
          <Link className="text-white" to={`/manage/product/edit/${value}`}>Edit</Link>
        </button>
        <button type="button" className="MyBtn MyBtn-danger">
          <Link className="text-white" to={`/manage/product/${value}`}>X</Link>
        </button>
      </>
    )
  }
];