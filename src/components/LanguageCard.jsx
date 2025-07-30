function LanguageCard() {
    return(
        <>
<div className="ml-5 cursor-pointer bg-white border-4 hover:translate-x-1
 shadow-md hover:shadow-xl transition-all p-5 w-full max-w-xs flex flex-col items-center text-center">
  {/* Language Icon */}
  <div className="w-24 h-24 mb-4 border-2 border-gray-500 bg-yellow-100 flex items-center justify-center text-4xl">
    💻
  </div>
  
  {/* Language Name */}
  <h2 className="text-lg font-semibold text-gray-800">{"JavaScript"}</h2>
  
  {/* Trending Rank */}
  <p className="text-sm text-gray-500 mb-2">#{"1"} Trending</p>
  
  {/* Growth Indicator */}
  <div className="bg-green-100 text-green-800 text-xs font-semibold px-3 py-1 rounded-full mb-3">
    📈 +{"15"}% this month
  </div>
  
  {/* Language Color Dot */}
  <div className="flex items-center gap-2 mb-3">
    <div className="w-4 h-4 bg-yellow-400 rounded-full border border-gray-300"></div>
    <span className="text-xs text-gray-600">Language Color</span>
  </div>
  
  {/* Stats Section */}
  <div className="bg-gray-200 px-4 py-2 text-sm w-full">
    <p className="font-semibold text-gray-700 mb-1">Usage Stats:</p>
    <div className="text-xs text-gray-600">
      <p>📊 {"1.2M"} repositories</p>
      <p>⭐ {"50M"} total stars</p>
    </div>
  </div>
</div>
        </>
    );
}

export default LanguageCard