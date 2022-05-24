const categoriesLength = document.querySelectorAll(".item").length;
console.log(`Number of categories: ${categoriesLength}`);

const items = document.querySelectorAll(".item");
Array.prototype.forEach.call(items, (element) => {
    const title = element.querySelector("h2").innerHTML;
    const itemsLength = element.querySelectorAll("li").length;
    console.log(`Category: ${title}
Elements: ${itemsLength}`);
});

