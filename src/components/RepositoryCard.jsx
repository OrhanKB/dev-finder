function RepositoryCard({items}) {

  console.log("items in respositorycard:", items);

    return(
        <>
<div className="ml-5 cursor-pointer bg-white border-4 hover:translate-x-1 shadow-md hover:shadow-xl transition-all p-5 w-full max-w-xs flex flex-col items-center text-center">
  
      <img
        src={"https://picsum.photos/200"}
        alt={""}
        className="w-24 h-24  mb-4 border-2 border-gray-500"
      />
      <h2 className="text-lg font-semibold text-gray-800">{"anayın"}</h2>
      <p className="text-sm text-gray-500 mb-2">@{"ahmad"}</p>

  {/* Description */}
  <p className="text-xs text-gray-600 mb-3 line-clamp-2 px-2">
    {"The library for web and native user interfaces"}
  </p>
  
  {/* Language Badge */}
  <div className="bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full mb-3">
    {"JavaScript"}
  </div>
  
  {/* GitHub Link */}
  <a
    href={""}
    target="_blank"
    className="text-blue-500 text-sm underline mb-3"
  >
    View Repository
  </a>
  
  {/* Stats Section */}
  <div className="bg-gray-200 px-4 py-2 text-sm w-full">
    <div className="flex justify-center gap-4 mb-1 text-xs text-gray-500">
      <span>⭐ {"220K"}</span>
      <span>🍴 {"45K"}</span>
    </div>
    <p className="text-xs text-gray-500 text-center">{"Updated 2 days ago"}</p>
  </div>
</div>
        </>
    );
}

export default RepositoryCard