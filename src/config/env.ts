const getEnv = (key: string): string => {
  const value = import.meta.env[key];
  if (!value) {
    throw new Error(`Missing environment variable: ${key}`);
  }
  return value;
};

export const env = {
  VITE_BASE_URL: getEnv('VITE_BASE_URL'),
  VITE_API_KEY: getEnv('VITE_API_KEY'),
  VITE_READ_ACCESS_TOKEN: getEnv('VITE_READ_ACCESS_TOKEN'),
};