import React from 'react'

export default function PokemonList({pokemon, pokemonMoves}) {
    return (
        <div className="pokedex">
            {pokemon.map(p => (
                console.log(p),
                <div className="pokemon" key={p}>
                    <p className="name">{p}</p>
                    <img src={"http://img.pokemondb.net/sprites/home/normal/" + p + ".png"}
                        className="sprite" key={p} alt={p}/>
                </div>  
            ))}
            
            {/*pokemonMoves.map(p => (
                console.log(p)
                <div className="moves" key={p}>
                    <p className="move-name" key={p}>{p}</p>
                </div>
            ))*/}
            
        </div>
    )
}

