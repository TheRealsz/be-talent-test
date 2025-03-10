import { SearchIcon } from "../assets/svgs/search-icon";

interface ISearchForm {
    setSearch: (search: string) => void;
    search: string;
}

export function SearchForm({ search, setSearch }: ISearchForm) {

    return (
        <form className="rounded-lg p-2 w-full px-4 py-3 bg-white border border-gray-10 flex items-center lg:w-72">
            <input
                type="search"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                className="flex-1 bg-transparent outline-none placeholder:text-gray-20 placeholder:font-normal"
                placeholder="Pesquisar"
            />
            <SearchIcon className="size-6 text-gray-10" />
        </form>
    )
}