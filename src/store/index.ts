import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "../features/test/testSlice";
import { getPostsApi } from "../features/aipi";

export const store = configureStore({
  reducer: {
    users: userSlice.reducer,
    [getPostsApi.reducerPath]: getPostsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(getPostsApi.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
