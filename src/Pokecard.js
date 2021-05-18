import React, {Component} from 'react';
import './Pokecard.css';
// const POKE_ID = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';
const POKE_ID = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/';

let padtoThree = (number) => (number <= 999 ? `00${number}`.slice(-3) : number )


class Pokecard extends Component{
    render(){
        let img_src = `${POKE_ID}${padtoThree( this.props.id)}.png`;
        return(
            <div className="Pokecard" >
                <h1 className="Pokecard-title">{this.props.name}</h1>
                <img src={img_src} alt={this.props.name}/>
                <div className="Pokecard-data">{this.props.type}</div>
                <div className="Pokecard-data">{this.props.exp}</div>
                
                
            </div>
        )
    }
        
        

}

export default Pokecard;