import React, { Component } from "react";
import PokeCard from "./PokeCard";
import "./PokeDex.css";

class PokeDex extends Component {
  static defaultProps = {
    pokemon: [
      { id: 4, name: "Charmender", type: "fire", base_experiance: 62 },
      { id: 7, name: "Squirtle", type: "water", base_experiance: 63 },
      { id: 11, name: "Metapod", type: "bug", base_experiance: 72 },
    ],
  };

  render() {
    let title;
    this.props.isWinner
      ? (title = <h1 className="PokeDex-winner">Winning Hand!</h1>)
      : (title = <h1 className="PokeDex-looser">Losing Hand</h1>);
    return (
      <div className="PokeDex">
        {title}
        <p>Total Experience : {this.props.exp}</p>

        <div className="PokeDex-cards">
          {this.props.pokemon.map((p) => (
            <PokeCard
              id={p.id}
              name={p.name}
              type={p.type}
              exp={p.base_experiance}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default PokeDex;
