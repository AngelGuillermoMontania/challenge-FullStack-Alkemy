import React from "react";
import { AiFillAlert } from "react-icons/ai";

export default function NotFound() {
    return (
        <div className="w-full h-full flex justify-center items-center mt-32">
            <p className="text-2xl text-white">Upss!! Not found</p>
            <AiFillAlert size={50} color="red" className="m-4" />
        </div>
    )
}
