import Link from "next/link";
import Image from "next/image";
// Components
import SearchInput from "../SearchInput/SearchInput";
import { getSession, useSession, signOut } from "next-auth/react";
import { GetServerSideProps } from "next";
import { useState } from "react";
import { FiLogOut } from "react-icons/fi"

type Props = {
    setQuery?: React.Dispatch<React.SetStateAction<string>>;
};

const Header = ({ setQuery }: Props) => {
    const [hiddenMenu, setHiddenMenu] = useState(true);
    const {data: session, status} = useSession();
    const logoProfile = session?.user?.image;
    return (
        <div className="sticky flex top-0 z-40 w-full h-24 bg-white">
            <div className="flex justify-between w-full h-full max-w-7xl m-auto px-4">
                <Link href="/">
                    <a className="flex items-center cursor-pointer">
                        <div className="absolute pt-2">
                            <Image height="50" width="150" src="/rmdb-logo.svg" alt="movie-app-logo"/>
                        </div>
                        
                    </a>
                </Link>
                {setQuery ? (
                    <div className="relative flex items-center">
                        <SearchInput setQuery={setQuery} />
                        {status !== "authenticated" ? 
                            (
                                <Link href="/login">
                                    <button type="submit"
                                        className="ml-4 border 
                                                border-transparent 
                                                bg-cyan-400 
                                                text-white
                                                px-10 py-1 
                                                text-sm
                                                rounded-full
                                                hover:bg-transparent border-cyan-400 hover:text-cyan-500 duration-300">
                                        Login
                                    </button>
                                </Link>
                            ) : (
                                <div className="ml-4" >
                                    <div className="relative">
                                        <Image height="40" 
                                        width="40"
                                        className="cursor-pointer
                                                    rounded-full
                                                    borrder border-solid border-cyan-500"
                                        src={ logoProfile ? logoProfile : "/profile.svg" } alt="profile"
                                        onClick={() => setHiddenMenu(!hiddenMenu)}/>

                                        <div className={hiddenMenu ? "hidden absolute z-10 left-1/2 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-md sm:px-0"
                                                    : "absolute z-10 left-1/2 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-md sm:px-0"}>
                                            <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                                                <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                                                    <a href="#" onClick={() => signOut()} className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
                                                        <FiLogOut />
                                                        <div className="ml-4">
                                                            <p className="text-base font-medium text-gray-900">Log Out</p>
                                                            <span className="font-thin text-sm text-gray-400">{session.user?.email}</span>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                ) : null}
            </div>
        </div>
    );
};

export default Header;