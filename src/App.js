import { createContext, useState } from 'react'
import Images from './components/Images'
import Jumbotron from './components/Jumbotron'
import SearchField from './components/SearchField'
import useAxios from './hooks/useAxios';

//Context API
export const ImageContext = createContext()

const App = () => {
  const [searchResult, setSearchResult] = useState("")
  const { error, loading, response, fetchData } = useAxios(`search/photos?page=1&query=Moscow&client_id=${process.env.REACT_APP_ACCESS_KEY}`)
  console.log(response);

  const providerValue = {
    error,
    loading,
    response,
    searchResult,
    fetchData,
    setSearchResult
  }

  return (
    <ImageContext.Provider value={providerValue}>
      <Jumbotron>
        <SearchField />
      </Jumbotron>
      <Images />
    </ImageContext.Provider>
  )
}

export default App