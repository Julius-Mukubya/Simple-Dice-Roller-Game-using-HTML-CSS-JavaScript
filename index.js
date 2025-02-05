document.getElementById("rollDice").onclick = function(){
    let diceResult;
    let diceResults = [];

    let numberOfDices = document.getElementById("diceNum").value;
    let diceOutcomes = document.getElementById("diceOutcomes");
    diceOutcomes.textContent = "dice: ";

    let diceImages = document.getElementById("diceImages");
    diceImages.innerHTML = "";
    
    for (let i = 0; i < numberOfDices; i++){
        diceResult = Math.round((Math.random() * 5) + 1);
        diceResults.push(diceResult);

        let newImage = document.createElement("img");
        switch(diceResult){
            case 1:
                newImage.src = "images/dice-six-faces-one.png";
                newImage.alt = "dice-face-one";
                break;
            case 2:
                newImage.src = "images/dice-six-faces-two.png";
                newImage.alt = "dice-face-two";
                break;
            case 3:
                newImage.src = "images/dice-six-faces-three.png";
                newImage.alt = "dice-face-three";
                break;
            case 4:
                newImage.src = "images/dice-six-faces-four.png";
                newImage.alt = "dice-face-four";
                break;
            case 5:
                newImage.src = "images/dice-six-faces-five.png";
                newImage.alt = "dice-face-five";
                break;
            case 6:
                newImage.src = "images/dice-six-faces-six.png";
                newImage.alt = "dice-face-six";
                break;
            
        }
        diceImages.appendChild(newImage);
    }

    diceOutcomes.textContent = diceOutcomes.textContent + diceResults.join(", ");
    diceOutcomes.style = "display: block;";
    console.log(diceResults);
}