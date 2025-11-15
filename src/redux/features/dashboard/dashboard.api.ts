import { baseApi } from "@/redux/baseApi";

export const dashboardApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    getAdminOverview: builder.query<any, void>({
      query: () => `/dashboard/admin/overview`,
      providesTags: ["DashboardOverview"],
    }),
  }),
});

export const { useGetAdminOverviewQuery } = dashboardApi;
