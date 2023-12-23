import { Card, DescriptionItem, DescItemProps, ListItem } from "@/components"
import { getPlanetImage } from "@/utils/planets"
import Image from "next/image"
import React from "react"

const API_URL = "https://swapi.dev/api"

interface CardInfoProps {
    titleInfos: DescItemProps
    list: string[]
}

export default async function page({ params }: { params: { id: string } }) {
    const res = await fetch(`${API_URL}/planets/${params.id}`)
    const data: ListItem = await res.json()

    const CardList = ({ titleInfos, list }: CardInfoProps) => (
        <Card>
            <DescriptionItem
                label={titleInfos.label}
                desc={titleInfos.desc}
                image={titleInfos.image}
            />
            <div className="h-[1px] bg-[#909090] w-full mb-4"></div>
            {list.map((e, i) => (
                <span key={i}>
                    {e}
                    {i < list.length - 1 ? ", " : "."}
                </span>
            ))}
        </Card>
    )

    const fetchGroup = async (list: string[]) => {
        return await Promise.all(
            list.map(async (e) => {
                const response = await fetch(e)
                return await response.json()
            })
        )
    }

    return (
        <div className="w-[37rem] mt-14 rounded-xl bg-white mx-auto max-md:w-11/12 p-6">
            <div className="flex max-md:flex-col max-md:gap-4">
                <div className="flex gap-4 items-center w-1/2 max-md:w-full">
                    <Image
                        width={80}
                        height={80}
                        alt="Icon planet"
                        src={getPlanetImage(data.name.toLowerCase())}
                    />
                    <div className="flex flex-col">
                        <span>Planet</span>
                        <strong>{data.name}</strong>
                    </div>
                </div>
                <div className="flex flex-col w-1/2 max-md:w-full">
                    <DescriptionItem
                        label="Climate"
                        desc={data.climate}
                        image="/img/thermometer.png"
                    />

                    <DescriptionItem
                        label="Terrain"
                        desc={data.terrain}
                        image="/img/mountain.png"
                    />

                    <DescriptionItem
                        label="Population"
                        desc={data.population}
                        image="/img/people.png"
                    />
                </div>
            </div>
            <div className="mt-6">
                <CardList
                    titleInfos={{
                        desc: "",
                        image: "/img/user.png",
                        label: "Residents"
                    }}
                    list={(await fetchGroup(data.residents)).map((e) => e.name)}
                />

                <CardList
                    titleInfos={{
                        desc: "",
                        image: "/img/movie.png",
                        label: "Films (5)"
                    }}
                    list={(await fetchGroup(data.films)).map((e) => e.title)}
                />
            </div>
        </div>
    )
}
