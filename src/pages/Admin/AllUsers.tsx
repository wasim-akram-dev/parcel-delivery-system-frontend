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
import { useGetAllUsersQuery } from "@/redux/features/parcels/parcels.api";
import type { IUser } from "@/types";

const AllUsers = () => {
  const { data: allUsers, isLoading } = useGetAllUsersQuery(undefined);
  console.log("users", allUsers);

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
            <TableHead className="border text-center">user_id</TableHead>
            <TableHead className="border text-center">Name</TableHead>
            <TableHead className="border text-center">Email</TableHead>
            <TableHead className="border text-center">Role</TableHead>
            <TableHead className="border text-center">is_Active</TableHead>
            <TableHead className="border text-center">is_Verified</TableHead>
            <TableHead className="border text-center">created_At</TableHead>
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
              <TableCell className="border text-center">
                {singleUser.role}
              </TableCell>
              <TableCell className="border text-center">
                {singleUser.isActive}
              </TableCell>
              <TableCell className="border text-center">
                {singleUser.isVerified}
              </TableCell>
              <TableCell className="border text-center">
                {singleUser.createdAt}
              </TableCell>
              <TableCell className="border text-center">
                <div className="flex flex-col gap-2">
                  <Button>
                    {singleUser.isActive === "BLOCKED" ? "Unblock" : "Block"}
                  </Button>
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
