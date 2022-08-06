import { useState, useEffect } from "react";

const useDebounce = (data: string, delay: number): string => {
  const [debouncedData, setDebouncedData] = useState(data);

  useEffect(() => {
    const debouncedData = setTimeout(() => {
      setDebouncedData(data);
    }, delay);

    return () => {
      clearTimeout(debouncedData);
    };
  }, [data, delay]);

  return debouncedData;
};

export default useDebounce;
