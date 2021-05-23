import React, { useRef, useState } from "react";
import { currenciesDB, useCurrency } from "../contexts/CurrencyContext";

function CurrencyConverter() {
  const { currency, setCurrency } = useCurrency();
  const [currencyValue, setCurrencyValue] = useState(0);
  const inputRef = useRef(null);

  return (
    <div>
      <div className="currency-converter">
        <h2>Currency Calculator</h2>
        <div className="input-row">
          <div className="group">
            <h3>Input Currency(USD)</h3>
            <input
              type="number"
              onChange={() => {
                setCurrencyValue(inputRef.current.value);
              }}
              ref={inputRef}
            />
          </div>
          <div className="group">
            <h3>Convert To</h3>
            <button
              onClick={() => {
                setCurrency(currenciesDB.usd);
              }}
            >
              USD
            </button>
            <button
              onClick={() => {
                setCurrency(currenciesDB.eur);
              }}
            >
              EUR
            </button>
            <button
              onClick={() => {
                setCurrency(currenciesDB.gbp);
              }}
            >
              GBP
            </button>
            <button
              onClick={() => {
                setCurrency(currenciesDB.inr);
              }}
            >
              INR
            </button>
          </div>
          <div className="group">
            <h3>Converted Value</h3>
            {currency.symbol} {(currencyValue * currency.multiplier).toFixed(2)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CurrencyConverter;
