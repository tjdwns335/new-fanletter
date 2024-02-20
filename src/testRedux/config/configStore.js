import { configureStore } from "@reduxjs/toolkit";
import letters from "testRedux/modules/letters";
import member from "testRedux/modules/member";

const store = configureStore({
  reducer: {
    letters,
    member,
  }
})

export default store;