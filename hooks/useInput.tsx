import { useState, useCallback } from "react";

interface Props {
  initialValue: null;
}

export default function useInput({ initialValue }: Props) {
  const [value, setValue] = useState(initialValue);
  const handler = useCallback(e => {
    setValue(e.target.value);
  }, []);
  return [value, handler] as const;
}
