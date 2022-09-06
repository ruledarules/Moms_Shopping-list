//          Objective 1

// Upon submitting something in the input space a new DIV will be formed
// and it will form with the same layout as the other items in the HTML

//          Steps...
// 1. Target the HTML form (doing so will give access to element "names" and the button as well)

const iForm = document["addItem"];
// const next = iForm.
// console.log(iForm);

    const theList = document.getElementById("list");


function newLi(event){
    event.preventDefault();
    input = iForm.title.value
    console.log("This part works");
    iForm.title.value = "";

    //Here I have made prevented the auto refresh of the input,
    // and used the names attributes to targed the input box.
    // 2. Now I need to grab the submission


    const addLi = document.createElement("li");
    const newDiv = document.createElement("div");
    const edit = document.createElement("button");
    const clear = document.createElement("button");

    addLi.className = "addOn"
    newDiv.textContent = input;

    edit.className = "changeIt";
    edit.textContent = "edit"

    clear.className= "clearIt"
    clear.classList.add("gone");
    clear.textContent = "X"
    
    theList.append(addLi);
    addLi.prepend(newDiv);
    addLi.append(edit,clear);
    loop()
}   
iForm.addEventListener("submit", newLi);

// const lineBreak = document.getElementsByTagName("hr");
// theList.append(lineBreak);

// let allLi = document.querySelectorAll("li");

// xButtons.length.classList.add("gone"); // Here I've added the class "gone" to every x button

// let parent = document.getElementsByTagName("li");
// let xButtons = parent.lastElementChild.tagName
// let allX = xButtons.length     


function loop(){           
    let xButtons = document.querySelectorAll("li>button:nth-child(3)");
    for (x = 0; x < xButtons.length; x++){
    xButtons[x].classList.add("gone"); // Here I've added the class "gone" to every x button
    console.log("looping")
    // let theLi = xButtons[x].closest("li")
    xButtons[x].addEventListener("click", function(){
        this.parentElement.remove(); 
        console.log("click")
    })}
}

loop()
// }// I'm still experimenting. I'll come back to this
// let xButtons = document.querySelectorAll("li>button:nth-child(3)");

// let theLi = xButtons.parentElement // I have 2 ways of reaching individual Li elements

