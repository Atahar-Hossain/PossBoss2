const minus = $('.sale_quantity__minus'); 
    const plus = $('.sale_quantity__plus'); 
    const input = $('.sale_quantity__input'); 
    minus.click(function(e) { 
        e.preventDefault(); 
        var value = input.val(); 
        if (value > 1) { 
            value--; 
        } 
        input.val(value); 
    }); 

    plus.click(function(e) { 
        e.preventDefault(); 
        var value = input.val(); 
        value++; 
        input.val(value); 
    }) 