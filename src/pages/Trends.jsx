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

        <section>
            
        </section>
        </>
    );
}

export default Trends