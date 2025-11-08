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
    confirmParcel: builder.mutation({
      query: (id) => ({
        url: `/parcels/confirm-parcel/${id}`,
        method: "PATCH",
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
    createParcel: builder.mutation({
      query: (parcelInfo) => ({
        url: "/parcels",
        method: "POST",
        body: parcelInfo,
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
  useConfirmParcelMutation,
  useCreateParcelMutation,
} = parcelsApi;
