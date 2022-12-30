import { useTable, useSortBy } from "react-table";
import useRows from "./hooks/useRows";
import useColumns from "./hooks/useColumns";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

export default function Table({ reportedDevices }) {
  const navigate = useNavigate();
  const columns = useColumns();
  const data = useRows(reportedDevices);
  const table = useTable({ columns, data }, useSortBy);

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    table;

  return (
    <div className="table_container">
      <div className="inner_table_container">
        {/* Apply the table props */}
        <table className="w-100" {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup, idx) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => {
                  if (column["Header"] === "") {
                    return <th key={idx}></th>;
                  }

                  return (
                    // Aplicamos las propiedades de ordenación a cada columna
                    <th
                      key={idx}
                      {...column.getHeaderProps(column.getSortByToggleProps())}
                    >
                      <div className="d-flex justify-content-between align-items-center">
                        {column.render("Header")}

                        <div className="sorting_icons d-flex justify-content-between align-items-center">
                          <AiOutlineLeft fontSize={9} />
                          <AiOutlineRight fontSize={9} />
                        </div>
                      </div>
                    </th>
                  );
                })}
              </tr>
            ))}
          </thead>
          {/* Apply the table body props */}
          <tbody {...getTableBodyProps()}>
            {
              // Loop over the table rows
              rows.map((row) => {
                // Prepare the row for display
                prepareRow(row);
                return (
                  // Apply the row props
                  <tr
                    className="pointer"
                    onClick={() =>
                      navigate(`/stolen-device/${row.original._id}`)
                    }
                    {...row.getRowProps()}
                  >
                    {
                      // Loop over the rows cells
                      row.cells.map((cell) => {
                        // Apply the cell props
                        return (
                          <td {...cell.getCellProps()}>
                            {
                              // Render the cell contents
                              cell.render("Cell")
                            }
                          </td>
                        );
                      })
                    }
                  </tr>
                );
              })
            }
          </tbody>
        </table>
      </div>
    </div>
  );
}
