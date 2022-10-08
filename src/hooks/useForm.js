import { useState } from "react"


export default function useForm(pages) {
    const maxPages = pages.length
    const [currentPageIndex, setCurrentPageIndex] = useState(0);

    function next() {
        if (currentPageIndex < maxPages - 1) setCurrentPageIndex(currentPageIndex + 1)
    }
    function back() {
        if (currentPageIndex > 0) setCurrentPageIndex(currentPageIndex + 1)
    }

    return {
        index: currentPageIndex,
        page: pages[currentPageIndex],
        maxPages,
        next,
        back,
    }
}
