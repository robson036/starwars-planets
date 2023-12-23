import { Card, DescriptionItem, DescItemProps } from "@/components"
import Image from "next/image"
import React from "react"

interface CardInfoProps {
    titleInfos: DescItemProps
    list: string[]
}

export default function page() {
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

    return (
        <div className="w-[37rem] mt-14 rounded-xl bg-white mx-auto max-md:w-11/12 p-6">
            <div className="flex max-md:flex-col max-md:gap-4">
                <div className="flex gap-4 items-center w-1/2 max-md:w-full">
                    <Image
                        width={80}
                        height={80}
                        alt="Icon planet"
                        src="/img/planet-icon.png"
                    />
                    <div className="flex flex-col">
                        <span>Planet</span>
                        <strong>TATOOINE</strong>
                    </div>
                </div>
                <div className="flex flex-col w-1/2 max-md:w-full">
                    <DescriptionItem
                        label="Climate"
                        desc="Arid"
                        image="/img/thermometer.png"
                    />

                    <DescriptionItem
                        label="Terrain"
                        desc="Desert"
                        image="/img/mountain.png"
                    />

                    <DescriptionItem
                        label="Population"
                        desc="200000"
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
                    list={[
                        "People 01",
                        "People 02",
                        "People 04",
                        "People 06",
                        "People 07",
                        "People 08",
                        "People 09",
                        "People 11",
                        "People 43",
                        "People 62"
                    ]}
                />

                <CardList
                    titleInfos={{
                        desc: "",
                        image: "/img/movie.png",
                        label: "Films (5)"
                    }}
                    list={[
                        "Films 1",
                        "Films 3",
                        "Films 4",
                        "Films 5",
                        "Films 6"
                    ]}
                />
            </div>
        </div>
    )
}
