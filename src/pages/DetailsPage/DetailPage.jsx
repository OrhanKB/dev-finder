import DeveloperDetailCard from "../../components/DeveloperDetailCard"
import RepositoryCardDetail from "../../components/RepositoryDetailCard"
import { useLocation } from "react-router"
import { useSearchIdContext } from "../../contexts/context";
import { useEffect } from "react";


function DetailPage() {
  const location = useLocation();
  const pathName =  location.pathname.split("/")[1];
  
   const {id, setId} = useSearchIdContext();
  
  
  return (
    <>
    {pathName === "developer" && <DeveloperDetailCard item={id}/>} 
    {pathName === "repository" && <RepositoryCardDetail />}
    </>
  )
}

export default DetailPage