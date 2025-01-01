const url = './data.json';
const version = new Date().getTime();

async function getData(url) {
    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log('Полученные данные:', data);
        return data;
    } catch (error) {
        console.log('Ошибка при получении данных:', error.message);
        return null;
    }
}

function getImageUrl(url) {
    return `${url}?v=${version}`;
}

document.addEventListener('DOMContentLoaded', async (e) => {
    const sales = document.querySelector('.sales');

    sales.innerHTML = 'Загрузка...';

    const data = await getData(url);

    if (!data) {
        sales.innerHTML = 'Произошла ошибка при загрузке товаров';
        return;
    }

    sales.innerHTML = '';

    data.forEach(item => {
        sales.insertAdjacentHTML('beforeend', `
                <div class="sales__item">
                    <div class="sales__product__img__container">
                        <img class="sales__photo__products" src="${getImageUrl(item.img)}" alt="${item.title}">
                        <img class="sales__overlay__desktop__products" src="${item.overlay}" alt="overlay_desktop">
                        <div class="sales__btn">
                            <a class="sales__btn__add" href="#"><img class="sales__cart__icon" src="${item.iconCart}" alt="add_to_cart">Add to Cart
                            </a>
                        </div>
                    </div>
                    <div class="sales__title">
                        <p class="sales__name">${item.title}</p>
                        <p class="sales__desc">${item.description}</p>
                        <p class="sales__price">$${item.price}</p>
                    </div>
                </div>
        `)
    });
});