import { baseApi } from "@/redux/baseApi";

const parcelsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
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

export const { useGetAllParcelsQuery, useGetAllUsersQuery } = parcelsApi;
