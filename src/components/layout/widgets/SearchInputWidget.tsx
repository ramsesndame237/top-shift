const SearchInputWidget = () => {
    return(
        <div className={'w-full flex gap-2'}>
            <input type="text" className={'flex-grow rounded-full px-5 text-gray-300 outline-0'} placeholder={'Search'}/>
            <button className="size-9 bg-secondary rounded-full flex items-center justify-center">
                <img src="/static/icons/search-normal.svg" alt=""/>
            </button>
        </div>
    )
}
export default SearchInputWidget;