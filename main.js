
//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
`Matched ${dog_name}` if name is in the string, if its not a match console.log "No Match"
*/
let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_names = ["Max","HAS","PuRple","dog"]
console.log(dog_names.includes('Purple'))

splitString2 = dog_string.split(" ")
console.log(splitString2)


//function takes 2 parameters, a list and a string
// loops through list and checks for matches in string
// output is f string of `Matched ${dog_name} or 'No Match

function findWords(dgName,dogString){
  
    // dgName == words.map(word => word.toLowerCase())
    for(nam of dgName){

        if(dogString.toLowerCase().includes(nam.toLowerCase())){
    
            console.log(`Matched ${nam}`)

            
            }else{
                console.log('Not Matched')
            }
    } 
        
    }
        
    
 findWords(dog_names, dog_string)
        
    
    
    //Your code goes here


// Call method here with parameters

//============Exercise #2 ============//
/*Write a function that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */
arr = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]

function replaceEvens(arr){
    // funtion takes in a list
    // loops through each index
    // remove every even index with splice()(can we use %)
    // replace even index with 'even index'
    for(let i=0; i< arr.length; i++)
    if( i % 2 ==0){arr.splice(i,1,'even index')

    }

    
    console.log(arr)
    
    //code goes here
}
arr = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]

replaceEvens(arr)
//Expected output
//Given arrd= ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
//Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]
//Expected output
//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
//Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]'


// Create a function which answers the question "Are you playing banjo?".
// If your name starts with the letter "R" or lower case "r", you are playing banjo!

// The function takes a name as its only argument, and returns one of the following strings:
function areYouPlayingBanjo(name) {
    let name_t = name.toLowerCase().charAt(0)  //charAt() returns the value of a string at a specified index
    if(name_t == 'r'){
        return `${name} plays banjo`
    
    }else if(name_t != 'r')
    { 
        return `${name} does not play banjo`
    }

}

// Write a function that takes an array of words and smashes them together into a sentence 
// and returns the sentence. You can ignore any need to sanitize words or add punctuation, 
// but you should add spaces between each word. Be careful, there shouldn't be a space at the 
// beginning or the end of the sentence!

function smash (words) {
    return words.join(' ') // join() takes in an array, concatenates all the elements and returns them in new string. 
                           // you can provide a parameter that separates the elements
 };