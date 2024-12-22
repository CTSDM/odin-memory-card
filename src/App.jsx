import "./App.css";
import Card from "./components/Card.jsx";
import Header from "./components/Header.jsx";
import { useState, useEffect } from "react";
import pokemonAllArr from "../config/pokemonCompleteList.js";
import {
    getRandomizedArray,
    getCardsNumber,
    getSubsetElements,
} from "../utils/utils.js";

function App() {
    const [difficulty, setDifficulty] = useState("easy");
    const [pickedPokemons, setPickedPokemons] = useState([]);
    const [bestScore, setBestScore] = useState(0);
    const numberOfCards = getCardsNumber(difficulty);
    const [pokemonList, setPokemonList] = useState(
        getSubsetElements(numberOfCards, pokemonAllArr),
    );

    const score = pickedPokemons.length;
    if (score > bestScore) setBestScore(score);

    useEffect(() => {
        setPokemonList(getSubsetElements(numberOfCards, pokemonAllArr));
    }, [numberOfCards]);

    return (
        <>
            <Header onChange={newGame} score={score} bestScore={bestScore} />
            <div className="cards">
                {pokemonList.map((value) => (
                    <Card
                        key={value}
                        pokemon={value}
                        pokemonList={pokemonList}
                        onClick={onClick}
                    />
                ))}
            </div>
        </>
    );

    function onClick(event) {
        setPokemonList(getRandomizedArray(pokemonList));
        const pokemon = event.target.alt;
        if (pickedPokemons.indexOf(pokemon) !== -1) {
            newGame(difficulty, false);
        } else {
            const newList = pickedPokemons.slice();
            newList.push(pokemon);
            setPickedPokemons(newList);
        }
    }

    function newGame(value, isNewDifficulty = true) {
        if (!isNewDifficulty) {
            setDifficulty(value);
            setPokemonList(getSubsetElements(numberOfCards, pokemonAllArr));
        }
        setPickedPokemons([]);
    }
}

export default App;
