const containerGrid = document.getElementById('containerGrid');

let sixteen = true;
let thirtyTwo = false;

function resolution() {
//provides two types of grid resolution: 16X16 or 32X32
    if (sixteen === true && thirtyTwo ===false) {
        for (let i = 0; i < 256; i++) {
            let box16 = document.createElement('div');
            box16.setAttribute('class', 'box16 box')
            containerGrid.appendChild(box16)
        }
    } else if (sixteen ===false && thirtyTwo === true) {
        for (let i = 0; i < 1024; i++) {
            let box32 = document.createElement('div');
            box32.setAttribute('class', 'box32 box')
            containerGrid.appendChild(box32)
        }
    }
}

document.getElementById('buttonSixteen').onclick = function() {
    clearContainerGrid()
    sixteen = true;
    thirtyTwo = false;
    containerGrid.classList.remove('thirtyTwo')
    containerGrid.classList.add('sixteen')
    resolution()
}

document.getElementById('buttonThirtyTwo').onclick = function () {
    clearContainerGrid()
    sixteen = false;
    thirtyTwo = true;
    containerGrid.classList.remove('sixteen')
    containerGrid.classList.add('thirtyTwo')
    resolution()
}

function clearContainerGrid() {
    //Clear the boxes before populating with new resolution
    let clearBox = document.getElementById('containerGrid');
    while(clearBox.firstChild){
        clearBox.removeChild(clearBox.firstChild);
    }
}

resolution()


let test = document.getElementById('containerGrid');
test.addEventListener('mouseover', function( event ) {
    event.target.setAttribute("style", "background-color: red;")
})