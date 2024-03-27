
//creating const for the buttons

        const btnCreate = document.getElementById("create");
        const btndestroy = document.getElementById("destroy");

//creating const for the Label, to save the input in a variabel

        const constInput = document.getElementById("inputValue");

//creating a function for a click event

        btnCreate.addEventListener("click", () =>{

            //adding the value of the input in a const called count
            const count = parseInt(constInput.value);
            //for loop that will add the amount of divs according to the count
            for (let i=0; i < count; i++){
            const newDiv = document.createElement("div");
            //Giving styling to the div and setting a size of 30px for width and height. Taking the amount of divs in mind.
            newDiv.style.backgroundColor = getRandomHexColor();
            newDiv.style.width = `${30 + i * 10}px`; 
            newDiv.style.height = `${30 + i * 10}px`;
            //Adding the div to the document (website)
            document.getElementById("boxes").appendChild(newDiv);

            document.getElementById('inputValue').value = ''

            btndestroy.addEventListener("click", () =>{
                newDiv.remove();
            });

        }
        });

        

        function getRandomHexColor() {
        return `#${Math.floor(Math.random() * 16777215)
         .toString(16)
            .padStart(6, 0)}`;
        }

        function createBoxes(amount){

        }
  