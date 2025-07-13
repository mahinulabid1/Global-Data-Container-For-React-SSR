import React, { createContext, useEffect, useState } from 'react';
import {  useDetectFirstUiRender } from "./use-detect-first-ui-render";
import { GlobalDataContext } from './core-context';
declare let window: any

export const GlobalDataProvider = ({ children }: { children: React.ReactNode }) => {
  const [data, setData] = useState<any>();

  const { isFirstRender } = useDetectFirstUiRender();

  useEffect(() => {
    window.GLOBAL_DATA_CONTAINER___ADD_CHANGE = setData;

    setTimeout(() => {

    }, 10000)
  }, [])

  return (
    <GlobalDataContext.Provider value={{ data, setData, isFirstRender }}>
      {children}
    </GlobalDataContext.Provider>
  );
};
