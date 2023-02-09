import React from 'react';
// eslint-disable-next-line no-unused-vars
import Animals from '../Animals/Animals';
// eslint-disable-next-line no-unused-vars
import Species from '../Species/Species';
import './Zoo.module.css';

export default function Zoo() {
   /* Escribe acá tu código */
   const [zoo, setZoo] = React.useState({
      zooName: '',
      animals: [],
      species: [],
      allAnimals: []
   });

   const handleInputChange = (e) => {
      const inputValue = e.target.value;
      setZoo({
         ...zoo,
         zooName: inputValue,
      });
   }

   React.useEffect(() => {
      fetch('http://localhost:3001/zoo')
         .then((res) => res.json())
         .then((data) => 
            setZoo({
               ...zoo,
               animals: data.animals,
               species: data.species,
               allAnimals: data.animals,
            })   
         )
         .catch((error) => console.log(`Este es el ERROR: ${error} Estupido`) )
   }, [])

   const handleSpecies = (e) =>{
      // console.log(zoo.animals)
      // console.log(zoo.animals[0].name)
      const especie = e.target.value;
      const filtroSpecie = zoo.animals.filter(animal => animal.specie === especie);
      setZoo({
         ...zoo,
         animals: filtroSpecie,
      })
      // console.log(zoo.allAnimals);
   }

   const handleAllSpecies = () =>{
      setZoo({
         ...zoo,
         animals: zoo.allAnimals,
      })
   } 

   return (
      <div>
         <label>Zoo Name:</label>
         <input
            type='text' 
            value={zoo.zooName} 
            onChange={handleInputChange}
         />   
         <h1>{zoo.zooName}</h1>
         <Species 
            zooSpecies={zoo.species} 
            handleSpecies={handleSpecies}
            handleAllSpecies={handleAllSpecies}
         />
         <Animals 
            zooAnimals={zoo.animals}
         />
      </div>
   );
}
