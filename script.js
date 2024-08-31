const wrapper = document.querySelector('.wrapper');
const signuplink = document.querySelector('.signup-link');
const loginlink = document.querySelector('.login-link');
const form = document.querySelector('form');

signuplink.onclick = () => {
   wrapper.classList.add('active');
}

loginlink.onclick = () => {
   wrapper.classList.remove('active');
}

// add function
form.addEventListener("submit", (e) =>{
   e.preventDefault()

   const username = form.username.value
   const password = form.password.value

   const authenticated = authentication(username,password)

   if (authenticated) {
      window.location.href = "../main/main.html"
   } else {
      alert("Username and Password is InCorrect!")
   }
})

// function for username and password
function authentication(username,password){
   if (username == "admin@123" && password == "123") {
      return true
   } else {
      return false
   }
}

// const wrapper = document.querySelector('.wrapper');

// document.addEventListener('click', (event) => {
//    if (event.target.matches('.signup-link')) {
//       wrapper.classList.add('active');
//    }
// });