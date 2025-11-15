import { baseApi } from "@/redux/baseApi";

const parcelsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    confirmParcel: builder.mutation({
      query: (id) => ({
        url: `/parcels/confirm-parcel/${id}`,
        method: "PATCH",
      }),
      invalidatesTags: ["Parcel"],
    }),
    getAllParcels: builder.query({
      query: () => ({
        url: "/parcels/view-all-parcels",
        method: "GET",
      }),
      providesTags: ["Parcel"],
    }),
    updateParcelStatus: builder.mutation({
      query: ({ id, parcel_status }) => ({
        url: `/parcels/update-parcel-status/${id}`,
        method: "PATCH",
        body: { parcel_status },
      }),
      invalidatesTags: ["Parcel"],
    }),
    updateParcelBlockStatus: builder.mutation({
      query: ({ id, isBlocked }) => ({
        url: `/parcels/update-parcel-block/${id}`,
        method: "PATCH",
        body: { isBlocked },
      }),
      invalidatesTags: ["Parcel"],
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
      providesTags: ["Parcel"],
    }),
    ViewDeliveryHistory: builder.query({
      query: () => ({
        url: "/parcels/delivery-history",
        method: "GET",
      }),
      providesTags: ["Parcel"],
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
  useUpdateParcelStatusMutation,
  useUpdateParcelBlockStatusMutation,
} = parcelsApi;
