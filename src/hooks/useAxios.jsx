import axios from 'axios'
import { useEffect, useState } from 'react'

const useAxios = (param) => {
    const [response, setResponse] = useState([])
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)

    axios.defaults.baseURL = "https://api.unsplash.com"

    const fetchData = async (url) => {
        try {
            setLoading(true)
            const res = await axios(url)
            setResponse(res.data.results)
        } catch (err) {
            setError(err)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchData(param)
    }, [param])

    return {
        response,
        error,
        loading,
        fetchData: url => fetchData(url)
    }
}

export default useAxios