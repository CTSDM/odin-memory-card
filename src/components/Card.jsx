import { useState, useEffect } from "react";
import placeholder from "../assets/loading.gif";
import "../styles/Card.css";

export default function Card({ pokemon, pokemonList, onClick }) {
    const [link, setLink] = useState(placeholder);
    useEffect(() => {
        let ignore = false;
        fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
            .then((response) => response.json())
            .then((data) => {
                if (!ignore) {
                    setLink(data.sprites["front_default"]);
                }
            });
        return () => {
            ignore = true;
        };
    }, [pokemon, pokemonList]);
    return (
        <div>
            <img src={link} alt={pokemon} onClick={onClick} />
            <div>{pokemon}</div>
        </div>
    );
}
