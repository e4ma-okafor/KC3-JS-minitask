//Task1: Function to accept a string and convert the first letter of each word
console.log("Task 1");               
const upperString = (str) => {
    arrayString = str.split(" ");
    //console.log(arrayString);
    for (const word in arrayString) {
        arrayString[word] = arrayString[word].charAt(0).toUpperCase() + 
        arrayString[word].substring(1);
    }       
    return arrayString.join(" ");
}  
const inputStr = "this is the input string";       
console.log(upperString(inputStr)); 

//Task2: Function to accept a string and find longest word
console.log("Task 2");
const findLongestWord = (str) => {
    const wordSplit = str.split(" ");            
    let longestWord = "";

    for (const index in wordSplit) {
        const word = wordSplit[index];
        if (word.length > longestWord.length) {
            longestWord = word;                    
        }
    }
    return longestWord;
}
const inputWords = "A set of words that are put together to mean something";        
console.log(`The longest word in (${inputWords}) is: \n${findLongestWord(inputWords)}`);

//Task3: Function to accept number and check if it is prime
console.log("Task 3")
const checkPrime = (num) => {            
    let i; 
    let flag = true;            

    if (num == 1 || num == 0){
        console.log(`${num} is not a prime number`);
    } else if (num > 1) {
        for (i = 2; i <= num - 1; i++) {
            if (num % i == 0) {
                flag = false;
                break;
            }
        }

        if (flag) {
            console.log(`${num} is a prime number`);
        } else {
            console.log(`${num} is not a prime number`);
        }
    } else {
        console.log(`${num} is negative and cannot be a prime number`)
    }
}
checkPrime(20);

//Task4: Function to accept argument and returns the type
console.log("Task 4")
const theType = (str) => {
    return typeof(str);
}        
const inputString = true;
console.log(`${inputString} is a ${theType(inputString)} data type.`);

//Task5: Function to find second lowest and second greatest
console.log("Task 5");
const printLowestGreatest = (numArr) => {            
    if (numArr.length < 2) {
        console.log("Invalid Input");
        return;
    }
    console.log(`In the array (${numArr})`);
    const sortedArray = numArr.sort((a, b) => a - b);
    //console.log(sortedArray)
    const secondLowest = sortedArray[1];
    const secondGreatest = sortedArray[sortedArray.length - 2];             
    
    console.log(`The second Lowest number in numArr: ${secondLowest} \nThe second Largest number in numArr: ${secondGreatest}`);             
}
const numArr = [4, 20, 16, 8, 2, 13];                       
printLowestGreatest(numArr);