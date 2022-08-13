import Link from "next/link";
import Image from "next/image";
// Components
import SearchInput from "../SearchInput/SearchInput";

type Props = {
    setQuery?: React.Dispatch<React.SetStateAction<string>>;
};

const Header = ({ setQuery }: Props) => (
    <div className="sticky flex top-0 z-40 w-full h-24 bg-zinc-700">
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
                    <Link href="/login">
                    <button type="submit"
                        className="ml-4 border 
                                    border-transparent 
                                    bg-cyan-400 
                                    px-10 py-1 
                                    text-sm
                                    rounded-full
                                    hover:bg-transparent border-cyan-400 hover:text-white duration-300">
                        Login
                    </button>
                    </Link>
                </div>
            ) : null}
        </div>
    </div>
);

export default Header;