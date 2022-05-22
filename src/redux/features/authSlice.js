import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = "http://localhost:4000/";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  tagTypes: ["RegisterUser", "LoginUser"],
  endpoints: (build) => ({
    // ==========register user============
    registerUser: build.mutation({
      query(formData) {
        return {
          url: "api/messenger/register",
          method: "POST",
          body: formData,
        };
      },
      invalidatesTags: ["RegisterUser"],
    }),

    //=============login user============
    loginUser: build.mutation({
      query(state) {
        return {
          url: "api/messenger/login",
          method: "POST",
          body: state,
        };
      },
      invalidatesTags: ["LoginUser"],
    }),
  }),
});
export const { useRegisterUserMutation ,useLoginUserMutation} = authApi;
