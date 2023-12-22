import Image from "next/image"

export default function Home() {
    return (
        <div className="w-[50rem] h-[25rem] mt-14 rounded-xl bg-black/[.7] mx-auto max-md:w-11/12">
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
                        className="absolute left-[-115px] bottom-[-115px] max-md:left-auto max-md:right-[0] max-md:bottom-[-100px]"
                    />
                </div>

                <div className="w-1/2">
                    <form action="" className="px-8 flex flex-col items-center">
                        <p className="text-white text-center text-xl mt-20 max-w-72">
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
                            className="relative bg-[#DE1212] w-full py-2 text-base text-white rounded-xl"
                        />
                    </form>
                </div>
            </div>
        </div>
    )
}
