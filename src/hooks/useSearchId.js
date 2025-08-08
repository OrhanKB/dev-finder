export const useSearchId = () => {
    
    const handleClick = async (keyId) => {
        try {
             console.log("id:", keyId);
        } catch(error) {
            console.log("error:", error)
        }
    };
    
    return {
        handleClick
    }
}