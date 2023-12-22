import Image from "next/image"
import {
    AdjustmentsHorizontalIcon,
    ChevronDownIcon
} from "@heroicons/react/24/solid"

export default function Home() {
    return (
        <div className="w-[50rem] h-[25rem] max-md:h-auto mt-14 rounded-xl bg-black/[.7] mx-auto max-md:w-11/12">
            <div className="h-full flex max-md:flex-col">
                <div className="w-1/2 relative max-md:w-full max-md:h-1/2">
                    <Image
                        src="/img/main-comp-img.jpg"
                        alt="Alien Planet"
                        className="w-full h-full rounded-xl object-cover"
                        width={1000}
                        height={1000}
                    />
                    <Image
                        alt="Spaceship"
                        width={448}
                        height={320}
                        src="/img/spaceship.png"
                        className="absolute left-[-115px] bottom-[-115px] max-md:left-auto max-md:right-[0] max-md:bottom-[-100px] max-md:max-w-[320px] max-md:max-h-[224px]"
                    />
                </div>

                <div className="w-1/2 max-md:w-auto">
                    <form
                        action="planet/terra"
                        className="px-8 max-md:pb-8 flex flex-col items-center"
                    >
                        <p className="text-white text-center text-xl mt-20 max-w-72 max-md:text-lg max-md:mt-15">
                            Discover all the information about Planets of the
                            Star Wars Saga
                        </p>
                        <input
                            className="mt-4 py-2 w-full text-center text-[#7D7D7D] rounded-lg mb-2"
                            type="text"
                            placeholder="Enter the name in the planet"
                        />
                        <input
                            type="submit"
                            value="Search"
                            className="relative bg-[#DE1212] w-full py-2 text-base text-white rounded-xl cursor-pointer"
                        />
                        <div className="flex mt-4">
                            <span className="text-white flex gap-1 text-sm mr-2">
                                <AdjustmentsHorizontalIcon
                                    color="#fff"
                                    width={20}
                                    height={20}
                                />
                                Filter:
                            </span>

                            <span className="text-white flex text-sm items-center mr-2">
                                <ChevronDownIcon
                                    color="#fff"
                                    width={16}
                                    height={16}
                                />
                                Name
                            </span>
                            <span className="text-white flex text-sm items-center">
                                <ChevronDownIcon
                                    color="#fff"
                                    width={16}
                                    height={16}
                                />
                                Population
                            </span>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
