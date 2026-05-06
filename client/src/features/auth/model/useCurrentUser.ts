import type { User } from './types';
export const useCurrentUser = (): User | null => {
  const userData = localStorage.getItem('userData');
  if (!userData) {
    return null;
  }
  const { email, name } = JSON.parse(userData).user;
  return { email, name };
};
