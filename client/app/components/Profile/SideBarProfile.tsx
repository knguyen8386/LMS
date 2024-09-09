import React, { FC } from 'react'
import avatarDefault from "../../../public/assets/avatar.png"
import Image from 'next/image';
import { RiLockPasswordLine } from "react-icons/ri";
import { SiCoursera } from "react-icons/si";
import { AiOutlineLogout } from "react-icons/ai";
import { MdOutlineAdminPanelSettings } from "react-icons/md";
import Link from 'next/link';

type Props = {
    user: any;
    active: number;
    avatar: string | null;
    setActive: (active: number) => void;
    logoutHandler: any;
}

const SideBarProfile: FC<Props> = ({ user, active, avatar, setActive, logoutHandler }) => {
    return (
        <div className='w-full'>
            {/* My Account */}
            <div
                className={`w-full flex items-center px-3 py-4 cursor-pointer ${active === 1 ? "dark:bg-slate-800 bg-white" : "bg-transparent"} hover:bg-gray-100 dark:hover:bg-gray-700`}
                onClick={() => setActive(1)}
            >
                <Image
                    src={user.avatar || avatar ? user.avatar.url || avatar : avatarDefault}
                    alt=''
                    className='w-[20px] h-[20px] object-cover 800px:w-[30px] 800px:h-[30px] cursor-pointer rounded-full'
                    width={20}
                    height={20}
                />
                <h5
                    className='pl-2 800px:block hidden font-Poppins dark:text-white text-black'
                >
                    My Account
                </h5>
            </div>
            {/* Change pass */}
            <div
                className={`w-full flex items-center px-3 py-4 cursor-pointer ${active === 2 ? "dark:bg-slate-800 bg-white" : "bg-transparent"} hover:bg-gray-100 dark:hover:bg-gray-700`}
                onClick={() => setActive(2)}
            >
                <RiLockPasswordLine size={20} className='dark:text-white text-black' />
                <h5 className='pl-2 800px:block hidden font-Poppins dark:text-white text-black'>
                    Change Password
                </h5>
            </div>
            {/* Enrolled Courses */}
            <div
                className={`w-full flex items-center px-3 py-4 cursor-pointer ${active === 3 ? "dark:bg-slate-800 bg-white" : "bg-transparent"} hover:bg-gray-100 dark:hover:bg-gray-700`}
                onClick={() => setActive(3)}
            >
                <SiCoursera size={20} className='dark:text-white text-black' />
                <h5 className='pl-2 800px:block hidden font-Poppins dark:text-white text-black'>
                Enrolled Courses
                </h5>
            </div>
            {/* Admin Dashboard */}
            {
                user.role === "admin" &&
                (
                    <Link
                        className={`w-full flex items-center px-3 py-4 cursor-pointer ${active === 6 ? "dark:bg-slate-800 bg-white" : "bg-transparent"
                            }`}
                        href={"/admin"}
                    >
                        <MdOutlineAdminPanelSettings size={20} className='dark:text-white text-black' />
                        <h5
                            className='pl-2 800px:block hidden font-Poppins dark:text-white text-black'
                        >
                            Admin Dashboard
                        </h5>
                    </Link>
                )
            }
            {/* Logout */}
            <div
                className={`w-full flex items-center px-3 py-4 cursor-pointer ${active === 4 ? "dark:bg-slate-800 bg-white" : "bg-transparent"
                    }hover:bg-gray-100 dark:hover:bg-gray-700`}
                onClick={() => logoutHandler()}
            >
                <AiOutlineLogout size={20} className='dark:text-white text-black' />
                <h5
                    className='pl-2 800px:block hidden font-Poppins dark:text-white text-black'
                >Log Out</h5>
            </div>
        </div>
    )
}

export default SideBarProfile