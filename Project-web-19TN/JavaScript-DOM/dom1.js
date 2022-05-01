// EXAMINE THE DOCUMENT OBJECT //
//console.dir(document);
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// //document.title = 123;
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[10]);
// //document.all[10].textContent="Hello";
// console.log(document.forms);
// console.log(document.links);

//GETELEMENTBYID//
// var headerTitle = document.getElementById('header-title');
// console.log(headerTitle);
//headerTitle.textContent = 'Hello';
//headerTitle.innerHTML= 'Goodbye';
//headerTitle.innerHTML = '<h3>Hello</h3>'
//var header = document.getElementById('main-header');
//header.style.borderBotto m= 'solid 3px #000';


//GETELEMENTBYCLASSNAME//
// var  lies = document.getElementByClassName('list-group-item');
// console.log(lies);
// console.log(lies[1]);
// lies[1].textContent = 'Hello 2';
// lies[1].style.fontWeight = 'bold';
// lies[1].style.backgroundColor = 'yellow';

// //Gives errror
// //items.style.backgroundColor = '#f4f4f4';

// for(var i = 0; i < lies.length; ++i){
//     lies[i].style.backgroundColor = '#f4f4f4';

// }

//GETELEMENTBYTAGNAME//
// var  lies = document.getElementByTagName('li');
// console.log(lies);
// console.log(lies[1]);
// lies[1].textContent = 'Hello 2';
// lies[1].style.fontWeight = 'bold';
// lies[1].style.backgroundColor = 'yellow';

// //Gives errror
// //items.style.backgroundColor = '#f4f4f4';

// for(var i = 0; i < lies.length; ++i){
//     lies[i].style.backgroundColor = '#f4f4f4';

// }


//QUERYSELECTOR//
// var header = document.querySelector('#main-header');
// header.style.borderBottom = 'solid 4px #ccc';

// var input = document.querySelector('input');
// input.value = 'Hello World';

// var submit = document.querySelector("input[type='submit']")
// submit.value = "SEND";

// var item = document.querySelector('.list-group-item');
// item.style.color = 'red';

// var lastItem = document.querySelector('.list-group-item:last-child');
// lastItem.style.color = 'red';

//QUERYSELECTORALL//
// var titles = document.querySelectorAll('.title');
// console.log(titles);
// titles[0].textContent = 'Hello';

// var odd = document.querySelectorAll('li:nth-child(odd)');
// var even = document.querySelectorAll('li:nth-child(even)');

// for(var i = 0; i < odd.length; ++i){
//     odd[i].style.backgroundColor = '#f4f4f4';
//     even[i].style.backgroundColor = '#ccc';
// }