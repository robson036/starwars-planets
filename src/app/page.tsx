import { Form } from "@/components"

import Image from "next/image"

export default function Home() {
    return (
        <div className="w-[50rem] h-[25rem] max-lg:h-auto mt-14 max-lg:mt-10 max-lg:mb-80 rounded-xl bg-black/[.7] mx-auto max-lg:w-11/12 max-lg:max-w-80">
            <div className="h-full flex max-lg:flex-col">
                <div className="w-1/2 relative max-lg:w-full max-lg:h-1/2">
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
                        className="absolute left-[-115px] bottom-[-115px] max-lg:left-auto max-lg:right-[0] max-lg:bottom-[-70px] max-lg:max-w-[235px] max-lg:max-h-[224px]"
                    />
                </div>

                <div className="w-1/2 max-lg:w-auto">
                    <Form />
                </div>
            </div>
        </div>
    )
}
