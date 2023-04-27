import ProductModel from './pokemon.schema'
import { ProductType } from './types/pokemon.types'
import { writeFile, readFile } from 'fs/promises'

declare const fetch:any

export class ProductService {

    async create(){
        const listaPokemon  = await fetch('http://localhost:3000/pokemons-data')

        return listaPokemon.json().then(resolve => {
            writeFile('pokeUrl.json', JSON.stringify(resolve, null, 2))
        })

    }
    
    async listPokes() {

        const urlListPokes = JSON.parse(await readFile('pokeUrl.json', "utf-8"))


        const listaPokemon = urlListPokes.map(async (pokemon) => {
    

            
            
            const pokeType = pokemon.types.map(typeIn => {
                return typeIn.type.name
            })

            const pokeStat = pokemon.stats.map((statAtual) => {
                return {
                    statName: statAtual.stat.name,
                    value: statAtual.base_stat,
                }
            })
           



            const PokemonsLista = {
                name: pokemon.forms[0].name,
                type: pokeType,
                stats: pokeStat,
                dex: pokemon.game_indices[9].game_index,
                height: pokemon.height,
                weight: pokemon.weight,
                version: pokemon.game_indices[9].version.name,
               
               

            }

            return PokemonsLista
        })


        const listaPokemonsCerta = await Promise.all(listaPokemon)
        
        writeFile('pokedex.json', JSON.stringify(listaPokemonsCerta, null, 2))

        const pokemonCriado = await ProductModel.create(listaPokemonsCerta)


        return pokemonCriado

    }
}
