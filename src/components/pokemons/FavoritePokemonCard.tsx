import type { FavoritePokemon } from "@interfaces/favorite-pokemon";
import { createSignal, Show, type Component } from "solid-js";

interface Props {
    pokemon: FavoritePokemon;
}

export const FavoritePokemonCard: Component<Props> = ({pokemon})=>{
    const [visible, setVisible] = createSignal(true)
    const imgSrc=`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`
    const deleteFavorite = ()=>{
        const favorites = JSON.parse(localStorage.getItem("favorites") ?? "[]") as FavoritePokemon[];
        const newFavorites = favorites.filter(poke => poke.id !== pokemon.id);
        localStorage.setItem("favorites", JSON.stringify(newFavorites));
        setVisible(false);
    }
    return (
        <Show when={visible()}>
            <div class="flex flex-col justify-center items-center gap-2">
                <a href={`/pokemons/${pokemon.name}`} class="flex flex-col items-center">
                    <img 
                        src={imgSrc} 
                        alt={`${pokemon.name}-image`} 
                        width="96"
                        height="96"
                        style={`view-transition-name: ${pokemon.name}-image`}
                    />
                    <p class="capitalize">#{pokemon.id} {pokemon.name}</p>
                </a>
                <button onclick={deleteFavorite} class="border-none text-red-500">Borrar</button>
            </div>
        </Show>
       
    )
}