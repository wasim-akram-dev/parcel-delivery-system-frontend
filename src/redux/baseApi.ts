import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl:
      import.meta.env.VITE_BASE_URL ||
      "https://runner-courier-server.vercel.app/api/v1",
    // allow browser to get cookies from diff origin/domain
    credentials: "include",
  }),
  tagTypes: ["User"],
  endpoints: () => ({}),
});
