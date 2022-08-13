import Link from "next/link";

type Props = {
    title: string;
}

const Breadcrumb = ({ title }:Props) => (
    <div className="bg-zinc-800">
        <div>
            <Link href="/">
                <a className="flex items-center max-w-7xl m-auto p-4 text-white text-lg">
                    <span className="hover:opacity-80 cursor-pointer duration-300">Home</span>
                    <span className="block p-2">|</span>
                    <span className="font-bold truncate">{title}</span>
                </a>
            </Link>
        </div>
    </div>
)

export default Breadcrumb;