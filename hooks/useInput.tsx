import { useState, useCallback } from "react";

export default function useInput(initialValue: string) {
  const [value, setValue] = useState(initialValue);
  const handler = useCallback(e => {
    setValue(e.target.value);
  }, []);
  return [value, handler] as const;
}
