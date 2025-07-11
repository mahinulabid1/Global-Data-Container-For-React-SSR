import React,{ createContext, useState } from 'react';
import {  useDetectFirstUiRender } from "./use-detect-first-ui-render";

export type GlobalDataContextType = {
  data: any
  setData: React.Dispatch<React.SetStateAction<any>>;
  isFirstRender:boolean;
}

// setting a default data for now for avoiding typescript errors
export const GlobalDataContext = createContext<GlobalDataContextType>({
  data: {}, // just a default value. will be changed in provider.
  setData: () => {}, // just a default value. will be changed in provider.
  isFirstRender: true, // just a default value. will be changed in provider.
});

export const GlobalDataProvider = ({ children }: { children: React.ReactNode }) => {
  const [data, setData] = useState<any>({
    initialData: ""
  });

  const { isFirstRender } = useDetectFirstUiRender();

  return (
    <GlobalDataContext.Provider value={{ data, setData, isFirstRender }}>
      {children}
    </GlobalDataContext.Provider>
  );
};
