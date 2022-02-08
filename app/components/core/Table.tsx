import * as React from "react";
import { Column, useTable } from "react-table";
import { tw } from "twind";

type TableProps = {
  columns: Column<{}>[];
  data: {}[];
};

const Table: React.FC<TableProps> = ({ columns, data }) => {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });
  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th
                className={tw`border border-blue-900 px-2 py-1 text-center`}
                {...column.getHeaderProps()}
              >
                {column.render("Header")}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, idx) => {
          prepareRow(row);
          const style = idx % 2 === 0 ? tw`bg-gray-700` : tw``;
          return (
            <tr className={style} {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return (
                  <td
                    className={tw`border border-blue-900 px-2 py-1`}
                    {...cell.getCellProps()}
                  >
                    {cell.render("Cell")}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
