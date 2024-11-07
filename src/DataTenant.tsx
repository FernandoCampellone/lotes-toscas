"use client"

import * as React from "react"
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table"

import { Button } from "./components/ui/button"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./components/ui/table"

const data: Owner[] = [
{
    id:"asddsa",
    name: "Matias Lor",
    block: "Manzana 1 Lote 1 A",
    phoneOwner: 3514307773,
    tenant: "Fernando Campellone",
    phoneTenant: 3513307378,
    debtor: false

},
{
    id:"asddsa2",
    name: "Fernando Campellone",
    block: "Manzana 2 Lote 1 C",
    phoneOwner: 3514307773,
    tenant: "Matias Lor",
    phoneTenant: 3513307378,
    debtor: true
},
{
  id:"asddsa",
  name: "Matias Lor",
  block: "Manzana 1 Lote 1 A",
  phoneOwner: 3514307773,
  tenant: "Fernando Campellone",
  phoneTenant: 3513307378,
  debtor: false

},
{
  id:"asddsa2",
  name: "Fernando Campellone",
  block: "Manzana 2 Lote 1 C",
  phoneOwner: 3514307773,
  tenant: "Matias Lor",
  phoneTenant: 3513307378,
  debtor: true
},
{
  id:"asddsa",
  name: "Matias Lor",
  block: "Manzana 1 Lote 1 A",
  phoneOwner: 3514307773,
  tenant: "Fernando Campellone",
  phoneTenant: 3513307378,
  debtor: false

},
{
  id:"asddsa2",
  name: "Fernando Campellone",
  block: "Manzana 2 Lote 1 C",
  phoneOwner: 3514307773,
  tenant: "Matias Lor",
  phoneTenant: 3513307378,
  debtor: true
},
{
  id:"asddsa",
  name: "Matias Lor",
  block: "Manzana 1 Lote 1 A",
  phoneOwner: 3514307773,
  tenant: "Fernando Campellone",
  phoneTenant: 3513307378,
  debtor: false

},
{
  id:"asddsa2",
  name: "Fernando Campellone",
  block: "Manzana 2 Lote 1 C",
  phoneOwner: 3514307773,
  tenant: "Matias Lor",
  phoneTenant: 3513307378,
  debtor: true
},
{
  id:"asddsa",
  name: "Matias Lor",
  block: "Manzana 1 Lote 1 A",
  phoneOwner: 3514307773,
  tenant: "Fernando Campellone",
  phoneTenant: 3513307378,
  debtor: false

},
{
  id:"asddsa2",
  name: "Fernando Campellone",
  block: "Manzana 2 Lote 1 C",
  phoneOwner: 3514307773,
  tenant: "Matias Lor",
  phoneTenant: 3513307378,
  debtor: true
},
{
  id:"asddsa",
  name: "Matias Lor",
  block: "Manzana 1 Lote 1 A",
  phoneOwner: 3514307773,
  tenant: "Fernando Campellone",
  phoneTenant: 3513307378,
  debtor: false

},
{
  id:"asddsa2",
  name: "Fernando Campellone",
  block: "Manzana 2 Lote 1 C",
  phoneOwner: 3514307773,
  tenant: "Matias Lor",
  phoneTenant: 3513307378,
  debtor: true
},
{
  id:"asddsa",
  name: "Matias Lor",
  block: "Manzana 1 Lote 1 A",
  phoneOwner: 3514307773,
  tenant: "Fernando Campellone",
  phoneTenant: 3513307378,
  debtor: false

},
{
  id:"asddsa2",
  name: "Fernando Campellone",
  block: "Manzana 2 Lote 1 C",
  phoneOwner: 3514307773,
  tenant: "Matias Lor",
  phoneTenant: 3513307378,
  debtor: true
},
{
  id:"asddsa",
  name: "Matias Lor",
  block: "Manzana 1 Lote 1 A",
  phoneOwner: 3514307773,
  tenant: "Fernando Campellone",
  phoneTenant: 3513307378,
  debtor: false

},
{
  id:"asddsa2",
  name: "Fernando Campellone",
  block: "Manzana 2 Lote 1 C",
  phoneOwner: 3514307773,
  tenant: "Matias Lor",
  phoneTenant: 3513307378,
  debtor: true
},
{
  id:"asddsa",
  name: "Matias Lor",
  block: "Manzana 1 Lote 1 A",
  phoneOwner: 3514307773,
  tenant: "Fernando Campellone",
  phoneTenant: 3513307378,
  debtor: false

},
{
  id:"asddsa2",
  name: "Fernando Campellone",
  block: "Manzana 2 Lote 1 C",
  phoneOwner: 3514307773,
  tenant: "Matias Lor",
  phoneTenant: 3513307378,
  debtor: true
},
{
  id:"asddsa",
  name: "Matias Lor",
  block: "Manzana 1 Lote 1 A",
  phoneOwner: 3514307773,
  tenant: "Fernando Campellone",
  phoneTenant: 3513307378,
  debtor: false

},
{
  id:"asddsa2",
  name: "Fernando Campellone",
  block: "Manzana 2 Lote 1 C",
  phoneOwner: 3514307773,
  tenant: "Matias Lor",
  phoneTenant: 3513307378,
  debtor: true
},
{
  id:"asddsa",
  name: "Matias Lor",
  block: "Manzana 1 Lote 1 A",
  phoneOwner: 3514307773,
  tenant: "Fernando Campellone",
  phoneTenant: 3513307378,
  debtor: false

},
{
  id:"asddsa2",
  name: "Fernando Campellone",
  block: "Manzana 2 Lote 1 C",
  phoneOwner: 3514307773,
  tenant: "Matias Lor",
  phoneTenant: 3513307378,
  debtor: true
},
{
  id:"asddsa",
  name: "Matias Lor",
  block: "Manzana 1 Lote 1 A",
  phoneOwner: 3514307773,
  tenant: "Fernando Campellone",
  phoneTenant: 3513307378,
  debtor: false

},
{
  id:"asddsa2",
  name: "Fernando Campellone",
  block: "Manzana 2 Lote 1 C",
  phoneOwner: 3514307773,
  tenant: "Matias Lor",
  phoneTenant: 3513307378,
  debtor: true
},

{
  id:"asddsa",
  name: "Matias Lor",
  block: "Manzana 1 Lote 1 A",
  phoneOwner: 3514307773,
  tenant: "Fernando Campellone",
  phoneTenant: 3513307378,
  debtor: false

},
{
  id:"asddsa2",
  name: "Fernando Campellone",
  block: "Manzana 2 Lote 1 C",
  phoneOwner: 3514307773,
  tenant: "Matias Lor",
  phoneTenant: 3513307378,
  debtor: true
},
{
  id:"asddsa",
  name: "Matias Lor",
  block: "Manzana 1 Lote 1 A",
  phoneOwner: 3514307773,
  tenant: "Fernando Campellone",
  phoneTenant: 3513307378,
  debtor: false

},
{
  id:"asddsa2",
  name: "Fernando Campellone",
  block: "Manzana 2 Lote 1 C",
  phoneOwner: 3514307773,
  tenant: "Matias Lor",
  phoneTenant: 3513307378,
  debtor: true
},
{
  id:"asddsa",
  name: "Matias Lor",
  block: "Manzana 1 Lote 1 A",
  phoneOwner: 3514307773,
  tenant: "Fernando Campellone",
  phoneTenant: 3513307378,
  debtor: false

},
{
  id:"asddsa2",
  name: "Fernando Campellone",
  block: "Manzana 2 Lote 1 C",
  phoneOwner: 3514307773,
  tenant: "Matias Lor",
  phoneTenant: 3513307378,
  debtor: true
},
]

export type Owner = {
  id: string
  name: string
  block: string
  phoneOwner: number
  tenant: string
  phoneTenant: number
  debtor : boolean
}

export const columns: ColumnDef<Owner>[] = [
  {
    id: "select",
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "name",
    header: "Propietario",
    cell: ({ row }) => (
      <div className="capitalize text-xs">{row.getValue("name")}</div>
    ),
  },
  {
    accessorKey: "block",
    header: "Manzana/Lote",
    cell: ({ row }) => <div className="capitalize text-xs">{row.getValue("block")}</div>,
  },
  {
    accessorKey: "phoneOwner",
    header: "Teléfono Propietario",
    cell: ({ row }) => <div className="capitalize text-xs">{row.getValue("phoneOwner")}</div>

  },
  {
    accessorKey:"tenant",
    header:"Inquilino",
    cell: ({ row }) => <div className="capitalize text-xs">{row.getValue("tenant")}</div>
  },
  {
    accessorKey:"phoneTenant",
    header: "Teléfono Inquilino",
    cell: ({ row }) => <div className="capitalize text-xs">{row.getValue("phoneTenant")}</div>
  },
  {
    accessorKey:"debtor",
    header:"Deudor",
    cell: ({ row }) => <div className="capitalize text-xs">{row.getValue("debtor") ? "True" : "False"}</div>
  },
  {
    id: "actions",
    enableHiding: false,
    cell: () => {
      return (
        <Button className="text-xs">Editar</Button>
      )
    },
  },
]

export default function DataTableDemo() {
  const [sorting, setSorting] = React.useState<SortingState>([])
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  )
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({})


  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
    },
  })

  return (
    <main className="min-h-screen w-screen bg-background bg-red-600 pt-9 flex justify-center">
      <div className="flex flex-col mx-auto w-9/12 h-5/6 text-black mt-4 bg-green-600">
        <div className="rounded-md border">
          <Table>
            <TableHeader style={{ backgroundColor: '#6ab70e' }} className="text-l">
              {table.getHeaderGroups().map((headerGroup) => (
                <TableRow key={headerGroup.id}>
                  {headerGroup.headers.map((header) => {
                    return (
                      <TableHead key={header.id}>
                        {header.isPlaceholder
                          ? null
                          : flexRender(
                              header.column.columnDef.header,
                              header.getContext()
                            )}
                      </TableHead>
                    )
                  })}
                </TableRow>
              ))}
            </TableHeader>
            <TableBody>
              {table.getRowModel().rows?.length ? (
                table.getRowModel().rows.map((row) => (
                  <TableRow
                    key={row.id}
                    data-state={row.getIsSelected()}
                  >
                    {row.getVisibleCells().map((cell) => (
                      <TableCell key={cell.id}>
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </TableCell>
                    ))}
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell
                    colSpan={columns.length}
                    className="h-24 text-center"
                  >
                    No results.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
        <div className="flex items-center justify-end space-x-2 py-4">
          <div className="space-x-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => table.previousPage()}
              disabled={!table.getCanPreviousPage()}
            >
              Previous
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => table.nextPage()}
              disabled={!table.getCanNextPage()}
            >
              Next
            </Button>
          </div>
        </div>
      </div>
    </main>
  )
}
