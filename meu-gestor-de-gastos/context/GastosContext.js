import React, { createContext, useState } from 'react';

export const GastosContext = createContext();

export function GastosProvider({ children }) {
  const [gastos, setGastos] = useState([]);

  function adicionarGasto(novoGasto) {
    setGastos((gastosAtuais) => [...gastosAtuais, novoGasto]);
  }

  return (
    <GastosContext.Provider value={{ gastos, adicionarGasto }}>
      {children}
    </GastosContext.Provider>
  );
}
