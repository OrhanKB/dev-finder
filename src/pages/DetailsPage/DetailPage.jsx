import DeveloperDetailCard from "../../components/DeveloperDetailCard"
import RepositoryCardDetail from "../../components/RepositoryDetailCard"
import { useLocation } from "react-router"
import { useSearchIdContext } from "../../contexts/context";
import GoBackButton from "../../components/GoBackButton";

function DetailPage() {
  const location = useLocation();
  const pathName =  location.pathname.split("/")[1];
  
   const {id, setId} = useSearchIdContext();
  
  
  return (
    <>
    <div className="grid grid-cols-[1fr_8fr_1fr] w-full gap-2">
    <div className="flex justify-center">
      <GoBackButton />
    </div>

    <div className="flex justify-self-center">
    {pathName === "developer" && <DeveloperDetailCard item={id}/>} 
    {pathName === "repository" && <RepositoryCardDetail  item={id}/>}
    </div>

    <div></div>
    

    </div>
    </>
  )
}

export default DetailPage