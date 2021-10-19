import React, { useEffect, useMemo } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { useTable } from "react-table";
import { TableData } from "../../data/TableData";
import { Columns } from "./Columns";
import "./table.css";

function BasicTable() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const columns = useMemo(() => Columns, []);
  const data = useMemo(() => TableData, []);

  const tableInstance = useTable({
    columns,
    data,
  });

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance;
  return (
    <div data-aos="zoom-in" className="table-container">
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default BasicTable;
