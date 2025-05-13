export function handleAddproduct(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const product = Object.fromEntries(formData.entries());

    fetch('https://6819e1fb1ac115563506d572.mockapi.io/products', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(product),
    })
        .then(() => {
            window.location.href = '/products.html';
        })
        .catch(error => {
            console.error('Помилка при додаванні товару:', error);
            alert('Сталася помилка. Спробуйте ще раз.');
        });
}
