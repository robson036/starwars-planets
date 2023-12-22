import React from "react"

interface CardProps {
    children: React.ReactNode
}

function Card({ children }: CardProps) {
    return <div className="p-4 rounded-lg bg-[#f1f1f1] mb-2">{children}</div>
}

export { Card }
