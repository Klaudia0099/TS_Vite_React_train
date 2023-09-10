import { useEffect, useState } from 'react';
import './index.css';


interface PlanedInterface{
  name: string;
  population: string;
  orbital_period: string;
}

export const Task4 =() => {

const [getCount, setCount] = useState<number>(0);

///Planet data
const [getPlanet, setPlanet] = useState<PlanedInterface[]>([]);
const [getError, setError] = useState<string | null>(null);

useEffect(() => {

  async function fetchPlanets() {
    try {
      const result = await fetch("https://swapi.dev/api/planets/?page=1");
      if(!result.ok){
        throw new Error("Something went wrong");
      }
      const data = await result.json();
      const planetData = data.results as PlanedInterface[]; // as - assertion, słowo kluczow dla TS
      setPlanet(planetData);
    } catch (error:any) { //obejście typowania erroru
      setError(error.messaage)
    }
  }
  fetchPlanets();
},[])



/// ReturnType, Partial, Omit, Pick, extend

//ResultType
// przydatne gdy checmy wykorzystac typ zwracanej wartości funkcji w innym miejscu
function add(a: number, b: number): number {
  return a + b;
}

type ResultType = ReturnType<typeof add>; 



//Partial
type User = {
  name: string;
  age: number;
};

type PartialUser = Partial<User>;

// mozemy wywolac zmienna z typem ale bez wymagenego atrybutu
const partialUser: PartialUser = {
  name: 'John',
};


//Omit
type User2 = {
  name: string;
  age: number;
  email: string;
};

type UserWithoutEmail = Omit<User2, 'email'>;

const userWithoutEmail: UserWithoutEmail = {
  name: 'Alice',
  age: 30,
};

//Pick
type User3 = {
  name: string;
  age: number;
  email: string;
};

type UserWithOnlyName = Pick<User3, 'name'>;

const userWithOnlyName: UserWithOnlyName = {
  name: 'Bob',
};


//Mergowanie intrefejsów
interface Shape {
  color: string;
}

interface Circle extends Shape {
  radius: number;
}

const myCircle: Circle = { color: "red", radius: 5 };

console.log("getPlanet", getPlanet)


return(
    <div className="container--typescript-task4">
        <span>Task 4</span><br/>
        {getError && (<div>{getError}</div>)}
        <ul>
        {getPlanet.map((planet, index) => (<li key={index}>
            Planet name: {planet.name} <br/>Planet population: {planet?.population}<br/>Year lasts {planet?.orbital_period} days.</li>
             ))}
        </ul>

    </div>
)
}