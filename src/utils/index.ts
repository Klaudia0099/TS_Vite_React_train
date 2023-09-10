export function getCountCharacters(string:string):number {
    return string.length;
   }

export   function getIsEven(num:number):boolean {
    return num % 2 === 0;
   }

export   const getParityMessage = (isEvenParm:boolean):string => isEvenParm ? 
"Ta liczba jest parzysta": "Ta liczba jest nieparzysta";

export function processString(strParam:string) : string {

    if( typeof strParam === 'string'){
        const lenghtOfString =getCountCharacters(strParam);
        const isEvenNumber = getIsEven(lenghtOfString);
        const message = getParityMessage(isEvenNumber);
    return `${strParam} - Liczba znaków: ${lenghtOfString}. ${message}`;}
else
    {return("Nie podano argumentu")}
  
}