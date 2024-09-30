console.log("teste")


function moverEsquerda() {
    const items = document.querySelectorAll('.item');
    items.forEach(item => {
        let currentOrder = parseInt(item.style.order);
        // Se o valor atual do order for 1, volta para o último
        item.style.order = currentOrder === 1 ? items.length : currentOrder - 1;
        
    });
    
}


function moverDireita() {
    const items = document.querySelectorAll('.item');
    items.forEach(item => {
        let currentOrder = parseInt(item.style.order);
        // Se o valor atual do order for o último, volta para o primeiro
        item.style.order = currentOrder === items.length ? 1 : currentOrder + 1;
    
    });
    
}
