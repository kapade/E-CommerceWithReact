import { useEffect, useState } from "react"

const useFetch = (url) => {
    const [data, setData] = useState(null)
    const [isPending, setIsPending] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const abortCont = new AbortController()

        setTimeout(() => {
            fetch(url, { signal: abortCont.signal })
                .then(res => {
                    if (!res.ok) {
                        throw Error('maybe there is a problem')
                    }
                    return res.json()
                })
                .then(data => {
                    setData(data)
                    setIsPending(false)
                    setError(null)
                })
                .catch(e => {
                    if (e.name === 'AbortError') {
                        console.log('fetch aborted')
                    }
                    else {
                        setIsPending(false)
                        setError(e.message)
                    }
                })
        }, 2000)

        return () => abortCont.abort()

    }, [url])

    return { data, isPending, error }
}

export default useFetch