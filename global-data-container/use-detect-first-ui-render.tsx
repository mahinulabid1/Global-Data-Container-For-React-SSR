import {useEffect, useState, useMemo} from "react";


export const useDetectFirstUiRender = () => {
  const [isFirstRender , setIsFirstRender] = useState(true);

  useEffect(() => {
    setIsFirstRender(false);
  }, [])

  return{ isFirstRender }
}
