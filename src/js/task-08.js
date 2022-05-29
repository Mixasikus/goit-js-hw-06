const form = document.querySelector(".login-form");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    console.log(formData);
    
    const {
        elements: { email, password }
    } = event.currentTarget;

    console.log(email);
    console.log(password);
    
    if (email.value === "" || password.value === "") {
        alert("Все поля должны быть заполнены!");
    }

    form.reset();
});


