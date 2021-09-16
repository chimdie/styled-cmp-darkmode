import { createSlice } from "@reduxjs/toolkit";

export const darkSlice = createSlice({
  name: "dark-mode",
  reducers: {
    darkTheme: "dark-mode",
  },
});
