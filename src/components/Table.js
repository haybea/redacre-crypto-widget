import { useState } from "react";
import {Table,Row, Col, Button, Container } from 'react-bootstrap';
import TableBody from "./TableBody";
import TableHead from "./TableHead";
import "react-datepicker/dist/react-datepicker.css";

const CustomTable = ({data,handleSorting}) => {

    const columns = [
        { column: "createdAt", columnName: "Date and Time" },
        { column: "fromCurrency", columnName: "Currency From" },
        { column: "fromAmount", columnName: "Amount 1" },
        { column: "toCurrency", columnName: "Currency To" },
        { column: "toAmount", columnName: "Amount 2" },
        { column: "type", columnName: "Type" },
    ];
    
    return (
        <>
        <Table striped hover responsive>
            <TableHead {...{ columns, handleSorting }} />
            <TableBody columns={columns} tableData={data} />
        </Table>
        </>
    );
};
   
export default CustomTable;