export function orders() {

    new DataTable('table');

    // Валідація форми
    const validation = new JustValidate('#orderForm', {
        errorFieldCssClass: 'is-invalid',
        errorLabelCssClass: 'text-danger mt-1',
        focusInvalidField: true,
    });

    validation
        .addField('#name', [
            {
                rule: 'required',
                errorMessage: 'Введіть ПІБ клієнта',
            },
            {
                validator: (value) => {
                    // Перевірка на рівно 3 слова (не менше, не більше)
                    const words = value.trim().split(/\s+/);
                    return words.length === 3;
                },
                errorMessage: 'ПІБ має складатися з трьох слів (ім’я, прізвище, по батькові)',
            },
        ])
        .addField('#address', [
            {
                rule: 'required',
                errorMessage: 'Введіть адресу доставки',
            },
            {
                rule: 'minLength',
                value: 10,
                errorMessage: 'Адреса повинна містити мінімум 10 символів',
            },
        ])
        .addField('#product', [
            {
                rule: 'required',
                errorMessage: 'Вкажіть товари для замовлення',
            },
            {
                rule: 'minLength',
                value: 3,
                errorMessage: 'Поле товарів занадто коротке',
            },
        ])
        .onSuccess((event) => {
            event.preventDefault();

            // Збір даних з форми
            const formData = new FormData(event.target);

            // Перетворення FormData у звичайний об'єкт
            const newProduct = Object.fromEntries(formData.entries());

            fetch('https://6819e1fb1ac115563506d572.mockapi.io/orders', {
                method: 'POST',
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify(newProduct)
            }).then(() => {
                window.location = '/orders.html';
            })
        });

}