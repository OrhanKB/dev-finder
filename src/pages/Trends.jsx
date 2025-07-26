import { Symbols } from "../assets/symbols";
import Button from "../components/Button";

function Trends() {
    return(
        <>
        <section className=" font-mono flex flex-col justify-center items-center gap-y-10 h-40 bg-gray-800">
            <div className="text-3xl text-white"> {Symbols.trend} Github Trends </div>
            <div className="space-x-5">
                <Button width="w-30" title="Repositories"/>
                <Button width="w-30" title="Developers" />
                <Button width="w-30" title="Languages" />
            </div>
        </section>

        <section className="grid grid-cols-4 gap-y-7 gap-x-5 bg-gray-300 px-10 py-10">

            <div className="ml-5 cursor-pointer bg-white border-4 hover:translate-x-1 shadow-md hover:shadow-xl transition-all p-5 w-full max-w-xs flex flex-col items-center text-center">
              <img
                src={"https://picsum.photos/200"}
                alt={""}
                className="w-24 h-24  mb-4 border-2 border-gray-500"
              />
              <h2 className="text-lg font-semibold text-gray-800">{"anayın"}</h2>
              <p className="text-sm text-gray-500 mb-2">@{"ahmad"}</p>

              <a
                href={""}
                target="_blank"
                className="text-blue-500 text-sm underline mb-3"
              >
                View GitHub Profile
              </a>

              <div className="bg-gray-200  px-4 py-2 text-sm w-full">
                <p className="font-semibold text-gray-700">Top Repo:</p>
                <p className="text-gray-600 truncate">{"örnek bir repo"}</p>
                <div className="flex justify-center gap-4 mt-1 text-xs text-gray-500">
                  <span>⭐ {31}</span>
                  <span>🍴 {69}</span>
                </div>
              </div>
            </div>

            <div className="ml-5 cursor-pointer bg-white border-4 hover:translate-x-1 shadow-md hover:shadow-xl transition-all p-5 w-full max-w-xs flex flex-col items-center text-center">
              <img
                src={"https://picsum.photos/200"}
                alt={""}
                className="w-24 h-24  mb-4 border-2 border-gray-500"
              />
              <h2 className="text-lg font-semibold text-gray-800">{"anayın"}</h2>
              <p className="text-sm text-gray-500 mb-2">@{"ahmad"}</p>

              <a
                href={""}
                target="_blank"
                className="text-blue-500 text-sm underline mb-3"
              >
                View GitHub Profile
              </a>

              <div className="bg-gray-200  px-4 py-2 text-sm w-full">
                <p className="font-semibold text-gray-700">Top Repo:</p>
                <p className="text-gray-600 truncate">{"örnek bir repo"}</p>
                <div className="flex justify-center gap-4 mt-1 text-xs text-gray-500">
                  <span>⭐ {31}</span>
                  <span>🍴 {69}</span>
                </div>
              </div>
            </div>

            <div className="ml-5 cursor-pointer bg-white border-4 hover:translate-x-1 shadow-md  hover:shadow-xl transition-all p-5 w-full max-w-xs flex flex-col items-center text-center">
              <img
                src={"https://picsum.photos/200"}
                alt={""}
                className="w-24 h-24  mb-4 border-2 border-gray-500"
              />
              <h2 className="text-lg font-semibold text-gray-800">{"anayın"}</h2>
              <p className="text-sm text-gray-500 mb-2">@{"ahmad"}</p>

              <a
                href={""}
                target="_blank"
                className="text-blue-500 text-sm underline mb-3"
              >
                View GitHub Profile
              </a>

              <div className="bg-gray-200  px-4 py-2 text-sm w-full">
                <p className="font-semibold text-gray-700">Top Repo:</p>
                <p className="text-gray-600 truncate">{"örnek bir repo"}</p>
                <div className="flex justify-center gap-4 mt-1 text-xs text-gray-500">
                  <span>⭐ {31}</span>
                  <span>🍴 {69}</span>
                </div>
              </div>
            </div>

            <div className="ml-5 cursor-pointer bg-white border-4 hover:translate-x-1 shadow-md hover:shadow-xl transition-all p-5 w-full max-w-xs flex flex-col items-center text-center">
              <img
                src={"https://picsum.photos/200"}
                alt={""}
                className="w-24 h-24  mb-4 border-2 border-gray-500"
              />
              <h2 className="text-lg font-semibold text-gray-800">{"anayın"}</h2>
              <p className="text-sm text-gray-500 mb-2">@{"ahmad"}</p>

              <a
                href={""}
                target="_blank"
                className="text-blue-500 text-sm underline mb-3"
              >
                View GitHub Profile
              </a>

              <div className="bg-gray-200  px-4 py-2 text-sm w-full">
                <p className="font-semibold text-gray-700">Top Repo:</p>
                <p className="text-gray-600 truncate">{"örnek bir repo"}</p>
                <div className="flex justify-center gap-4 mt-1 text-xs text-gray-500">
                  <span>⭐ {31}</span>
                  <span>🍴 {69}</span>
                </div>
              </div>
            </div>

            <div className="ml-5 cursor-pointer bg-white border-4 hover:translate-x-1 shadow-md hover:shadow-xl transition-all p-5 w-full max-w-xs flex flex-col items-center text-center">
              <img
                src={"https://picsum.photos/200"}
                alt={""}
                className="w-24 h-24  mb-4 border-2 border-gray-500"
              />
              <h2 className="text-lg font-semibold text-gray-800">{"anayın"}</h2>
              <p className="text-sm text-gray-500 mb-2">@{"ahmad"}</p>

              <a
                href={""}
                target="_blank"
                className="text-blue-500 text-sm underline mb-3"
              >
                View GitHub Profile
              </a>

              <div className="bg-gray-200  px-4 py-2 text-sm w-full">
                <p className="font-semibold text-gray-700">Top Repo:</p>
                <p className="text-gray-600 truncate">{"örnek bir repo"}</p>
                <div className="flex justify-center gap-4 mt-1 text-xs text-gray-500">
                  <span>⭐ {31}</span>
                  <span>🍴 {69}</span>
                </div>
              </div>
            </div>

            <div className="ml-5 cursor-pointer bg-white border-4 hover:translate-x-1 shadow-md hover:shadow-xl transition-all p-5 w-full max-w-xs flex flex-col items-center text-center">
              <img
                src={"https://picsum.photos/200"}
                alt={""}
                className="w-24 h-24  mb-4 border-2 border-gray-500"
              />
              <h2 className="text-lg font-semibold text-gray-800">{"anayın"}</h2>
              <p className="text-sm text-gray-500 mb-2">@{"ahmad"}</p>

              <a
                href={""}
                target="_blank"
                className="text-blue-500 text-sm underline mb-3"
              >
                View GitHub Profile
              </a>

              <div className="bg-yellow-100 text-yellow-800 text-xs font-semibold px-3 py-1 rounded-full mb-3">
                    Most used: {"Javascript"}
              </div>

              <div className="bg-gray-200  px-4 py-2 text-sm w-full">
                <p className="font-semibold text-gray-700">Top Repo:</p>
                <p className="text-gray-600 truncate">{"örnek bir repo"}</p>
                <div className="flex justify-center gap-4 mt-1 text-xs text-gray-500">
                  <span>⭐ {31}</span>
                  <span>🍴 {69}</span>
                </div>
              </div>
            </div>
        </section>
        </>
    );
}

export default Trends