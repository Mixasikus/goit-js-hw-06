const form = document.querySelector(".login-form");
const emailEl = document.querySelector('input[type="email"]').value;
const passwordEl = document.querySelector('input[type="password"]').value;

let formElements = {
    email: "", password: "" };
    
form.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    console.log(formData);

    if (emailEl || passwordEl === "") {
        alert("Все поля должны быть заполнены!");
    } else  {
        formElements.email = emailEl;
        formElements.password = passwordEl;
    }
    
document.querySelector('.login-form').reset();
});


