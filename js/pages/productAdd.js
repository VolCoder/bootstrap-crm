import { handleAddproduct } from "../app/handleAddproduct.js";

export function productAdd() {
    const form = document.querySelector('#formAddProduct');
    if (!form) return;

    const validation = new JustValidate('#formAddProduct', {
        errorFieldCssClass: 'is-invalid',
        errorLabelCssClass: 'text-danger mt-1',
        focusInvalidField: true,
    });

    validation
        .addField('#title', [
            { rule: 'required', errorMessage: 'Введіть назву товару' },
            { rule: 'minLength', value: 3, errorMessage: 'Назва повинна містити щонайменше 3 символи' },
        ])
        .addField('#amount', [
            { rule: 'required', errorMessage: 'Введіть кількість' },
            {
                validator: value => /^\d+$/.test(value) && +value > 0,
                errorMessage: 'Кількість має бути додатнім числом',
            },
        ])
        .addField('#article', [
            { rule: 'required', errorMessage: 'Введіть артикул' },
            { rule: 'minLength', value: 3, errorMessage: 'Артикул повинен містити мінімум 3 символи' },
        ])
        .addRequiredGroup('[name="available"]', 'Оберіть наявність товару')
        .onSuccess(handleAddproduct);
}
