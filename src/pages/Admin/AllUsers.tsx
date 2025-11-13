import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  useGetAllUsersQuery,
  useUpdateUserActiveStatusMutation,
} from "@/redux/features/parcels/parcels.api";
import type { IUser } from "@/types";
import { toast } from "sonner";

const AllUsers = () => {
  const { data: allUsers, isLoading } = useGetAllUsersQuery(undefined);
  console.log("All Users:", allUsers);
  const [updateUserActiveStatus] = useUpdateUserActiveStatusMutation();

  const handleUserActiveStatus = async (id: string, isActive: string) => {
    try {
      const confirmation = confirm(
        `Are you sure you want to this action with this user?`
      );

      if (confirmation) {
        console.log(id, isActive);
        const res = await updateUserActiveStatus({ id, isActive }).unwrap();
        console.log("res", res);
        if (res?.data) {
          toast.success("User Status Updated successfully");
        }
      }

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      console.log("error", error);
      toast("❌ Failed to Action!", {
        description: error?.data?.message || "Something went wrong",
      });
    }
  };

  return isLoading ? (
    <div className="min-h-screen flex flex-col justify-center align-middle items-center gap-4">
      <Spinner />
    </div>
  ) : (
    <div className="mx-5 my-5">
      <Table className="">
        <TableHeader>
          <TableRow className="bg-gray-100 border">
            <TableHead className="border text-center">S.N</TableHead>
            <TableHead className="border text-center">User ID</TableHead>
            <TableHead className="border text-center">Name</TableHead>
            <TableHead className="border text-center">Email</TableHead>
            <TableHead className="border text-center">Role</TableHead>
            <TableHead className="border text-center">Status</TableHead>
            <TableHead className="border text-center">Created At</TableHead>
            <TableHead className="border text-center">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {allUsers?.data.map((singleUser: IUser, index: number) => (
            <TableRow key={singleUser._id} className="text-center">
              <TableCell className="font-medium border text-center">
                {index + 1}
              </TableCell>
              <TableCell className="font-medium border text-center">
                {singleUser._id}
              </TableCell>
              <TableCell className="font-medium border text-center">
                {singleUser.name}
              </TableCell>
              <TableCell className="border text-center">
                {singleUser.email}
              </TableCell>
              <TableCell className="border text-center font-medium">
                {singleUser.role}
              </TableCell>
              <TableCell className="border text-center font-medium">
                {singleUser.isActive === "ACTIVE" ? (
                  <span className="text-green-600">{singleUser.isActive}</span>
                ) : (
                  <span className="text-red-600">{singleUser.isActive}</span>
                )}
              </TableCell>
              <TableCell className="border text-center">
                {singleUser.createdAt}
              </TableCell>
              <TableCell className="border text-center">
                <div className="flex flex-col gap-2">
                  {singleUser.isActive === "ACTIVE" && (
                    <Button
                      variant={"outline"}
                      onClick={() =>
                        handleUserActiveStatus(singleUser._id, "BLOCKED")
                      }
                    >
                      Block
                    </Button>
                  )}
                  {singleUser.isActive === "BLOCKED" && (
                    <Button
                      variant={"destructive"}
                      onClick={() =>
                        handleUserActiveStatus(singleUser._id, "ACTIVE")
                      }
                    >
                      Unblock
                    </Button>
                  )}
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default AllUsers;
