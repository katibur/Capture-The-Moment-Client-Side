import { useEffect } from "react";

const useTtile = (title) => {
    useEffect(() => {
        document.title = title;
    }, [title])
}

export default useTtile;