import { configureStore } from "@reduxjs/toolkit";
import letters from "testRedux/modules/letters";
import member from "testRedux/modules/member";
import auth from "testRedux/modules/authSlice"

const store = configureStore({
  reducer: {
    letters,
    member,
    auth,
  }
})


export default store;