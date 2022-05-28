const formLogin = document.querySelector(".login-form");
// const buttonEl = document.querySelector("button");

formLogin.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    formData.forEach((value, name) => {
        console.log(name);
        console.log(value);
        
    });
    
    const formElements = event.currentTarget.elements;
    const email = formElements.email.value;
    const password = formElements.password.value;

    const formDataElements = {
        email, password,
    };
    console.log(formDataElements);

    if (email === '') {
        alert("Все поля должны быть заполнены!");
    } else if (password === '') {
        alert("Все поля должны быть заполнены!");
    }
    
    formLogin.reset();
});


