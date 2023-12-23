"use client"

import React, { useState } from "react"
import { TableResults } from ".."
import { SubmitHandler, useForm } from "react-hook-form"
import { ArrowPathIcon, MagnifyingGlassIcon } from "@heroicons/react/24/solid"

const API_URL = "https://swapi.dev/api"

type Inputs = {
    planetName: string
}

function Form() {
    const [list, setList] = useState([])
    const [loading, setLoading] = useState(false)
    const { register, handleSubmit } = useForm<Inputs>()

    async function fetchPlanets(name: string) {
        try {
            setLoading(true)
            const response = await fetch(`${API_URL}/planets/?search=${name}`)
            const jsonData = await response.json()
            setList(jsonData.results)
        } catch (e) {
            console.error(e)
        } finally {
            setLoading(false)
        }
    }

    const onSubmit: SubmitHandler<Inputs> = (data) =>
        fetchPlanets(data.planetName)

    return (
        <React.Fragment>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="px-8 max-md:pb-8 flex flex-col items-center"
            >
                <p className="text-white text-center text-xl mt-8 max-w-72 max-md:text-lg max-md:mt-15">
                    Discover all the information about Planets of the Star Wars
                    Saga
                </p>
                <input
                    className="mt-4 py-2 w-full text-center text-[#7D7D7D] rounded-lg mb-2"
                    type="text"
                    placeholder="Enter the name in the planet"
                    {...register("planetName")}
                />
                <div className="relative w-full">
                    <input
                        type="submit"
                        value={loading ? "" : "Search"}
                        className="relative bg-[#DE1212] w-full py-2 text-base text-white rounded-xl cursor-pointer"
                    />
                    {!loading && (
                        <MagnifyingGlassIcon
                            width={24}
                            className="absolute top-2 left-28"
                            color="#fff"
                        />
                    )}
                    {loading && (
                        <ArrowPathIcon
                            width={24}
                            className="absolute top-2 left-40 animate-spin"
                            color="#fff"
                        />
                    )}
                </div>
            </form>
            {!!list.length && <TableResults list={list} />}
        </React.Fragment>
    )
}

export { Form }
