import Image from "next/image";

export default function PikaLoader() {
    return (
        <div className="flex flex-col justify-center items-center">
            <Image width="300" height="300" src="/loader.gif" alt="loading pikachu"></Image>
            <span className="text-blue-500 text-lg font-bold">Loading</span>
        </div>
    )
}