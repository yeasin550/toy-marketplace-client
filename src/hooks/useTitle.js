import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `${title} - CarToys`;

    }, [title])
};
export default useTitle;