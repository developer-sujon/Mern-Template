//external import
import { configureStore } from "@reduxjs/toolkit";
import profileSlice from "../features/profileSlice";
import settingSlice from "../features/loaderSlice";

const store = configureStore({
  reducer: {
    setting: settingSlice,
    profile: profileSlice,
  },
});

export default store;
