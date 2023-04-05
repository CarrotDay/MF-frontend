import { Link } from 'react-router-dom';

function MyPagination({ page, pages }) {
  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination">
        <li className={'page-item' + (Number(page) === 1 ? ' disabled' : '')}>
          <Link className={'page-link' + (Number(page) === 1 ? ' text-white' : ' text-dark')} to={`/manage/products/${page - 1}`} aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
          </Link>
        </li>

        {[...Array(pages).keys()].filter((_, i) => (Number(page) - 3 < i) && (Number(page) + 3 > i)).map(i => (
          <li className={"page-item" + (Number(page) === i + 1 ? ' active' : '')} key={i}>
            <Link className={'page-link' + ((Number(page) === i + 1 ? ' active' : '') ? ' text-white' : ' text-dark')} to={`/manage/products/${i + 1}`}>
              {i + 1}
            </Link>
          </li>
        ))}

        <li className={'page-item' + (Number(page) === pages ? ' disabled' : '')}>
          <Link className={'page-link' + (Number(page) === pages ? ' text-white' : ' text-dark')} to={`/manage/products/${page + 1}`} aria-label="Previous">
            <span aria-hidden="true">&raquo;</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default MyPagination;