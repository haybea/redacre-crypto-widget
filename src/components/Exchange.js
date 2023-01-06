import React, { useState, useEffect } from "react";
import { Row, Col, Button, Container } from "react-bootstrap";
import {add_rate_url} from "../config/config";
import Select from "react-dropdown-select";
import us from "../assets/usa.png";
import nga from "../assets/nga.jpg";
import uk from "../assets/uk.png";

const cryptoOptions = [
  {
    value: "bitcoin",
    label: "Bitcoin",
    img: "https://www.cryptocompare.com/media/37746251/btc.png",
  },
  {
    value: "ethereum",
    label: "Ethereum",
    img: "https://www.cryptocompare.com/media/37746238/eth.png",
  },
];
const currencyOptions = [
  {
    value: "usd",
    label: "USD",
    img: "https://cdn.pixabay.com/photo/2017/02/06/15/09/american-flag-2043285_960_720.png",
  },
  {
    value: "gbp",
    label: "GBP",
    img: "https://cdn.pixabay.com/photo/2015/11/06/13/29/union-jack-1027898_960_720.jpg",
  },
  {
    value: "ngn",
    label: "NGN",
    img: "https://cdn.pixabay.com/photo/2013/07/13/14/16/nigeria-162376_960_720.png",
  },
];

const Exchange = () => {
  const [isButtonLoading, setIsButtonLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [fromCurrency, setCurrencyFrom] = useState("");
  const [toCurrency, setCurrencyTo] = useState("");
  const [fromAmount, setAmountFrom] = useState("");
  const [toAmount, setAmountTo] = useState("");

  const postExchange = () => {
    if (
      fromCurrency === "" ||
      toCurrency === "" ||
      fromAmount === "" ||
      toAmount === ""
    ) {
      alert("All fields are required");
    } else {
      setMessage("");
      setIsButtonLoading(true);
      const params = { fromCurrency, toCurrency, fromAmount, toAmount };
      fetch(add_rate_url, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(params),
      })
        .then((res) => res.json())
        .then((data) => {
          // console.log(data);
        })
        .finally(() => setIsButtonLoading(false));
    }
  };
  return (
    <div className="exchange-card">
      <Container>
        <h4>Exchange</h4>
        <Row>
          <Col sm={12} md={2}>
            <div>
              <label>Currency from</label>
              <Select
                options={cryptoOptions}
                onChange={(values) => {
                  setCurrencyFrom(values[0].value);
                }}
                itemRenderer={({ item, methods }) => (
                  <div>
                    {item.disabled ? (
                      <div aria-disabled>{item.label}</div>
                    ) : (
                      <div
                        className="select-item"
                        onClick={() => methods.addItem(item)}
                      >
                        <img src={item.img} width="25" height="25" />{" "}
                        {item.label}
                      </div>
                    )}
                  </div>
                )}
                contentRenderer={({ props, state }) => (
                  <div style={{ cursor: "pointer" }}>
                    {state.values.length > 0 ? (
                      <>
                        <img src={state.values[0].img} width="25" height="25" />{" "}
                        {state.values[0].label}
                      </>
                    ) : (
                      <span>Select Crypto</span>
                    )}
                  </div>
                )}
              />
            </div>
          </Col>
          <Col sm={12} md={2}>
            <div>
              <label>Amount</label>
              <input
                type="number"
                className="form-control"
                onChange={(e) => {
                  setAmountFrom(e.target.value);
                }}
              />
            </div>
          </Col>
          <Col style={{ alignSelf: "flex-end" }}>
            <p style={{ textAlign: "center" }}>=</p>
          </Col>
          <Col sm={12} md={2}>
            <div>
              <label>Currency To</label>
              <Select
                options={currencyOptions}
                onChange={(values) => {
                  setCurrencyTo(values[0].value);
                }}
                itemRenderer={({ item, methods }) => (
                  <div>
                    {item.disabled ? (
                      <div aria-disabled>{item.label}</div>
                    ) : (
                      <div
                        className="select-item"
                        onClick={() => methods.addItem(item)}
                      >
                        <img
                          src={item.img}
                          style={{ borderRadius: "50%" }}
                          width="25"
                          height="25"
                        />{" "}
                        {item.label}
                      </div>
                    )}
                  </div>
                )}
                contentRenderer={({ props, state }) => (
                  <div style={{ cursor: "pointer" }}>
                    {state.values.length > 0 ? (
                      <>
                        <img src={state.values[0].img} style={{ borderRadius: "50%" }} width="25" height="25" />{" "}
                        {state.values[0].label}
                      </>
                    ) : (
                      <span>Select Currency</span>
                    )}
                  </div>
                )}
              />
            </div>
          </Col>
          <Col sm={12} md={2}>
            <div>
              <label>Amount</label>
              <input
                type="number"
                className="form-control"
                onChange={(e) => {
                  setAmountTo(e.target.value);
                }}
              />
            </div>
          </Col>
          <Col
            sm={12}
            md={3}
            style={{ display: "flex", alignSelf: "flex-end" }}
          >
            <button
              onClick={postExchange}
              className="btn btn-success"
              disabled={isButtonLoading ? true : false}
            >
              {isButtonLoading ? "Loading..." : "Save"}
            </button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Exchange;
