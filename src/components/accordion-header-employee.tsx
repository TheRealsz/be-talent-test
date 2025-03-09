export function AccordionHeaderEmployee() {
    return (
        <header className="w-full flex items-center p-3.5 bg-primary shadow-1 justify-between lg:hidden">
            <div className="flex items-center gap-6">
                <span className="text-white font-helvetica">
                    FOTO
                </span>
                <span className="text-white font-helvetica">
                    NOME
                </span>
            </div>
            <div className="w-2 h-2 rounded-full bg-white" />
        </header>
    )
}