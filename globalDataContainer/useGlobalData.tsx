import {useContext, useEffect, useCallback, useState} from 'react';
import { GlobalDataContext } from './dataContainer';
import type { GlobalDataContextType } from './dataContainer';
import { useDetectFirstUiRender } from "./use-detect-first-ui-render";

export function useGlobalData<T> () {
  const context = useContext(GlobalDataContext);

  if (!context) {
    throw new Error('useGlobalData must be used within a GlobalDataProvider');
  }

  const { data, setData, isFirstRender } = context;

  const addChange = useCallback((data2:T) => {
    /**
     * why update delay?
     * the global container has to be in root.
     * so if the root is still rendering, initial data storing in root.tsx might not work as you expect.
     * so we check if the root is still rendering and give it a little time only on first render.
     * after the first render, there will be no delay.
     */
    const updateDelay = isFirstRender ? 200 : 0;

    if(updateDelay === 200) {
      console.log('update delay is 200')
    } else {
      console.log('update delay is 0', updateDelay);
    }

    setTimeout(() => {
      console.log("data from arguments",data2)

      setData((prevData:T) => {
        console.log("previous data", prevData);
        return {
          ...prevData,
          ...data2
        }
      })
    }, updateDelay)

  }, [setData, isFirstRender]);



  // useEffect(() => {
  //   // Log the data whenever it changes
  //   console.log("Global data changed:", data);
  // }, [data]);

  return {
    data,
    addChange,
  };
}


