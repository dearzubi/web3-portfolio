import React from "react";

export default function Navbar({data}) {

    return (
        <div className="basis-full flex flex-wrap justify-end p-[30px]">
            <a href={data?.cvlink} target="_blank" rel="noreferrer">
                <button className="bg-white rounded-sm py-[10px] px-[30px] shadow-sm font-text hover:text-white hover:bg-gray-700 transition-colors">
                    Get my CV
                </button>
            </a>
        </div>
    );

}