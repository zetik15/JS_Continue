document.addEventListener('DOMContentLoaded', function (e) {
    const getProducts = JSON.parse(localStorage.getItem('cart'));
    console.log('Товары в корзине:', getProducts);
    const cartEl = document.querySelector('.cart');
    cartEl.innerHTML = '';

    if(getProducts && getProducts.length > 0) {
        getProducts.forEach(product => {
            cartEl.insertAdjacentHTML('beforeend', `
                <div class="cart__item" data-id="${product.id}">
                        <div class="cart__img">
                            <img src="${product.img}" alt="cart__man">
                        </div>
                        <div class="cart__content">
                            <div class="cart__specs">                
                                <div class="cart__heading">
                                    <a href="#" class="cart__title">${product.title}</a>
                                </div>
                                <div class="cart__desc">
                                    <div class="cart__text">Price: <span class="cart__text_select">${product.price}</span></div>
                                    <div class="cart__text">Color: Red</div>
                                    <div class="cart__text">Size: Xl</div>
                                    <div class="cart__text">Quantity: <input type="number" value="${product.quantity}" min = "1" class="cart__number"></div>
                                </div>
                            </div>
                        </div>
                        <a href="#" class="cart__cross">
                            <svg class="cart__close" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.2453 9L17.5302 2.71516C17.8285 2.41741 17.9962 2.01336 17.9966 1.59191C17.997 1.17045 17.8299 0.76611 17.5322 0.467833C17.2344 0.169555 16.8304 0.00177586 16.4089 0.00140366C15.9875 0.00103146 15.5831 0.168097 15.2848 0.465848L9 6.75069L2.71516 0.465848C2.41688 0.167571 2.01233 0 1.5905 0C1.16868 0 0.764125 0.167571 0.465848 0.465848C0.167571 0.764125 0 1.16868 0 1.5905C0 2.01233 0.167571 2.41688 0.465848 2.71516L6.75069 9L0.465848 15.2848C0.167571 15.5831 0 15.9877 0 16.4095C0 16.8313 0.167571 17.2359 0.465848 17.5342C0.764125 17.8324 1.16868 18 1.5905 18C2.01233 18 2.41688 17.8324 2.71516 17.5342L9 11.2493L15.2848 17.5342C15.5831 17.8324 15.9877 18 16.4095 18C16.8313 18 17.2359 17.8324 17.5342 17.5342C17.8324 17.2359 18 16.8313 18 16.4095C18 15.9877 17.8324 15.5831 17.5342 15.2848L11.2453 9Z" fill="#575757"/>
                            </svg>
                        </a>
                    </div>    
            `)
        });

        const crosses = document.querySelectorAll('.cart__cross');

        crosses.forEach(cross => {
            cross.addEventListener('click', (e) => {
                e.preventDefault();
        
                const item = cross.closest('.cart__item');
                const itemId = item.dataset.id;
                const currentCart = JSON.parse(localStorage.getItem('cart'));

                const newCart = currentCart.filter(product => product.id !== Number(itemId));
        
                localStorage.setItem('cart', JSON.stringify(newCart));
        
                if (newCart.length === 0) {
                    cartEl.innerHTML = 'Корзина пустая';
                } else {
                    item.remove();
                }
            });
        });

        const clearCart = document.querySelector('.cart-actions__btn');

        clearCart.addEventListener('click', function (e) {
            e.preventDefault();

            localStorage.removeItem('cart');

            cartEl.innerHTML = 'Корзина пустая';
        });
    } else {
        cartEl.innerHTML = 'Корзина пустая';
    }
});
