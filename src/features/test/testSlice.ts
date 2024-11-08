import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";

const userAdapter = createEntityAdapter({
  //@ts-ignore
  selectId: (user) => user.id,
  //@ts-ignore
  sortComparer: (a, b) => a.title.localeCompare(b.title),
});

export const userSlice = createSlice({
  name: "users",
  initialState: userAdapter.getInitialState(),
  reducers: {
    userAdd: userAdapter.addOne,
    //@ts-ignore
    userReceived(state, action) {
      console.log("action", action.payload);
      userAdapter.setAll(state, action.payload);
    },
  },
});

const reducer = userSlice.reducer;
export default reducer;

export const { userAdd, userReceived } = userSlice.actions;

export const {
selectAll,
selectIds,
selectEntities,
selectTotal
  //@ts-ignore
} = userAdapter.getSelectors((state) => state.users);
