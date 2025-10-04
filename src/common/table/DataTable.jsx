import { Table } from "react-bootstrap";

const DataTable = ({ columns, data, RowComponent }) => {
  return (
    <Table responsive hover className="container ">
      <thead>
        <tr className="">
          {columns.map((col,i) => (
            <th key={i}>{col}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row,i) => (
          <RowComponent key={i} row={row}></RowComponent>
        ))}
      </tbody>
    </Table>
  );
};

export default DataTable;