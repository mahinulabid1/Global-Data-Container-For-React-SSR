import React, { createContext, useState } from 'react';
import { useDetectFirstUiRender } from '~/global-data-container/use-detect-first-ui-render';

export type GlobalDataContextType = {
  data: any
  setData: React.Dispatch<React.SetStateAction<any>> | null;
  isFirstRender:boolean;
}

// setting a default data for now for avoiding typescript errors
export const GlobalDataContext = createContext<GlobalDataContextType>({
  data: {}, // just a default value. will be changed in provider.
  setData: null, // just a default value. will be changed in provider.
  isFirstRender: true, // just a default value. will be changed in provider.
});
