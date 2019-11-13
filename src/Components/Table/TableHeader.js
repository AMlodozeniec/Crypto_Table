import React, { useContext } from 'react';
import '../../assets/styles/Table/TableHeader.scss';
import { SortContext } from '../../contexts/SortContext';

const TableHeader = props => {
  const { headers, handleSort } = useContext(SortContext);
  const renderedHeaders = headers[0].headers.map(header => {
    return (
      <div key={header} onClick={() => handleSort(header)}>
        {header}
      </div>
    );
  });

  return <div className="table-header-wrap">{renderedHeaders}</div>;
};
export default TableHeader;

// const TableHeader = props => {
//   const renderedHeaders = props.headers.map(header => {
//     return (
//       <div key={header} onClick={() => props.handleSort(header)}>
//         {header}
//       </div>
//     );
//   });

//   return <div className="table-header-wrap">{renderedHeaders}</div>;
// };
// export default TableHeader;