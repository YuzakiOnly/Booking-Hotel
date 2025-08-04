"use client"

import Link from "next/link"
import { IoClose, IoMenu } from "react-icons/io5"
import { useState, useEffect } from "react"
import { useSession, signOut } from "next-auth/react"
import clsx from "clsx"
import Image from "next/image"
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
} from "@/components/ui/dropdown-menu"

const NavLink = () => {
    const [open, setOpen] = useState(false);
    const { data: session } = useSession();

    // if (!session?.user) return null

    return (
        <>
            {session?.user ? (
                <div className="order-2">
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <div className="flex items-center gap-4 cursor-pointer">
                                <div className="">
                                    <Image
                                        src={session.user.image || "/images/avatar.svg"}
                                        alt="avatar"
                                        width={40}
                                        height={40}
                                        className="rounded-full border"
                                    />
                                </div>
                                <span className="font-medium">{session.user.name}</span>
                            </div>
                        </DropdownMenuTrigger>

                        <DropdownMenuContent className="w-56 mt-2">
                            <DropdownMenuLabel className="flex flex-col">
                                <span className="font-medium">{session.user.name}</span>
                                <span className="text-sm text-gray-500">{session.user.email}</span>
                            </DropdownMenuLabel>

                            <DropdownMenuSeparator />

                            <DropdownMenuItem className="text-sm text-muted-foreground cursor-default">
                                Role: <span className=" font-semibold text-primary">{session.user.role}</span>
                            </DropdownMenuItem>

                            <DropdownMenuSeparator />

                            <DropdownMenuItem
                                onClick={() => signOut()}
                                className="text-red-600 hover:bg-red-50 cursor-pointer"
                            >
                                Sign Out
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            ) : null}

            <button onClick={() => setOpen(!open)} className='inline-flex items-center p-2 justify-center text-sm text-gray-500 rounded-md md:hidden hover:bg-gray-100'>
                {!open ? <IoMenu className="size-8" /> : <IoClose className="size-8" />}
            </button>
            <div className={clsx("w-full md:block md:w-auto", {
                "hidden": !open
            })}>
                <ul className="flex flex-col font-semibold text-sm uppercase p-4 mt-4 rounded-sm bg-gray-50 md:flex-row md:items-center md:space-x-10 md:p-0 md:mt-0 md:border-0 md:bg-white">
                    <li>
                        <Link href="/" className="block py-2 px-3 text-gray-800 hover:bg-gray-100 rounded-sm md:hover:bg-transparent md:p-0" >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link href="/about" className="block py-2 px-3 text-gray-800 hover:bg-gray-100 rounded-sm md:hover:bg-transparent md:p-0" >
                            About
                        </Link>
                    </li>
                    <li>
                        <Link href="/room" className="block py-2 px-3 text-gray-800 hover:bg-gray-100 rounded-sm md:hover:bg-transparent md:p-0" >
                            Rooms
                        </Link>
                    </li>
                    <li>
                        <Link href="/contact" className="block py-2 px-3 text-gray-800 hover:bg-gray-100 rounded-sm md:hover:bg-transparent md:p-0" >
                            Contact
                        </Link>
                    </li>
                    {session && (
                        <>
                            <li>
                                <Link href="/myreservation" className="block py-2 px-3 text-gray-800 hover:bg-gray-100 rounded-sm md:hover:bg-transparent md:p-0" >
                                    My Reservation
                                </Link>
                            </li>
                            {session.user.role === "admin" && (
                                <>
                                    <li>
                                        <Link href="/admin/dashboard" className="block py-2 px-3 text-gray-800 hover:bg-gray-100 rounded-sm md:hover:bg-transparent md:p-0" >
                                            Dashboard
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/admin/room" className="block py-2 px-3 text-gray-800 hover:bg-gray-100 rounded-sm md:hover:bg-transparent md:p-0" >
                                            Manage Room
                                        </Link>
                                    </li>
                                </>
                            )}
                        </>
                    )}

                    {session ? (
                        <li className="pt-2 md:pt-0 ">
                            <button
                                onClick={() => signOut()}
                                className="md:hidden  py-2.5 px-4 bg-red-400 text-white hover:bg-red-600 rounded-sm cursor-pointer">Sign Out</button>
                        </li>
                    ) : (
                        <li className="pt-2 md:pt-0 ">
                            <Link href="/signin" className="py-2.5 px-6 bg-orange-400 text-white hover:bg-orange-500 rounded-sm ">Sign In</Link>
                        </li>
                    )}
                </ul>
            </div>
        </>
    )
}

export default NavLink