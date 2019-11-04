console.log("hello world...");
let userSearch = document.querySelector(".form_control");
console.log(userSearch);
 const url = "/about";
let form = document.querySelector(".form");
form.addEventListener("submit", e => {
  e.preventDefault();
  const user = userSearch.value;
  if (user === "") {
    empty("Please enter a value", "red");
  } else {
   
    fetch(url).then(response => {
      return response.json()
    }).then(data => {getData(data)})
    // display.innerHTML += `<h3>${user}</h3>`;
  }
});

function getData(response) {
  const display = document.querySelector(".display");
  response.filter(item => {
    
    display.innerHTML += `<h3>${item.first_name}</h3>`;
  })
 
}

function empty(txt, action) {
  const display = document.querySelector(".display");
  display.innerHTML = `<p class="${action}">${txt}</p>`;
  setTimeout(() => {
    display.innerHTML = ``;
  }, 1800);
}
