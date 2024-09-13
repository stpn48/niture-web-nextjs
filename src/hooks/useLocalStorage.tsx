export function useLocalStorage() {
  function getItem(key: string) {
    return localStorage.getItem(key);
  }

  function setItem(key: string, value: string) {
    localStorage.setItem(key, value);
  }

  function removeItem(key: string) {
    localStorage.removeItem(key);
  }

  return {
    getItem,
    setItem,
    removeItem,
  };
}
