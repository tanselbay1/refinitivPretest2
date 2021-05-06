const url = 'https://api.publicapis.org/categories';
const table = document.querySelector('.table-row');
let tableFiltered = document.querySelector('.table-row-filtered');
const inputArea = document.querySelector('input');


fetch(url)
   .then(res => res.json())
   .then(out => {
      out.map(category => {
         const element = document.createElement('td');
         element.classList.add('category-element');
         element.innerText = category;
         table.appendChild(element);
   })
})
.catch(err => {throw err});

const capitalize = (s) => {
   if (typeof s !== 'string') return ''
   return s.charAt(0).toUpperCase() + s.slice(1)
 }

function filterTableInit(){
   const input = document.getElementById('filter');
   let filteredOut = [];

   fetch(url)
   .then(res => res.json())
   .then(out => {
      filteredOut = out.filter(name => {
         //Make lower case first in order to make it work even user input capitalized char
         const lowerCase = input.value.toLowerCase();
         const capitalizedValue = capitalize(lowerCase);
         return name.includes(capitalizedValue)
      });
      filteredOut.map(category => {
         const element = document.createElement('td');
         element.classList.add('category-element');
         element.innerText = category;
         tableFiltered.appendChild(element);
   })
})
.catch(err => {throw err});
}

function clear(){
   tableFiltered.innerText = "";
}

inputArea.addEventListener('keyup', clear);