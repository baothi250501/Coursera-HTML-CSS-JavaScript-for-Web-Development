var fruits = ["watermelon", "orange", "banana", "apple"];

function loadFruits(){
    document.getElementById("fruits").innerHTML = fruits;
}

function myFunction(){
    var newFruit = prompt("Enter new fruit: ");
    fruits.push(newFruit);
    loadFruits();
}