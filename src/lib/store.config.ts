import { configureStore } from "@reduxjs/toolkit";
import  authJwtToken  from "../features/authJwtToken/authJwtTokenSlice";
import setUser  from "@/features/setUser/setUser";


export const store = configureStore({
  reducer: {
    authJwtToken,
    setUser,
  },
});


