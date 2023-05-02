export const getLocalStorageItem = (key: string): string | null => localStorage.getItem(key)

export const getLocalStorageItemAsObject = <T extends object>(key: string): T | null => {
  const item = getLocalStorageItem(key)
  return item 
    ? JSON.parse(item) as T
    : null
}

export const setLocalStorageItem = <T>(key: string, value: T): void => {
  const parsedValue = typeof value === 'object' ? JSON.stringify(value) : value
  localStorage.setItem(key, parsedValue as string)
}

export const removeLocalStorageItem = (key: string): void => localStorage.removeItem(key)