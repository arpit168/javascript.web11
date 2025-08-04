// _________var ,let ,n const ____________
//  declaration and initialization 
// ________________________________________
// var a;   // declare karna 
// var a = 12; // declare and initialize 
// var a = 15;

// var  window me add hota hai
// var function scoped hota hai
//  var ko same  name  ke sath n-number of times add kiya jaa sakta hai aur fir bhi usme error nhi aaayega

//  we must only use of "let" and " const"
// let is used for a value which can change in ahead on the code 
// but const can't change value by itself //

// ________________________________________

// _____________ Scope ( global, block, functional)

//  global socpe - ( poore code me run kar sakte hain)
// jo variable kisi curly braces ke andar nahi hota 
//  this can use in any line number
// var a = 12; ( ye kahlata hai "global Scope" kyoki isko sare functions me use kar sakte hain)


// functional scope--( sirf functions ke andar run kar sakte hain)
// function abcd(){
    //  var  a = 12;
// }( ye kahlata hai "functional Scope" kyoki isko sirf uski function me use kar sakte hain jisme isko likhte hain)

// block scope--( sirf un curly baraces ke andar run kar sakte hain jinke nadar likha jata hai)

// let is a block scope whis is used in  

// var a = 123;
// {
//    let a=12;
// } 
// ____________________________________________________________________________________

//  Reassignment , redeclaration
// var a =12;
// a = 14;   reassign is also called updation
// 
// var a =19;
//  var a =59;  //ye kahlata hai hai redeclaration  means fir se ghoshit karna jaise yaha per var ko dusari baar ghoshit kiya gaua hai
//  ______________________________________________________________________________________




function abc(){
    let background= document.getElementById('a');
    background.style.backgroundColor='red';
    background.style.color='black';
   alert('red');
}

function bbc(){
    let background= document.getElementById('a');
    background.style.backgroundColor='black';
    background.style.color='red';
    alert('black');
}

function cbc(){
    let background= document.getElementById('a');
    background.style.backgroundColor='green';
    background.style.color='blue';
    alert('green');
}
function dbc(){
    let background= document.getElementById('a');
    background.style.backgroundColor='';
     background.style.color='';
   alert('none');
}



   