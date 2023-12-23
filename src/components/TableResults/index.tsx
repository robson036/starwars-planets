import {
    AdjustmentsHorizontalIcon,
    ChevronDownIcon
} from "@heroicons/react/24/solid"

import { PaperAirplaneIcon } from "@heroicons/react/24/outline"
import Link from "next/link"

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

                <span className="text-white flex text-sm items-center mr-2">
                    <ChevronDownIcon color="#fff" width={16} height={16} />
                    Name
                </span>
                <span className="text-white flex text-sm items-center">
                    <ChevronDownIcon color="#fff" width={16} height={16} />
                    Population
                </span>
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
                    {list.map((e, i) => (
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
