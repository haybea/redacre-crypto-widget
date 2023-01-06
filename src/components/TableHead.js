import { useState } from "react";
import { FaSortUp,FaSortDown,FaSort } from 'react-icons/fa';

const TableHead = ({ columns, handleSorting }) => {
    const [sortColumn, setSortColumn] = useState("");
    const [order, setOrder] = useState("");

    const handleSortingChange = (column) => {
        const sortOrder = column === sortColumn && order === "asc" ? "desc" : "asc";
        setSortColumn(column);
        setOrder(sortOrder);
        handleSorting(column, sortOrder);
        console.log(sortOrder,column)
    };

    return (
     <thead>
      <tr>
       {columns.map(({ columnName, column }) => (
            <th style={{cursor: 'pointer'}} key={column} onClick={() => handleSortingChange(column)}>
                {columnName}
                {sortColumn === column && order === "asc" ? 
                    <FaSortUp />
                    : sortColumn === column && order === "desc" ?
                     <FaSortDown />
                    : <FaSort/>
                }
            </th>
        ))}
      </tr>
     </thead>
    );
};

export default TableHead;