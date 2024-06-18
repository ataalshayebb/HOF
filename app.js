// q1
// let input = [];
// let output = [];
// let x ;
// let con = true ;

// while(con){
//     let user = prompt("Enter a value (or type 'stop' to finish):");
//     if (user==='stop'){
//         break;
//     }
//     else input.push(Number(user));
// }

// function calculate(inp){
// for(let i = 0; i<inp.length;i++){
//    x = Math.pow(2,inp[i]);
//    output.push(x);
// }
// }
// calculate(input);
// alert(output);




// q2
// let input = [];
// let output = [];
// let x ;
// let con = true ;

// while(con){
//     let user = prompt("Enter a value (or type 'stop' to finish):");
//     if (user==='stop'){
//         break;
//     }
//     else input.push(Number(user));
// }

// function calculat(inp){
//     let odd="odd";
//     let even= "even";
//     let nn = "N/A"

//     inp.forEach(element => {
//         if (element % 2 ==0){
//             output.push(even);
//            }
//            else if (isNaN(element)){
//             output.push(nn);
//            }
//            else
//            output.push(odd);
//     })
//     return output;
// }
// calculat(input);
// alert(output);



// q3
// let input = [];
// let output = [];
// let x ;
// let con = true ;
// while(con){
//     let user = prompt("Enter a value (or type 'stop' to finish):");
//     if (user==='stop'){
//         break;
//     }
//     else input.push((user));
// }

// function calculat(inp){
    
//     inp.forEach(element => {
//            output.push(element);
//     })
//     return output;
// }
// calculat(input);
// alert(output);


// q4 

let input = [];
let output = [];
let x ;
let con = true ;

while(con){
    let user = prompt("Enter a value (or type 'stop' to finish):");
    if (user==='stop'){
        break;
    }
    else input.push(Number(user));
}

function calculat(inp){
    // let odd="odd";
    // let even= "even";
    // let nn = "N/A"

    inp.forEach(element => {

        if (element % 5 ===0 && element % 3 ===0){
            output.push('FIZZBUZZ');
           }

       else if (element % 3 ==0){
            output.push('FIZZ');
           }
           
           else if (element % 5 ==0){
           output.push('BUZZ');
           }
          
           else output.push(element);
    })
    return output;
}
calculat(input);
alert(output);
