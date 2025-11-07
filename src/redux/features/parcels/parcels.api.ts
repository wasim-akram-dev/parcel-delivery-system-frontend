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
    getAllCreatedParcels: builder.query({
      query: () => ({
        url: "/parcels/me",
        method: "GET",
      }),
    }),
    ViewIncomingParcels: builder.query({
      query: () => ({
        url: "/parcels/incoming-parcels",
        method: "GET",
      }),
    }),
    ViewDeliveryHistory: builder.query({
      query: () => ({
        url: "/parcels/delivery-history",
        method: "GET",
      }),
    }),
  }),
});

export const {
  useLoginMutation,
  useGetAllParcelsQuery,
  useGetAllUsersQuery,
  useGetAllCreatedParcelsQuery,
  useViewIncomingParcelsQuery,
  useViewDeliveryHistoryQuery,
} = parcelsApi;
