import React from 'react';
import './Main.css';
import Counter from '../Counter/Counter';
import ProductTable from '../ProductTable/ProductTable';

const Main = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-7">
            <Counter />
        </div>
        <div className="col-sm-5">
            <ProductTable />
        </div>
        </div>
      </div>
  );
}

export default Main;