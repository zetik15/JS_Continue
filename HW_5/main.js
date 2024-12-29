function addProducts(products) {
    const productList = document.getElementById('product-list');
    products.forEach(product => {
        const liEl = document.createElement('li');
        liEl.className = 'product-li';

        const imgEl = document.createElement('img');
        imgEl.src = product.image;
        imgEl.alt = product.title;
        imgEl.width = 150;
        imgEl.height = 150;
        imgEl.className = 'product-img';

        const h2El = document.createElement('h2');
        h2El.className = 'product-title';
        h2El.textContent = product.title;

        const descEl = document.createElement('p');
        descEl.className = 'product-desc';
        descEl.textContent = product.description;

        const priceEl = document.createElement('p');
        priceEl.className = 'product-price';
        priceEl.textContent = `Price: $${product.price.toFixed(2)}`;

        const btnEl = document.createElement('button');
        btnEl.className = 'product-button';
        btnEl.textContent = 'Add to Cart';
        btnEl.setAttribute('data-id', product.id);


        liEl.append(imgEl, h2El, descEl, priceEl, btnEl);
        productList.append(liEl);
    });
};

document.addEventListener('DOMContentLoaded', () => {
    addProducts(data);
});