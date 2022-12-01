// increment/decrement 

const decreaseNumber = (incdec, itemprice) => { 
    let itemval = document.getElementById(incdec); 
    if (itemval.value <= 1) { 
        itemval.value = 1; 
        alert('0 quantity not allowed'); 
    } else { 
        itemval.value = parseInt(itemval.value) - 1; 
    } 
    itemval.style.background = '#fff'; 
    itemval.style.color = '#000'; 
} 

const increaseNumber = (incdec, itemprice) => { 
    let itemval = document.getElementById(incdec); 
    if (itemval.value >= 100) { 
        itemval.value = 100; 
        alert('max 5 allowed'); 
        itemval.style.background = "red"; 
        itemval.style.color = "#fff"; 
    } else { 
        itemval.value = parseInt(itemval.value) + 1; 
    } 

} 