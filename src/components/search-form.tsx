import { SearchIcon } from "../assets/svgs/search-icon";

export function SearchForm() {
    return (
        <form className="rounded-lg p-2 w-full px-4 py-3 bg-white border border-gray-10 flex items-center lg:w-72">
            <input
                type="search"
                className="flex-1 bg-transparent outline-none placeholder:text-gray-20 placeholder:font-normal"
                placeholder="Pesquisar"
            />
            <SearchIcon className="size-6 text-gray-10" />
        </form>
    )
}