import { useEffect } from "react"

const useSetTitle = title => {
    useEffect(() => {
        document.title = `Magic Photographer - ${title}`
    }, [title]);
};

export default useSetTitle