"use client"

import { useState } from "react"
import classNames from "classnames"

import { CheckCircleIcon, XCircleIcon } from "@heroicons/react/24/outline"

interface PlanetNameProps {
    name: string
}

export default function PlanetName({ name }: PlanetNameProps) {
    const [newName, setNewName] = useState(name)
    const [enableField, setEnableField] = useState(false)

    return (
        <>
            <strong
                title="Click to edit"
                className={classNames({
                    "cursor-pointer": true,
                    hidden: enableField,
                    block: !enableField
                })}
                onClick={() => setEnableField(!enableField)}
            >
                {newName}
            </strong>
            <div
                className={classNames({
                    hidden: !enableField,
                    block: enableField,
                    flex: true
                })}
            >
                <input
                    value={newName}
                    onChange={({ target }) => setNewName(target.value)}
                    className={classNames({
                        "max-w-28": true,
                        border: true,
                        "rounded-md": true,
                        "outline-none": true
                    })}
                    onKeyDown={({ key }) => {
                        if (key === "Enter") {
                            setEnableField(false)
                        }
                    }}
                />

                <button>
                    <CheckCircleIcon
                        width={20}
                        color="#333"
                        onClick={() => setEnableField(false)}
                    />
                </button>
                <button>
                    <XCircleIcon
                        width={20}
                        color="#333"
                        onClick={() => {
                            setEnableField(false)
                            setNewName(name)
                        }}
                    />
                </button>
            </div>
        </>
    )
}
