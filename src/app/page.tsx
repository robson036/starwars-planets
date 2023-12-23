import { Form } from "@/components"

import Image from "next/image"

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

                <div className="w-1/2 max-md:w-auto overflow-y-scroll">
                    <Form />
                </div>
            </div>
        </div>
    )
}
