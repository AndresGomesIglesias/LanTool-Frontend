import React, { useState, useEffect } from 'react';

const useStateWithSessionStorage = localStorageKey => {
  const [value, setValue] = useState(sessionStorage.getItem(localStorageKey) || '');

  useEffect(() => {
    sessionStorage.setItem(localStorageKey, value.value);
  }, [value]);
  return [value, setValue]
}

export default  useStateWithSessionStorage