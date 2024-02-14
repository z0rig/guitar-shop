export type Token = string;

export const getToken = (): Token => {
  const token = localStorage.getItem(process.env.VITE_AUTH_TOKEN_KEY_NAME as string);
  return token ?? '';
};

export const saveToken = (token: Token): void => {
  localStorage.setItem(process.env.VITE_AUTH_TOKEN_KEY_NAME as string, token);
};

export const dropToken = (): void => {
  localStorage.removeItem(process.env.VITE_AUTH_TOKEN_KEY_NAME as string);
};
