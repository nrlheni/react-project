// app/components/user-data-table.tsx

import { User } from "@/app/_schemas/user";
import { ColumnDef } from "@tanstack/react-table";
import React from "react";
import { DataTable } from "@/components/ui/data-table";

interface UserTableProps {
  data: User[];
}

export const UserDataTable: React.FC<UserTableProps> = ({ data }) => {
  const columns = React.useMemo<ColumnDef<User>[]>(() => [
    { accessorKey: 'name', header: 'Name', size: 150 },
    { accessorKey: 'email', header: 'Email', size: 250 },
    { accessorKey: 'gender', header: 'Gender', size: 100 },
    { accessorKey: 'address', header: 'Address', size: 300 },
  ], []);

  return (
    <div className="w-2/3 rounded-md bg-white p-8 my-5 mx-auto shadow-lg">
      <DataTable columns={columns} data={data} height="500px" />
    </div>
  );
};
