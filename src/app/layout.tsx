import type { Metadata } from "next"
import { Montserrat } from "next/font/google"
import "./globals.css"

const montserrat = Montserrat({ subsets: ["latin"] })

import Image from "next/image"

export const metadata: Metadata = {
    title: "Star Wars Planet Search",
    description:
        "Search Star Wars planets by name and read their full description"
}

export default function RootLayout({
    children
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className={montserrat.className}>
                <main className="bg-main bg-no-repeat max-md:bg-right-top">
                    <div className="flex flex-col gap-4 items-center pt-16 mx-auto w-fit">
                        <h2 className="uppercase text-white text-base">
                            Planet search
                        </h2>
                        <Image
                            src="/img/main-logo.png"
                            alt="Star Wars"
                            width={321}
                            height={143}
                            className="max-md:w-[208px]"
                        />
                    </div>
                    {children}
                </main>
                <footer className="w-full py-6 h-20 bg-white flex justify-center fixed bottom-0 left-0">
                    <div className="flex">
                        <div className="pr-12 max-md:hidden">
                            <span>
                                STARUARS LTDA | CNPJ: 77.777.777/0007-07 | 2023
                                | Todos os direitos reservados
                            </span>
                        </div>
                        <div className="w-[1px] h-full bg-black max-md:hidden"></div>
                        <div className="pl-12 max-md:p-0">
                            <Image
                                alt="Logo"
                                src="/img/logo-footer.png"
                                width={84}
                                height={37.547}
                            />
                        </div>
                    </div>
                </footer>
            </body>
        </html>
    )
}
