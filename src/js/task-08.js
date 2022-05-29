const form = document.querySelector(".login-form");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    console.log(formData);

    formData.forEach((value, name) => {
        console.log(name);
        console.log(value);   
    });
    
    const {
        elements: { email, password }
    } = event.currentTarget;
    
    if (email.value === "" || password.value === "") {
        alert("Все поля должны быть заполнены!");
    }

    form.reset();
});


