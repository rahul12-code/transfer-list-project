

let btn1 = document.querySelector("#button1");
let btn2 = document.querySelector("#button2");
let btn3 = document.querySelector("#button3");
let btn4 = document.querySelector("#button4");

const languagesContainer = document.querySelector(".languages");
const frameworksContainer = document.querySelector(".frameworks");


const updateButtonColors = () => {
    const languagesChecked = languagesContainer.querySelector('input[type="checkbox"]:checked');
    const frameworksChecked = frameworksContainer.querySelector('input[type="checkbox"]:checked');
  
    btn3.style.color = languagesChecked ? "black" : "gray";
    btn3.style.borderColor = languagesChecked ? "black" : "gray";
    btn2.style.color = frameworksChecked ? "black" : "gray";
    btn2.style.borderColor = frameworksChecked ? "black" : "gray";
};

const attachCheckboxListeners = (container) => {
    const checkboxes = container.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach((checkbox) => {
      checkbox.addEventListener("change", updateButtonColors);
    });
};

const moveAllItems = (fromContainer, toContainer, disableBtn, enableBtn) => {
    const children = fromContainer.children;
    const childrenArray = Array.from(children);

    childrenArray.forEach((child) => {
        console.log(child);

        child.querySelector('input[type="checkbox"]').checked = false;
        toContainer.append(child)
    });

    disableBtn.style.color = "gray";
    disableBtn.style.borderColor='gray';
    enableBtn.style.color = "black"
    enableBtn.style.borderColor="black"

    updateButtonColors(); // Recheck colors after move
};

const moveSelectedItems = (fromContainer, toContainer) => {
    const checkedItems = fromContainer.querySelectorAll('input[type="checkbox"]:checked');
    console.log(checkedItems);
    checkedItems.forEach((checkbox) => {
      const parentDiv = checkbox.parentElement;
      parentDiv.querySelector('input[type="checkbox"]').checked = false; // Uncheck the cloned checkbox
      toContainer.append(parentDiv);
    });

    updateButtonColors(); // Recheck colors after move
    attachCheckboxListeners(toContainer); // Attach event listeners to newly added checkboxes
};


// Attach initial checkbox listeners
attachCheckboxListeners(languagesContainer);
attachCheckboxListeners(frameworksContainer);

btn1.onclick = () => {
    moveAllItems(frameworksContainer, languagesContainer, btn1, btn4)
};
btn2.onclick = () => {
    moveSelectedItems(frameworksContainer, languagesContainer)
};
btn3.onclick = () => {
    moveSelectedItems(languagesContainer, frameworksContainer)
};
btn4.onclick = () => {
    moveAllItems(languagesContainer, frameworksContainer, btn4, btn1)
};