function MenuButton() {
    return (<>

        <div className="cursor-pointer hidden flex-row md:flex">
            <div className="space-y-1 pl-0 pt-2 pr-2">
                {[0, 1, 2].map((i) => <span key={i} className="block font-bold ti w-3 h-[1.5px] bg-primary"></span>)}
            </div>

            <div className="text-primary text-md pt-1">카테고리</div>
        </div>
        {/* <div
            className="HAMBURGER-ICON space-y-2"
          >
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
          </div> */}
    </>);
}

export default MenuButton;