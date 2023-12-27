import { ArrowPathIcon } from "@heroicons/react/24/outline"

export default function Loading() {
    return (
        <div className="w-[37rem] mt-14 max-lg:mb-[43rem] rounded-xl bg-white mx-auto max-md:w-11/12 py-12 flex justify-center items-center">
            <ArrowPathIcon
                width={32}
                height={32}
                color="#DE1212"
                className="animate-spin"
            />
        </div>
    )
}
