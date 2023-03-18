import React from 'react';

function MyPagination({ page, setPage }) {
  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination">
        <li className={"page-item" + (page.curr === 0 ? ' disabled' : '')} onClick={(page.curr === 0 ? () => {} : () => setPage({...page, curr: page.curr - 1}))}>
          <a className="page-link" href="#" aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
          </a>
        </li>

        {[...Array(page.length).keys()].map(e => (
          <li className={"page-item" + (page.curr === e ? ' active' : '')} style={{ cursor: 'pointer' }} onClick={() => setPage({...page, curr: e})} key={e}>
            <a className="page-link">{e + 1}</a>
          </li>
        ))}

        <li className={"page-item" + (page.curr === (page.length - 1) ? ' disabled' : '')} onClick={(page.curr === (page.length - 1) ? () => {} : () => setPage({...page, curr: page.curr + 1}))}>
          <a className="page-link" href="#" aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default MyPagination;