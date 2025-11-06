import { baseApi } from "@/redux/baseApi";

const parcelsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (userInfo) => ({
        url: "/auth/login",
        method: "POST",
        body: userInfo,
      }),
    }),
    getAllParcels: builder.query({
      query: () => ({
        url: "/parcels/view-all-parcels",
        method: "GET",
      }),
    }),
    getAllUsers: builder.query({
      query: () => ({
        url: "/parcels/view-all-users",
        method: "GET",
      }),
    }),
  }),
});

export const { useLoginMutation, useGetAllParcelsQuery, useGetAllUsersQuery } =
  parcelsApi;
