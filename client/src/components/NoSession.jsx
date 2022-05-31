import React from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

export default function NoSession() {
    return (
        <div className="w-full flex justify-center items-center mt-32">
            <p className="text-2xl text-white">Await o Login to continue!!</p>
            <AiOutlineLoading3Quarters color="white" size={32} className="m-8"/>
        </div>
    )
}
