import { useState, useCallback } from "react";

interface Props {
  initialValue: any;
}

export default function useInput({ initialValue }: Props) {
  const [value, setValue] = useState(initialValue);
  const handler = useCallback(e => {
    setValue(e.target.value);
  }, []);
  return [value, handler];
}
