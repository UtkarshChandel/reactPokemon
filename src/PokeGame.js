import React, { Component } from "react";
import PokeDex from "./PokeDex";

class PokeGame extends Component {
  static defaultProps = {
    pokemon: [
      { id: 4, name: "Charmender", type: "fire", base_experiance: 62 },
      { id: 7, name: "Squirtle", type: "water", base_experiance: 63 },
      { id: 11, name: "Metapod", type: "bug", base_experiance: 72 },
      { id: 11, name: "Metapod", type: "bug", base_experiance: 72 },
      { id: 4, name: "Charmender", type: "fire", base_experiance: 62 },
      { id: 7, name: "Squirtle", type: "water", base_experiance: 63 },
      { id: 11, name: "Metapod", type: "bug", base_experiance: 72 },
      { id: 11, name: "Metapod", type: "bug", base_experiance: 72 },
    ],
  };

  render() {
    console.log("render");
    let hand1 = [];
    let hand2 = [...this.props.pokemon];
    while (hand1.length < hand2.length) {
      let randIdx = Math.floor(Math.random() * hand2.length);
      let randPokemon = hand2.splice(randIdx, 1)[0];
      hand1.push(randPokemon);
    }
    let exp1 = hand1.reduce((exp, pokemon) => exp + pokemon.base_experiance, 0);
    let exp2 = hand2.reduce((exp, pokemon) => exp + pokemon.base_experiance, 0);

    return (
      <div>
        <h1 style={{ textAlign: "center" }}>PokeGame</h1>
        <PokeDex pokemon={hand1} exp={exp1} isWinner={exp1 > exp2} />
        <PokeDex pokemon={hand2} exp={exp2} isWinner={exp2 > exp1} />
      </div>
    );
  }
}

export default PokeGame;
