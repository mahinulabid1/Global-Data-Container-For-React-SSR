import {useContext, useEffect, useCallback, useState} from 'react';
import { GlobalDataContext } from './core-context';
declare let window: any;

export function useGlobalData<T> () {
  const context = useContext(GlobalDataContext);

  if (!context) {
    throw new Error('useGlobalData must be used within a GlobalDataProvider');
  }

  const { data:contextData, setData } = context;

  const addChange = useCallback((data2:T) => {
    if (!data2) return

    if (!setData) {
      const alternativeSetData = window?.GLOBAL_DATA_CONTAINER___ADD_CHANGE;

      if(alternativeSetData) {
        alternativeSetData((prevData:any) => {
          return {
            ...prevData,
            ...data2
          }
        })
      }
      else {
        console.error("[Global Data Container]: global set data is not found")
      }

      return; // stops execution
    }

    setData((prevData:T) => {
      console.log("previous data", prevData);
      return {
        ...prevData,
        ...data2
      }
    })

  }, [setData]);

  return {
    data: contextData as T,
    addChange,
  };
}
