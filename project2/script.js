//  js me kisi bhi element ko select karne ke liye usme 
// document.(getElementbyID, QuerySelector, QuerySelectorAll, getElementsByClassName)



// 1 ->

// let h= document.querySelector("#heading");
// h.textContent=" Welcome to Milan Kirana!"
// _____________________________________________________

// 2->
 
let lis = document.querySelectorAll("li");
for( let i=0; i<lis.length; i++)
{
    console.log(lis[i].textContent);
}