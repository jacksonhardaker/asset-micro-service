const { useContext, createContext, useState } = require("react");

const isLoadingContext = createContext();

export const LoadingProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);

  const value = {
    isLoading,
    setIsLoading,
  }

  return (
    <isLoadingContext.Provider value={value}>
      {children}
    </isLoadingContext.Provider>
  );
};

export const useLoading = () => useContext(isLoadingContext);
