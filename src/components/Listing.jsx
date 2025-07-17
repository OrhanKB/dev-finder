function Listing({title, items, symbol}) {
    return(
        <>
            <div className="text-3xl px-10 py-5">
                <h3>{symbol} {title}</h3>
                <hr className="w-90" />
                <div className="flex flex-col text-xl gap-3 py-4">
                    {items.map(item => 
                    <div key={item} className="px-2 cursor-pointer border-2 transition duration-250 ease hover:scale-120 hover:bg-gray-800 hover:text-white">
                        {item}
                    </div>
                    )}

                </div>
            </div>
 
        </>
    );
}

export default Listing