import React, { useState } from 'react';
import '../../assets/styles/Table/TableHeader.scss';

const TableHeader = props => {
  const renderedHeaders = props.headers.map(header => {
    return (
      <div key={header} onClick={() => this.props.handleSort(header)}>
        {header}
      </div>
    );
  });

  return <div className="table-header-wrap">{renderedHeaders}</div>;
};
export default TableHeader;
