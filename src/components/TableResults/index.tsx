"use client"

import {
    AdjustmentsHorizontalIcon,
    ChevronDownIcon
} from "@heroicons/react/24/solid"

import { PaperAirplaneIcon } from "@heroicons/react/24/outline"
import Link from "next/link"
import { useState } from "react"
import classNames from "classnames"

export interface ListItem {
    name: string
    rotation_period: string
    orbital_period: string
    diameter: string
    climate: string
    gravity: string
    terrain: string
    surface_water: string
    population: string
    residents: string[]
    films: string[]
    created: string
    edited: string
    url: string
}

interface TableResultsProps {
    list: ListItem[]
}

function TableResults({ list }: TableResultsProps) {
    const [sortList, setSortList] = useState(list)
    const [orderName, setOrderName] = useState("asc")
    const [orderPop, setOrderPop] = useState("asc")

    function orderByName(planets: ListItem[], ordem: "asc" | "desc") {
        return planets.sort((a, b) => {
            const nameA = a.name.toLowerCase()
            const nameB = b.name.toLowerCase()

            let compare = 0
            if (nameA < nameB) {
                compare = -1
            } else if (nameA > nameB) {
                compare = 1
            }

            return ordem === "desc" ? compare * -1 : compare
        })
    }

    function orderByPopulation(planets: ListItem[], ordem: "asc" | "desc") {
        return planets.sort((a, b) => {
            const popA = Number(a.population === "unknown" ? 0 : a.population)
            const popB = Number(b.population === "unknown" ? 0 : b.population)

            let compare = 0
            if (popA < popB) {
                compare = -1
            } else if (popA > popB) {
                compare = 1
            }

            return ordem === "desc" ? compare * -1 : compare
        })
    }

    return (
        <div className="px-8 max-md:pb-8">
            <div className="flex mt-4 justify-center">
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
                    onClick={() => {
                        if (orderName === "asc") {
                            setOrderName("desc")
                            setSortList(orderByName(sortList, "desc"))
                        } else {
                            setOrderName("asc")
                            setSortList(orderByName(sortList, "asc"))
                        }
                    }}
                >
                    <ChevronDownIcon
                        color="#fff"
                        width={16}
                        height={16}
                        className={classNames({
                            "transition-all": true,
                            "rotate-180": orderName === "desc",
                            "rotate-0": orderName === "asc"
                        })}
                    />
                    Name
                </button>
                <button
                    className="text-white flex text-sm items-center"
                    onClick={() => {
                        if (orderPop === "asc") {
                            setOrderPop("desc")
                            setSortList(orderByPopulation(sortList, "desc"))
                        } else {
                            setOrderPop("asc")
                            setSortList(orderByPopulation(sortList, "asc"))
                        }
                    }}
                >
                    <ChevronDownIcon
                        color="#fff"
                        width={16}
                        height={16}
                        className={classNames({
                            "transition-all": true,
                            "rotate-180": orderPop === "desc",
                            "rotate-0": orderPop === "asc"
                        })}
                    />
                    Population
                </button>
            </div>

            <table className="mt-5 w-full text-slate-50">
                <thead>
                    <tr>
                        <th align="left">Name</th>
                        <th align="center">Population</th>
                        <th align="right">Details</th>
                    </tr>
                </thead>
                <tbody>
                    {sortList.map((e, i) => (
                        <tr key={i}>
                            <td align="left">{e.name}</td>
                            <td align="center">{e.population}</td>
                            <td align="right">
                                <Link
                                    href={`/planet/${
                                        e.url.split("/planets/")[1]
                                    }`}
                                >
                                    <PaperAirplaneIcon
                                        color="#fff"
                                        width={16}
                                    />
                                </Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export { TableResults }
