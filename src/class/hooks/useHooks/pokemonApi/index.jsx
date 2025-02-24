import { useState, useEffect } from "react"

export default function PokemonApi() {
  const [pokemons, setPokemons] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=10')
    .then((res) => res.json())
    .then((data) => {
      setPokemons(data.results)
      setLoading(false)
    })
    .catch((error) => {
      setError(error.message)
      setLoading(false)
    })
  },[])

  if (loading) {
    return <p>Carregando...</p>
  }

  if (error) {
    return <p>Error: {error}</p>
  }

  return (
      <div>
        <h1>Lista de Pokemon</h1>
        <ul>
          {
            pokemons.map((pokemon, i) => 
              <div key={i}>
              <li>{pokemon.name}</li>
              <li>{pokemon.url}</li>
              </div>
            )
          }
        </ul>
      </div>
)
}