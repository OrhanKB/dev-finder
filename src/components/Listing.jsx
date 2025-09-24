
import { useSearchId } from "../hooks/useSearchId";

function Listing({title, items, symbol, spanSymbol ,getDisplayValue}) {

        const {handleClick} = useSearchId();

    return(
        <>
            <div className="text-3xl px-10 py-5" >
                <h3>{symbol} {title}</h3>
                <hr className="w-90" />
                <div className="flex flex-col text-xl gap-3 py-4">
                    {
                    items.map((item) =>             
                        <div className="px-2 relative cursor-pointer border-2 transition
                         duration-250 ease hover:scale-120 hover:bg-gray-800 hover:text-white" key={item.id}
                          onClick={() => handleClick(item.name, item.id, item.__typename)} >
                             {item.name}
                             <span className="absolute right-4 text-base top-0.5"> 
                               {getDisplayValue(item)}
                               {spanSymbol}
                             </span>
                        </div>
                     )
                    }
                </div>
            </div>
        </>
    );
}

export default Listing