//Select the section with an id of container without using querySelector.
document.getElementById('container')

//Select the section with an id of container using querySelector.
document.querySelector('#container')

//Select all of the list items with a class of "second".
document.querySelectorAll('.second')


//Select a list item with a class of third, but only the list item inside of the ol tag.
let list = document.querySelector('ol');
list.querySelector('.third')


//Give the section with an id of container the text "Hello!".
let p = document.createElement('p');
p.innerHTML = 'Hello';
let section = document.getElementById('container');
section.prepend(p);


//Add the class main to the div with a class of footer.

// document.querySelector('.footer').className += " main";
document.querySelector('.footer').classList.add('main')

//Remove the class main on the div with a class of footer.
document.querySelector('.footer').classList.remove('main')

//Create a new li element.
let newLi = document.createElement('li');

//Give the li the text "four".
newLi.innerHTML = "four"



//Append the li to the ul element.
let unorederedList = document.querySelector('ul');
unorederedList.append(newLi)


//Loop over all of the list inside the ol tag and give them a background color of "green".
let ol = document.querySelector('ol');
let arrOfList = ol.querySelectorAll('li')
for (i = 0; i < 3; i++) {
    arrOfList[i].style.backgroundColor = 'green';
}

//method-2
arrOfList.forEach(elm => elm.style.backgroundColor = "green")


//Remove the div with a class of footer.
document.querySelector('.footer').remove();
