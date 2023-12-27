"use client"

import React, { useState } from "react"

import { MagnifyingGlassIcon } from "@heroicons/react/24/solid"

import {
    AdjustmentsHorizontalIcon,
    ChevronDownIcon
} from "@heroicons/react/24/solid"
import Link from "next/link"

type Inputs = {
    planetName: string
}

function Form() {
    const [value, setValue] = useState("")
    const [filter, setFilter] = useState<"search" | "population">("search")

    return (
        <React.Fragment>
            <div className="px-8 max-lg:pb-8 flex flex-col items-center">
                <p className="text-white text-center text-xl mt-8 max-w-72 max-lg:text-lg max-lg:mt-15">
                    Discover all the information about Planets of the Star Wars
                    Saga
                </p>
                <input
                    className="mt-4 py-2 w-full text-center text-[#7D7D7D] rounded-lg mb-2"
                    type="text"
                    placeholder="Enter the name in the planet"
                    value={value}
                    onChange={({ target }) => setValue(target.value)}
                    onKeyDown={({ key }) => {
                        if (key === "Enter") {
                            window.location.href = `/planet?search=${value}&filter=${filter}`
                        }
                    }}
                />
                <div className="relative w-full">
                    <Link href={`/planet?search=${value}&filter=${filter}`}>
                        <button className="relative bg-[#DE1212] w-full py-2 text-base text-white rounded-xl cursor-pointer">
                            Enviar
                        </button>

                        <MagnifyingGlassIcon
                            width={24}
                            className="absolute top-2 left-28 max-lg:left-20"
                            color="#fff"
                        />
                    </Link>
                </div>
            </div>

            <div className="flex mt-4 justify-center max-lg:mt-0 max-lg:pb-8">
                <span className="text-white flex gap-1 text-sm mr-2">
                    <AdjustmentsHorizontalIcon
                        color="#fff"
                        width={20}
                        height={20}
                    />
                    Filter:
                </span>

                <button
                    className="text-white flex text-sm items-center mr-2"
                    onClick={() => setFilter("search")}
                >
                    {!!(filter === "search") && (
                        <ChevronDownIcon color="#fff" width={16} height={16} />
                    )}
                    Name
                </button>
                <button
                    className="text-white flex text-sm items-center"
                    onClick={() => setFilter("population")}
                >
                    {!!(filter === "population") && (
                        <ChevronDownIcon color="#fff" width={16} height={16} />
                    )}
                    Population
                </button>
            </div>
        </React.Fragment>
    )
}

export { Form }
