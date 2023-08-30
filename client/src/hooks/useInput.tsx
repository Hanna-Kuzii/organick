import { useState } from 'react';

export function useInput(initialValue: any) {
  const [value, setValue] = useState(initialValue);

  function handleChange(event: any) {
    setValue(event.target.value);
  }

  return {
    value,
    onChange: handleChange,
    clear: () => setValue(''),
  };
}
