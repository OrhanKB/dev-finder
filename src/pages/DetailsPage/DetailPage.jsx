import DeveloperDetailCard from "../../components/DeveloperDetailCard"
import RepositoryCardDetail from "../../components/RepositoryDetailCard"
import { useLocation } from "react-router"
import { useSearchIdContext } from "../../contexts/context";


function DetailPage() {
  const location = useLocation();
  const pathName =  location.pathname.split("/")[1];
  
   const {id} = useSearchIdContext();
   
  
  
  return (
    <>
    {pathName === "developer" && <DeveloperDetailCard item={id}/>} 
    {pathName === "repository" && <RepositoryCardDetail />}
    </>
  )
}

export default DetailPage