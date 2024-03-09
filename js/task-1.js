const categories = document.getElementById('categories');
const items = categories.querySelectorAll('.item');


console.log(`Number of categories: ${items.length}`);

items.forEach(item => {
    const list = item.querySelector(`h2`).textContent;
    const itemCount = item.querySelectorAll(`li`).length;
    console.log(`Category: ${list}`);
    console.log(`Elements: ${itemCount}`);
})