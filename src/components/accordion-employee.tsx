import { useState } from "react";
import { ChevronUpIcon } from "../assets/svgs/chevron-up-icon";
import { ChevronDownIcon } from "../assets/svgs/chevron-down-icon";
import { IEmployee } from "../types/employee";
import { formatDate } from "../utils/formatDate";
import { formatPhone } from "../utils/formatPhone";

export function AccordionEmployee({ name, admission_date, id, image, job, phone }: IEmployee) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <details
            open={isOpen}
            onToggle={() => setIsOpen(!isOpen)}
            className="w-full bg-white shadow-1"
            name={`accordion-${id}`}
        >
            <summary className="flex items-center justify-between py-3.5 px-4 cursor-pointer shadow-1">
                <div className="flex gap-6 items-center">
                    <img
                        src={image}
                        alt="Foto do funcionário"
                        className="size-8 rounded-full"
                    />
                    <span className="text-black-neutral font-roboto">{name}</span>
                </div>
                {isOpen ? (
                    <ChevronUpIcon className="size-6 text-black-neutral" />
                ) : (
                    <ChevronDownIcon className="size-6 text-black-neutral" />
                )}
            </summary>
            <div className="p-4 bg-white shadow-1 flex flex-col gap-4">
                <div className="flex justify-between w-full border-b border-gray-10 border-dashed">
                    <span className="font-helvetica">
                        Cargo
                    </span>
                    <span className="font-roboto">
                        {job}
                    </span>
                </div>
                <div className="flex justify-between w-full border-b border-gray-10 border-dashed">
                    <span className="font-helvetica">
                        Data de admissão
                    </span>
                    <span className="font-roboto">
                        {formatDate(admission_date)}
                    </span>
                </div>
                <div className="flex justify-between w-full border-b border-gray-10 border-dashed">
                    <span className="font-helvetica">
                        Telefone
                    </span>
                    <span className="font-roboto">
                        {formatPhone(phone)}
                    </span>
                </div>
            </div>
        </details>
    );
}
