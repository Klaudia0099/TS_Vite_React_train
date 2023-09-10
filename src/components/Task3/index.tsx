import './index.css';

type NumberArrayType = number [];

interface ItemInterface {
    id: number;
    name: string;
    surname?: string;
}

export const Task3 =() => {

const myArray: NumberArrayType = [1,2,3,4,5];

const items:ItemInterface[] = [{id: 1, name: "Item1", surname: "Karcz"}, {id: 2, name: "Item2"}, {id: 3, name: "Item3"}];

function sumAll(myArray: NumberArrayType): number {
    const sum = myArray.reduce((accumulator, currentValue) => {
      return accumulator + currentValue;
    }, 0);
    return sum;
  }

  function getFirstType<T>(array:T[]):T | undefined {
    return array.length > 0 ? array[0]: undefined
  }

  const numbersForGeneric:number[] = [1,2,3,4,5];
  const stringsForGeneric:string[] = ["1","2","3","4","5"];

return(
    <div className="container--typescript-task3">
        <span>Task 3</span><br/>
        {myArray}
        <ul>
        {items.map((item, index) => (<li key={index}>
            Name: {item.name} Surname: {item?.surname === undefined ? "no surname" : item.surname}</li>
             ))}
        </ul>
        <div>Suma elemntów tblicy: {sumAll(myArray)}</div>
        <div>Array of Numbers {getFirstType(numbersForGeneric)}</div>
        <div>Array of Strings {getFirstType(stringsForGeneric)}</div>
    </div>
)
}