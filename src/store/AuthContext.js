import { createContext } from "react";
import { useReducer } from "react";
import AuthReducer from "./AuthReducer";
import logger from "./logger";

const INIT_STATE = {
  user: {
    _id: "624d6475d82d4b71e2778228",
    username: "vu2",
    password: "$2b$10$VtN5SrMiQE5TnyQSlY/bC.fJNMD445oqFCmrvTYfM0gIiQkgPZhey",
    email: "vu@gmail.com",
    profilePicture: "",
    coverPicture: "",
    followings: [],
    followers: [],
    createdAt: "2022-04-06T09:59:17.573Z",
    updatedAt: "2022-04-06T15:16:19.480Z",
    __v: 0,
    city: "Ho chi Minh",
    country: "Viet Nam",
    relationship: 1.0,
  },
  isFetching: false,
  error: false,
};
export const AuthContext = createContext(INIT_STATE);
export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(logger(AuthReducer), INIT_STATE);

  return (
    <AuthContext.Provider value={[state, dispatch]}>
      {children}
    </AuthContext.Provider>
  );
};
