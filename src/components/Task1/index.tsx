import './index.css';
import { getCountCharacters, getIsEven, processString} from '../../utils/index';
//adding type explicity
//adding type implicity
let age: number = 65;
const name:string ="Klaudia";
let levelOfJavascript: null = null;
let knowsReact: boolean = false;
let variableUnknown: unknown;
let variableUndefined: undefined = undefined;
let variableWithAny: any = "string"; //obejscie TS, niezalecane, ew jeśli nie wiadomo co przyjdzie z backendu - ale jako TODO: do zmiany;

interface Task1Interface{
    taskName: string | null;
    taskID: number;
    doTask : (param:string) => string;
}

export const Task1 =({taskName, taskID, doTask}:Task1Interface) => {

function greet(nameParam:string):string {
    return `Hello ${nameParam} !`
}

function greet2():string {
    return `Hello ${name} !`
}

const getSum = (param1:number, param2:number):number => param1 + param2


// znak zapytania oznacza, ze parametr jest opcjonalny
function getString(str?: string):string {
    if (str){
        return str; // tu jest 'string'
    }
    return str; // ty jest to 'string | undefined'
}

// znak zapytania oznacza, ze parametr jest opcjonalny
function getPet(str: "dog" | "cat"): string | undefined {
    if (str){
        return str; // tu jest 'string'
    }
    return str; // tu jest to 'undefined'
}

type PersonType = {
    name: string;
    age: number;
  };
 
function getSayHello(person: PersonType) {
    return "Hello " + person.name;
}

return(
    <div className="container--typescript-task1">
        <span>Task name : {taskName}</span><br/>
        <span>Task ID : {taskID}</span><br/>
{greet("Klaudia")}<br/>
{greet2()}<br/>
{getSum(3,4)}<br/>
{getCountCharacters("konstantynopolitowianeczka")}<br/>
<span>{getIsEven(7).toString()}</span><br/>
{processString("Klaudia")}
<div>{getString()}</div>
<div>{getPet("dog")}</div>

<div>{doTask(name)}</div>
<div>{getSayHello({name:"Klaudia", age: 24})}</div>
    </div>
)
}