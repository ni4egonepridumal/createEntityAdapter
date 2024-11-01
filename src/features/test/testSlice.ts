/* eslint-disable @typescript-eslint/ban-ts-comment */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";

const userAdapter = createEntityAdapter({
  //@ts-expect-error
  selectId: (user) => user.id, // поле идентифиактора сущности — это uuid
  //@ts-expect-error
  sortComparer: (a, b) => a.title.localeCompare(b.title),
});

export const userSlice = createSlice({
  name: "users",
  initialState: userAdapter.getInitialState(),
  reducers: {
    userAdd: userAdapter.addOne,
    userReceived(state, action) {
      console.log("action", action.payload);
      userAdapter.setAll(state, action.payload);
    },
  },
});

const reducer = userSlice.reducer;
export default reducer;

export const { userAdd, userReceived } = userSlice.actions;
