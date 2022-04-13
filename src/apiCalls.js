import axios from "axios";
import {LoginStart, LoginFailure, LoginSuccess} from './store/AuthAction';
export const loginCall = async (userCredential, dispatch) => {
  dispatch(LoginStart());
  try {
    const res = await axios.post("/auth/login", userCredential);
    dispatch(LoginSuccess(res.data));
  } catch (err) {
    dispatch(LoginFailure(err));
  }
};