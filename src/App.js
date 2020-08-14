import React, { useState, useEffect } from 'react';
import './style.css'
import PokemonList from './PokemonList';
import axios from 'axios';
import Pagination from './Pagination'


function App() {
  const [pokemon, setPokemeon] = useState([])
  const [pokemonMoves, setPokemeonMoves] = useState()
  const [currentPageUrl, setCurrentPageUrl] = useState("https://pokeapi.co/api/v2/pokemon?limit=151")
  const [nextPageUrl, setNextPageUrl] = useState()
  const [previousPageUrl, setPreviousPageUrl] = useState()
  const [loading, setLoading] = useState(true)
  
  useEffect(() => {
    setLoading(true)
    let cancel
    axios.get(currentPageUrl, {
      cancelToken: new axios.CancelToken(c => cancel = c)
    }).then(res => {
      setLoading(false)
      setNextPageUrl(res.data.next)
      setPreviousPageUrl(res.data.previous)
      setPokemeon(res.data.results.map(p => p.name))
      setPokemeonMoves()
      console.log("test" + res.data.results.map(p => p.move))
    })

    return () => cancel()
  }, [currentPageUrl])

  function gotoNextPage() {
    setCurrentPageUrl(nextPageUrl)
  }

  function gotoPrevPage() {
    setCurrentPageUrl(previousPageUrl)
  }

  if (loading) return "Loading..."

  return (
    <>
      <Pagination 
        gotoNextPage={nextPageUrl ? gotoNextPage : null}
        gotoPrevPage={previousPageUrl ? gotoPrevPage : null}
      />
      <PokemonList 
        pokemon={pokemon}
        pokemonMoves={pokemonMoves}
      />
      <Pagination 
        gotoNextPage={nextPageUrl ? gotoNextPage : null}
        gotoPrevPage={previousPageUrl ? gotoPrevPage : null}
      />
    </>
  );
}

export default App;
