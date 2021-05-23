import React, { createContext, useContext, useState } from "react";

const CurrencyContext = createContext(null);
export { CurrencyContext };

const currenciesDB = {
  usd: {
    symbol: "USD",
    title: "US dollar",
    multiplier: 1,
  },
  eur: {
    symbol: "EUR",
    title: "Euro",
    multiplier: 0.85,
  },
  gbp: {
    symbol: "GBP",
    title: "British Pound",
    multiplier: 0.73,
  },
  inr: {
    symbol: "INR",
    title: "Indian Rupee",
    multiplier: 74.48,
  },
};
export { currenciesDB };

export function CurrencyProvider({ children }) {
  const [currency, setCurrency] = useState(currenciesDB.usd);

  return (
    <CurrencyContext.Provider value={{ currenciesDB, currency, setCurrency }}>
      {children}
    </CurrencyContext.Provider>
  );
}

export function useCurrency() {
  return useContext(CurrencyContext);
}
