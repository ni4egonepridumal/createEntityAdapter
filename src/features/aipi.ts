import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { userReceived } from "./test/testSlice";

export const getPostsApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),
  endpoints: (builder) => ({
    getPosts: builder.query<unknown, void>({
      query: () => ({
        url: "posts",
      }),
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          console.log("daa", data);
          dispatch(userReceived(data)); // Обновляем состояние с данными из запроса
        } catch (error) {
          console.error("Error fetching users:", error);
        }
      },
    }),
  }),
});

export const { useGetPostsQuery } = getPostsApi;
