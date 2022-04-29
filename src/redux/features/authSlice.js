import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = "http://localhost:4000/";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  tagTypes: ["Users"],
  endpoints: (build) => ({
    // ==========add user============

    addUser:  build.mutation({
      query(formData) {
        return {
          url: "api/messenger/users",
          method: "POST",
          body: formData,
          
        };
      },
      invalidatesTags: ["Users"],
    },),

    
  }),
});
export const { useAddUserMutation } = authApi;
