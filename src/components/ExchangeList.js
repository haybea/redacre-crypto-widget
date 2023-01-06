import { useState } from "react";
import useExchangeData from "../hooks/useExchangeData";
import Table from "./Table";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import { Row, Col, Button, Container } from "react-bootstrap";

const ExchangeList = () => {
  const { exchangeData, backupData, isLoading, setExchangeData } =
    useExchangeData();

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const handleSorting = (sortField, sortOrder) => {
    if (sortField) {
      const sorted = [...exchangeData]
        .map((obj) => {
          return { ...obj, createdAt: new Date(obj.createdAt) };
        })
        .sort((a, b) => {
          if (a[sortField] < b[sortField]) {
            return sortOrder === "asc" ? -1 : 1;
          }
          if (a[sortField] > b[sortField]) {
            return sortOrder === "asc" ? 1 : -1;
          }
        });
      setExchangeData(sorted);
      console.log(sorted);
    }
  };
  const handleFilter = () => {
    const filteredData = backupData.filter((f) => {
      const fdate = new Date(f.createdAt);
      if (fdate >= startDate && fdate <= endDate) {
        return f;
      }
    });
    setExchangeData(filteredData);
  };
  const clearFilter = () => {
    setExchangeData(backupData);
  };

  return (
    // <Container>
    <div className="container-inner">
      <h3>History</h3>
      {!isLoading ? (
        <>
          <Row style={{ marginBottom: 30 }}>
            <Col sm={6} md={2}>
              <div>
                <label>Start Date</label>
                <DatePicker
                  className="picker"
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  dateFormat="dd/MM/yyyy"
                />
              </div>
            </Col>
            <Col sm={6} md={2}>
              <div>
                <label>End Date</label>
                <DatePicker
                  className="picker"
                  selected={endDate}
                  onChange={(date) => setEndDate(date)}
                  dateFormat="dd/MM/yyyy"
                />
              </div>
            </Col>
            <Col style={{ display: "flex", alignSelf: "flex-end" }}>
              <div>
                <button onClick={handleFilter} className="filter-btn">
                  Filter
                </button>
                &nbsp;&nbsp;
                <button onClick={clearFilter} className="filter-btn">
                  Clear
                </button>
              </div>
            </Col>
          </Row>
          <Table
            data={exchangeData}
            handleSorting={handleSorting}
            // {...{ columns, handleSorting }}
          />
        </>
      ) : (
        <p className="loading-text">Loading Data...</p>
      )}
    </div>
    // </Container>
  );
};

export default ExchangeList;
