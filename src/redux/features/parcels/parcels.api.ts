import { baseApi } from "@/redux/baseApi";

const parcelsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
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
      providesTags: ["User"],
    }),
    getAllCreatedParcels: builder.query({
      query: () => ({
        url: "/parcels/me",
        method: "GET",
      }),
      providesTags: ["Parcel"],
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
      invalidatesTags: ["Parcel"],
    }),
    cancelParcel: builder.mutation({
      query: (id) => ({
        url: `/parcels/cancel/${id}`,
        method: "PATCH",
      }),
      invalidatesTags: ["Parcel"],
    }),
    updateUserActiveStatus: builder.mutation({
      query: ({ id, isActive }) => ({
        url: `/parcels/update-user-active-status/${id}`,
        method: "PATCH",
        body: { isActive },
      }),
      invalidatesTags: ["User"],
    }),
  }),
});

export const {
  useGetAllParcelsQuery,
  useGetAllUsersQuery,
  useGetAllCreatedParcelsQuery,
  useViewIncomingParcelsQuery,
  useViewDeliveryHistoryQuery,
  useConfirmParcelMutation,
  useCreateParcelMutation,
  useCancelParcelMutation,
  useUpdateUserActiveStatusMutation,
} = parcelsApi;
