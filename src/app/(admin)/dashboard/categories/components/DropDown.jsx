"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { BsThreeDots } from "react-icons/bs";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
// import { useNavigate } from 'react-router-dom';
import axios from "axios";
import { useQueryClient } from "@tanstack/react-query";
import Link from "next/link";
export function DropDownMenuDemo({row}) {

  // const navigate = useNavigate();
  // const handleRedirect = () => {
  //   navigate(`/dashboard/coupons`);
  // };
  const queryclient = useQueryClient();
  const handleDelete = () => {
    // console.log({ row });
    axios
      .delete(`/api/categories/${row.id}`)
      .then((res) => {
        console.log({ res });
        queryclient.invalidateQueries("category-data");
      })
      .catch((err) => console.error);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="bg-inherit text-black">
          <BsThreeDots className="w-7 h-7" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-32 rounded-none p-0  bg-white">
        <DropdownMenuGroup className="">
          <DropdownMenuItem>
            <Link href={`/dashboard/categories/edit/${row.id}`}>Edit</Link>
            {/* <Link href={props.href}>Edit</Link> */}
          </DropdownMenuItem>
    
          <AlertDialog >
            <AlertDialogTrigger className="ml-2">Delete</AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>
                  Are you sure you want to delete this product?
                </AlertDialogTitle>
                <AlertDialogDescription>
                  This action cannot be undone. This will permanently delete
                  your product and remove your product from our servers.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction onClick={handleDelete}>
                  Continue
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
