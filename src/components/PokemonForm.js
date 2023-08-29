import React, { useState } from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({newPokemons}) {

  const [name, setName]= useState("")
  const [imageFront, setImageFront]= useState('')
  const [imageBack, setImageBack]= useState('')
  const [hp, setHp]=useState('')


  function submitForm(e) {
    e.preventDefault()
    const newPokemon = {
      name: name,
      hp: hp,
      sprites: {
        front: imageFront,
        back: imageBack
      }
    }
    fetch('http://localhost:3001/pokemon', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newPokemon)})
    .then(resp => resp.json())
    .then(data => newPokemons(data))

  }


  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={(e) => {
          submitForm(e);
        }}
      >
        <Form.Group widths="equal">
          <Form.Input fluid label="Name" placeholder="Name" name="name" value={name} onChange= {(e) => setName(e.target.value)}/>
          <Form.Input fluid label="hp" placeholder="hp" name="hp" value={hp} onChange = {(e) => setHp(e.target.value)}
 />
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
            value={imageFront}
            onChange = {(e) => setImageFront(e.target.value)}
            
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
            value={imageBack}
            onChange = {(e) => setImageBack(e.target.value)}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
