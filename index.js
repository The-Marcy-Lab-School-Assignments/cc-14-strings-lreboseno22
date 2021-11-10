//write your code here

// iterate through the string
// if letter is uppercase remove that letter return the string back with removed letters.
// else just return the string back with.
function stripUpperCase(str){
    let stripped = '';
    for (let i of str){
        if(i === i.toLowerCase()){
            stripped += i;
        }
    }
    return stripped;
    
}
console.log(stripUpperCase('Hello'));