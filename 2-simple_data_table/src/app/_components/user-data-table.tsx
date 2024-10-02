import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { User } from "../_schemas/user";
import { ColumnDef, flexRender, getCoreRowModel, useReactTable } from "@tanstack/react-table";
import React from "react";
import { useVirtualizer } from "@tanstack/react-virtual";

interface UserTableProps {
  data: User[];
}

export const UserDataTable: React.FC<UserTableProps> = ({ data }) => {
  const columns = React.useMemo<ColumnDef<User>[]>(
    () => [
      { accessorKey: 'name', header: 'Name', size: 150 },
      { accessorKey: 'email', header: 'Email', size: 250 },
      { accessorKey: 'gender', header: 'Gender', size: 100 },
      { accessorKey: 'address', header: 'Address', size: 300 },
    ],
    []
  );

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  const { rows } = table.getRowModel();

  // The virtualizer setup
  const tableContainerRef = React.useRef<HTMLDivElement>(null);

  const rowVirtualizer = useVirtualizer({
    count: rows.length,
    estimateSize: () => 40,
    getScrollElement: () => tableContainerRef.current,
    overscan: 20,
  });

  return (
    <div className="flex w-2/3 rounded-md justify-center items-center p-8 bg-white my-5 mx-auto shadow-lg" ref={tableContainerRef}>
        <div >
            <Table className=" w-full">
                <TableHeader>
                {table.getHeaderGroups().map(headerGroup => (
                    <TableRow key={headerGroup.id}>
                    {headerGroup.headers.map(header => (
                        <TableHead key={header.id}>
                        <div
                            className={header.column.getCanSort() ? 'cursor-pointer select-none font-bold' : ''}
                            onClick={header.column.getToggleSortingHandler()}
                        >
                            {flexRender(header.column.columnDef.header, header.getContext())}
                            {header.column.getIsSorted() ? (header.column.getIsSorted() === 'asc' ? ' ' : ' ') : null}
                        </div>
                        </TableHead>
                    ))}
                    </TableRow>
                ))}
                </TableHeader>
                <TableBody>
                    {rowVirtualizer.getVirtualItems().map((virtualRow, index) => {
                        const row = rows[virtualRow.index];
                        return (
                        <TableRow
                            key={row.id}
                            style={{
                                height: `${virtualRow.size}px`,
                                transform: `translateY(${
                                virtualRow.start - index * virtualRow.size
                                }px)`,
                            }}
                        >
                            {row.getVisibleCells().map(cell => (
                            <TableCell key={cell.id}>
                                {flexRender(cell.column.columnDef.cell, cell.getContext())}
                            </TableCell>
                            ))}
                        </TableRow>
                        );
                    })}
                </TableBody>
            </Table>
        </div>
    </div>
  );
};