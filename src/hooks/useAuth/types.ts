export interface UseAuthInterface {
  isAuthenticated: boolean;
  userAuthenticatedData: UserAuthenticatedData;
  validateLogin: (email: string, password: string) => void;
}

export type UserAuthenticatedData = {
  userName: string;
  email: string;
  role: string;
};

export interface MakeLoginPayload {
  email: string;
  userName: string;
  role: string;
}
