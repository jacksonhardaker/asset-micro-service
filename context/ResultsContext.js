const { useContext, createContext, useState } = require("react");

const resultsContext = createContext();

export const ResultsProvider = ({ children }) => {
  const [result, setResult] = useState(null);

  const value = {
    result,
    setResult,
  }

  return (
    <resultsContext.Provider value={value}>
      {children}
    </resultsContext.Provider>
  );
};

export const useResults = () => useContext(resultsContext);
