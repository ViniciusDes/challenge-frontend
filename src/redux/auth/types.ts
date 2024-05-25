export type AuthData = {
  isAuthenticated: boolean;
  userAuthenticatedData: {
    userName: string;
    email: string;
    role: string;
  };
};
