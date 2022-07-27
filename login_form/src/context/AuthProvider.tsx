import { createContext, useState } from "react";

// setting type for empty object so that it won't cause problems later on when we call the AuthContext method
type AuthType = {
  [key: string]: any;
};

const Auth: AuthType = {};

const AuthContext = createContext(Auth);

export const AuthProvider = ({ children }: any) => {
  const [auth, setAuth] = useState({});

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
