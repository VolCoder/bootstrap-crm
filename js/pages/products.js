export function products() {
    // data table library
    new DataTable('#product-table');



    document.addEventListener('DOMContentLoaded', function () {
        const tableBody = document.querySelector('#product-table tbody');

        if (tableBody) {
            fetch('https://6819e1fb1ac115563506d572.mockapi.io/products')
                .then(response => response.json())
                .then(products => {
                    tableBody.innerHTML = ''; // Очищаємо старі рядки

                    products.forEach(product => {
                        const row = document.createElement('tr');

                        row.innerHTML = `
                        <td>${product.id}</td>
                        <td>${product.title}</td>
                        <td>${product.amount || 0}</td>
                        <td>
                            <span class="badge ${product.available == 'yes' ? 'bg-success' : 'bg-danger'}">
                                ${product.available == 'yes' ? 'В наявності' : 'Немає'}
                            </span>
                        </td>
                        <td>
                            <div class="dropdown">
                                <button class="btn btn-light btn-none-bg" data-bs-toggle="dropdown">
                                    <svg><use href="#icon-dot"></use></svg>
                                </button>
                                <ul class="dropdown-menu dropdown-menu-lg-end">
                                    <li><a class="dropdown-item" href="#">Edit</a></li>
                                    <li class="dropdown-divider"></li>
                                    <li><a class="dropdown-item text-danger" href="#">Delete</a></li>
                                </ul>
                            </div>
                        </td>
                    `;
                        tableBody.appendChild(row);
                    });

                    // Ініціалізуємо DataTable після вставлення рядків
                    new DataTable('#product-table');
                })
                .catch(error => {
                    console.error('Помилка при завантаженні продуктів:', error);
                });
        }
    });


}