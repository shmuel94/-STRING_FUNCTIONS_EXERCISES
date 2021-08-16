// 1.
// var firstName = prompt("enter a frist name");
// var lastName = prompt("enter a last name");
// if(firstName.length > lastName.length){
//     alert(firstName);
// }
// else if(firstName.length < lastName.length){
//     alert(lastName);
// }
// else{
//     alert("evenly");
// }

// 2.
// var firstName = prompt("enter a frist name");
// var lastName = prompt("enter a last name");
// function printLongString(firstString, secondString){
//     if(firstString.length > secondString.length){
//         return firstString;
//     }
//     else if(firstString.length < secondString.length){
//         return secondString;
//     }
//     else{
//         return "evenly";
//     }
// }
// var longrName = printLongString(firstName, lastName);
// console.log(longrName);

// 3.
// var firstName = prompt("enter a frist name");
// var lastName = prompt("enter a last name");
// function findByLatter(firstName){
//     for(let i = 0; i <firstName.length; i++)
//     if(firstName[i] == 'a'){
//         console.log("have");
//         return;
//     }  
// }
// console.log(findByLatter(firstName));

// function findByLatter(lastName){
//     let caunterA = 0;
//     let caunterP = 0;
//     let caunterI = 0;
//     for(let i = 0; i < lastName.length; i++){
//         if(lastName[i] == 'a'){
//             caunterA++;
//         }
//         if(lastName[i] == 'p'){
//             caunterP++;
//         }
//         if(lastName[i] == 'i'){
//             caunterI++;
//         }
//     }
//     if(caunterA){
//         console.log("have a");
//     }else{
//         console.log("not have a");
//     }
//     if(caunterP){
//         console.log("have p");
//     }else{
//         console.log("not have p");
//     }
//     if(caunterI){
//         console.log("have i");
//     }else{
//         console.log("not have i");
//     }
// }
// findByLatter(lastName);

// var fullName = prompt("enter a full name");
// function getLengthString(fullNameCheck){
//     return fullNameCheck.length;
// }

// function isSpace(fullNameCheck){
//     if(fullNameCheck.indexOf(" ")>-1){
//         return true;
//     }
//     else{
//         return false;
//     }
// }
// function printFirstHalf(fullNameCheck){
//     var spaceIndex = fullNameCheck.indexOf(" ");
//     var firstHalf = fullNameCheck.substring(0, spaceIndex);
//     console.log(firstHalf);
// }
// printFirstHalf(fullName);

// function printSictHalf(fullNameCheck){
//     var spaceIndex = fullNameCheck.indexOf(" ");
//     var sectHalf = fullNameCheck.substring(spaceIndex, 0);
//     console.log(sectHalf);
// }
// printSictHalf(sectHalf)

// var strLength = getLengthString(fullName);
// var isSpaceInStr = isSpace(fullName);
// console.log(strLength, isSpaceInStr);

// 4.
// var string = prompt("enter a string");
// function printString(longString){
//     for(let i = 0; i < string.length; i++){
//         if(string.length > 5){
//             return "long";
//         }
//         return "short";
//     }
// }
// var length = printString(string);
// console.log(length);

// 5.
// var state = prompt("enter a state");
// function printString(longString){
//     for(let i = 0; i < state.length; i++){
//         if(state.length < 3){
//             return "yes";
//         }
//         return "no";
//     }
// }
// var length = printString(state);
// console.log(length);

// 6.
// var theString = prompt("enter a string");
// var theLetter = prompt("enetr a letter")
// function printStringAndLetter(string, letter){
//     if(theString.length > 6){
//         return theString;
//     }
//     return theString.indexOf(theLetter);
// }
// var all = printStringAndLetter(theString, theLetter);
// console.log(all);

// 7.
// var theString = prompt("enter a string");
// var theLetter = prompt("enetr a letter");
// function printStringAndLetter(string, letter){
//     var caunt = 0;
//     for(let i = 0; i < theString.length; i++){
//         if(theString[i] == theLetter){
//             caunt++;
//         }
//     }
//     if(caunt){
//     return theString.indexOf(theLetter);
//     }
//     return theString;
// }
// var all = printStringAndLetter(theString, theLetter);
// console.log(all);

// 8.
// var firstName = prompt("enter a first name");
// var lastName = prompt("enetr a last name");
// function printFullName(fullNameCheck){
//     return firstName[0] + '. ' + lastName.toUpperCase();  
// }
// var all = printFullName(firstName, lastName);
// console.log(all);

// 9.
// var firstLastName = prompt("enter a first last name");
// var secondlastName = prompt("enetr a second last מame");
// function printFullName(fullNameCheck){
//     if(firstLastName.length > secondlastName.length){
//         console.log( secondlastName.toLowerCase());
//         return firstLastName;
//     }
//     if(firstLastName.length < secondlastName.length){
//         console.log(firstLastName.toLowerCase());
//         return secondlastName;
//     }
// }
// var all = printFullName(firstLastName, secondlastName);
// console.log(all);

// 10.
// var theName = prompt("enter a name");
// var theLetter = prompt("enetr a letter");
// function printStringAndLetter(name, letter){
//     var caunt = 0;
//     for(let i = 0; i < theName.length; i++){
//         if(theName[i] == theLetter){
//             caunt++;
//         }
//     }
//     if(caunt){
//     return theName;
//     }
//     return false;
// }
// var all = printStringAndLetter(theName, theLetter);
// console.log(all);