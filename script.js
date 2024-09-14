// Assigning container variable to class container created in HTML so it can be used
// to append the newly created grid to it.
const container = document.querySelector(".container");
const boxButton = document.querySelector(".user-input > button");
const resetButton = document.querySelector(".reset > button");

resetButton.addEventListener("click", () =>{
    resetBox();

});

function resetBox(){
    container.innerHTML = '';
}

boxButton.addEventListener("click", () => {
    const userInput = document.getElementById("userInput").value;
    createBoxes(userInput);
});



function createBoxes(userInput) {
    // Using for loop to create a grid based on the number entered by user.
    container.innerHTML = '';
    document.getElementById("userInput").value = '';


    for (let i = 0; i < userInput; i++) {
        for (let j = 0; j < userInput; j++) {
            // creating div element and assigning it to variable newElement.
            let newElement = document.createElement("div");

            // Adding newly created div elements to the container class.
            newElement.classList.add("newElement");
            container.appendChild(newElement);

            // Setting style to the newly created div based on user input.
            let boxWidth = 500 / userInput;
            let boxHeight = 500 / userInput;
            newElement.setAttribute("style", `width: ${boxWidth}px; height: ${boxHeight}px; background: grey;`);

            // Changing background color of the square divs randomly using mouseleave event.
            newElement.addEventListener("mouseenter", () => {
                newElement.style.backgroundColor = "pink";
            });
            newElement.addEventListener("mouseleave", () => {
                let randomNumber = Math.floor(Math.random() * 10);

                // I used if else statement instead of switch case, will it have effect on efficiency of program??

                if (randomNumber === 0) {
                    newElement.style.backgroundColor = "red";
                }
                else if (randomNumber === 1) {
                    newElement.style.backgroundColor = "green";
                }
                else if (randomNumber === 2) {
                    newElement.style.backgroundColor = "purple";
                }
                else if (randomNumber === 3) {
                    newElement.style.backgroundColor = "orange";
                }
                else if (randomNumber === 4) {
                    newElement.style.backgroundColor = "yellow";
                }
                else if (randomNumber === 5) {
                    newElement.style.backgroundColor = "brown";
                }
                else if (randomNumber === 6) {
                    newElement.style.backgroundColor = "black";
                }
                else if (randomNumber === 7) {
                    newElement.style.backgroundColor = "white";
                }
                else if (randomNumber === 8) {
                    newElement.style.backgroundColor = "light-blue";
                }
                else if (randomNumber === 9) {
                    newElement.style.backgroundColor = "pink";
                }
                else if (randomNumber === 10) {
                    newElement.style.backgroundColor = "grey";
                }
            });
        }
    }
}