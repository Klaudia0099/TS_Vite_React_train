import { getCountCharacters, getIsEven, getParityMessage } from '../../utils';
import './index.css';

// To ćwiczenie ma na celu utrwalenie wiedzy związanej z typowaniem obiektów
// 1. Zdefiniujmy typ/interfejs AnalyzeResult, który będzie zawierał:
// wartość wejściową jako string
// informację o ilości znaków w stringu jako number
// informację czy ilość znaków jest liczbą parzystą czy nie jako boolean
// 2 .następnie bazując na funkcji processString z Ćwiczenia 5  powinnismy  rozbić ją na dwie
// osobne funkcje:
// analyzeString która zwraca obiekt AnalyzeResult | string
// printAnalyzeResult która przyjmuje AnalyzeResult | string jako argument i zwraca string
// zgodny z wcześniejszym działaniem
// 3. string dla błędu należy po prostu zwrócić

interface AnalyzeResultInterface{
    inputValue: string;
    charCount: number;
    isEven: boolean;
}

export const Task2 =() => {


const analyzeString = (strParam:string):AnalyzeResultInterface | string => {
    if(typeof strParam !== 'string'){
        return "Błąd: Podana wartość nie jest stringiem"
    }

    const characterCount = getCountCharacters(strParam);
    const isEvenCharacterCount = getIsEven(characterCount);



    return {
        inputValue: strParam,
        charCount: characterCount,
        isEven: isEvenCharacterCount
    };
}

const printAnalyzeResult = (result: AnalyzeResultInterface | string):string => {

    if (typeof result === 'string'){
        return result;
    }

    const {inputValue, charCount, isEven} = result;
    const evenOddMessage = getParityMessage(isEven);

    return `${inputValue} - Liczba znaków ${charCount}. ${evenOddMessage}`;


 }

 const getResultForAnalyze = analyzeString("Adam");
 console.log ("getResultForAnalyze", getResultForAnalyze);

 const getResultForAnalyze2 = analyzeString(1234);
 console.log ("getResultForAnalyze2", getResultForAnalyze2);
return(
    <div className="container--typescript-task2">
        <span>Task 2</span><br/>
        {printAnalyzeResult(getResultForAnalyze)}<br/>
        {printAnalyzeResult(getResultForAnalyze2)}
    </div>
)
}