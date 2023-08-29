import React, {useState} from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({pokemon}) {
  console.log=(pokemon)
  const [showFront, setShowFront] = useState(true)

  const { name, hp, sprites } = pokemon;
  
  function handleClick() {
    setShowFront((showFront) => !showFront)
  }
  const pokeImage = showFront ? sprites.front : sprites.back
  const pokeAlt = showFront ? name : 'oh no!';

  return (
    <Card onClick={handleClick}>
      <div>
        <div className="image">
          <img src={pokeImage} alt={pokeAlt} />
        </div>
        <div className="content">
          <div className="header">{name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {hp}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
