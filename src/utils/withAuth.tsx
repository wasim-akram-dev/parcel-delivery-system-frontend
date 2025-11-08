import { Spinner } from "@/components/ui/spinner";
import { useUserInfoQuery } from "@/redux/features/auth/auth.api";
import type { TRole } from "@/types";
import type { ComponentType } from "react";
import { Navigate } from "react-router";
import { toast } from "sonner";

export const withAuth = (Component: ComponentType, requiredRole: TRole) => {
  return function AuthWrapper() {
    const { data, isLoading, isFetching } = useUserInfoQuery(undefined);
    console.log("Inside withAuth", data);

    if (isLoading || isFetching) {
      console.log("Loading From withAuth");
      return <Spinner />;
    }

    // need a loading state
    if (!isLoading && !data?.user?.email) {
      toast("You are not Authorized user, login please");
      return <Navigate to="/login" />;
    }

    if (!isLoading && requiredRole && data?.user?.role != requiredRole) {
      return <Navigate to="/unauthorized" />;
    }

    return <Component />;
  };
};
