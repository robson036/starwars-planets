import Image from "next/image"

export interface DescItemProps {
    label: string
    desc: string
    image: string
}

function DescriptionItem({ desc, image, label }: DescItemProps) {
    return (
        <div className="flex gap-2 mb-2 items-center">
            <Image
                width={20}
                height={20}
                alt={label}
                src={image}
                className="object-contain"
            />
            <span>
                <b>{label}: </b>
                {desc}
            </span>
        </div>
    )
}

export { DescriptionItem }
