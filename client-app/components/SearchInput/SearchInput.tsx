import React from "react";
import Image from "next/image";

type Props = {
    setQuery: React.Dispatch<React.SetStateAction<string>>;
};

const TIME = 300;

const SearchInput = ({ setQuery }: Props) =>  {
    const [text, setText] = React.useState('');
    const timer = React.useRef<NodeJS.Timeout>();
    const handlerInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.currentTarget.value;
        clearTimeout(timer.current);
        setText(value);

        timer.current = setTimeout(() => {
            setQuery(value);
        }, TIME);
    }
    return  (
        <>
            <input className="h-10 pr-14 md:w-96 rounded-full p-4 text-md text-zinc-500 border border-solid border-cyan-700 focus:outline-none focus:border focus:border-solid focus:border-cyan-500 duration-200" 
            type="text" 
            placeholder="Search Movie" 
            value={text} 
            onChange={handlerInput} />
            <div className="relative ml-4">
                <Image width="30" height="32" src="/tmdb-logo.svg" alt="tmbd-logo"/>
            </div>
        </>
    );
};

export default SearchInput;