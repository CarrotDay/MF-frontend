import React, { useEffect, useState } from 'react';

import MyPagination from './MyPagination';

function MyTable({ head, body }) {
  const [bodyCurr, setBodyCurr] = useState(body);
  const [page, setPage] = useState({ curr: 0, length: Math.floor(bodyCurr.length / 10) + 1 });
  const [search, setSearch] = useState('');

  useEffect(() => {
    setPage({ curr: 0, length: Math.floor(bodyCurr.length / 10) + 1 });
  }, [bodyCurr]);

  useEffect(() => {
    setBodyCurr(body);
  }, [body]);

  const searchHandle = () => {
    if (search) {
      setBodyCurr(body.filter(e => Object.values(e).findIndex(e => String(e).includes(search)) !== -1));
      setPage({ curr: 0, length: Math.floor(bodyCurr.length / 10) + 1 });
    }
  };

  return (
    <div className="w-100 container my-5">
      <div className="d-flex justify-content-between">
        <div>
          <button type="button" className="MyBtn MyBtn-primary">Add</button>
        </div>

        <div className="searchform order-lg-last">
          <div className="form-group d-flex">
            <input value={search} onChange={e => setSearch(e.target.value)} type="text" className="form-control pl-3" placeholder="Search In List..." />
              <button onClick={searchHandle} type="button" placeholder="" className="form-control search">
                <span className="fa fa-search"></span>
              </button>
            </div>
        </div>
      </div>

      <table className="w-100 table table-striped">
        <thead>
          <tr>
            {head.map(e => (
              <th key={e.key}>{e.title}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {bodyCurr.filter((e, index) => index >= (10*page.curr) && index < (10*page.curr) + 10).map((e, index) => (
            <tr key={index}>
              {head.map((_e, _index) => (
                <td key={`${index}_${_index}`}>{e[_e.key]}</td>
              ))}
              <td>
                <button type="button" className="MyBtn MyBtn-primary">Edit</button>
                <button type="button" className="MyBtn MyBtn-danger">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <MyPagination page={page} setPage={setPage}  />
      </div>
    </div>
  );
}

export default MyTable;