let productPrice = document.querySelector('#boxprice');
let btn = document.querySelector('#btn');
let text = document.querySelector('#text');
const tax = 0.6;

btn.addEventListener('click', function() {
    let taxOnProduct = parseFloat(productPrice.value) * tax;
    let totalPrice = parseFloat(productPrice.value) + (parseFloat(productPrice.value) * tax);
    
    
    if (productPrice.value <= 0) {
        window.alert('Por favor, preencha o campo abaixo com um valor válido!');
    } else if (productPrice.value <= 150) {
        text.innerHTML = `Seu produto não será taxado.`;
        text.style.backgroundColor = '#11F05F';
        text.style.textAlign = 'center';
    } else {
        text.innerHTML = `Será cobrado ${taxOnProduct.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })} reais de imposto. Ao total você irá pagar ${totalPrice.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })} reais.`;
        text.style.backgroundColor = '#FF5533';
        text.style.textAlign = 'center';
    }
    
    productPrice.value = ''; 
    productPrice.focus();

});

