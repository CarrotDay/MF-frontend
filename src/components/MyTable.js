import React, { useState } from 'react';

import MyPagination from './MyPagination';

function MyTable({ head, body }) {
  const [search, setSearch] = useState('');

  const searchHandle = () => {
    if (search) {
    }
  };

  return (
    <div>
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
          {body.map((e, index) => (
            <tr key={index}>
              {head.map((_e, _index) => (
                <td key={`${index}_${_index}`}>{_e.format !== undefined ? _e.format(e[_e.key]) : e[_e.key]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default MyTable;