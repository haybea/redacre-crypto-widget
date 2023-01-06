const TableBody = ({ tableData, columns }) => {
    return (
     <tbody>
      {tableData.map((item, index) => {
       return (
        <tr key={index}>
            <td>{item.formatedDate}</td>
            <td>{item.fromCurrency.charAt(0).toUpperCase() + item.fromCurrency.slice(1)}</td>
            <td>{item.fromAmount}</td>
            <td>{item.toCurrency.toUpperCase()}</td>
            <td>{item.toAmount.toLocaleString(undefined, {maximumFractionDigits:2})}</td>
            <td style={{color: item.type==='Exchanged'?'#6368DF':'#5DBE7E'}}>{item.type}</td>
        </tr>
       );
      })}
        {
            tableData.length ===0 ?
                <tr><td colSpan={columns.length}>No data</td></tr>
                : null
        }
     </tbody>
    );
};
   
export default TableBody;