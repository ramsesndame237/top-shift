const SearchInputWidget = () => {
    return(
        <div className={'w-full h-full  flex gap-2 items-center justify-center'}>
            <input type="text" className={'flex-grow rounded-full h-full  px-5 text-gray-300 outline-0'} placeholder={'Search'}/>
            <button className="size-9 md:size-12 bg-secondary rounded-full flex items-center justify-center">
                <img src="/static/icons/search-normal.svg" alt=""/>
            </button>
        </div>
    )
}
export default SearchInputWidget;