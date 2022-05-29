const form = document.querySelector(".login-form");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    
    const { email, password } = event.currentTarget.elements;

    console.log(email.value);
    console.log(password.value);
    
    if (email.value === "" || password.value === "") {
        alert("Все поля должны быть заполнены!");
    }

    form.reset();
});


