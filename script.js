document.addEventListener("DOMContentLoaded", function() {
    // Інтерактивні графіки
    const lineCtx = document.getElementById('lineChart').getContext('2d');
    const pieCtx = document.getElementById('pieChart').getContext('2d');

    // Завантаження даних з Excel файлу
    fetch('/mnt/data/Нутріванти.xlsx').then(response => response.arrayBuffer()).then(data => {
        const workbook = XLSX.read(data, {type: 'array'});
        const sheet = workbook.Sheets[workbook.SheetNames[0]];
        const jsonData = XLSX.utils.sheet_to_json(sheet);

        const labels = jsonData.map(row => row['Місяць']);
        const salesDataBefore = jsonData.map(row => row['Продажі до']);
        const salesDataAfter = jsonData.map(row => row['Продажі після']);
        const regionSales = jsonData.map(row => row['Регіон продажів']);

        // Лінійний графік
        const lineChart = new Chart(lineCtx, {
            type: 'line',
            data: {
                labels: labels,
                datasets: [
                    {
                        label: 'Продажі до',
                        data: salesDataBefore,
                        borderColor: '#E9510E',
                        borderWidth: 1
                    },
                    {
                        label: 'Продажі після',
                        data: salesDataAfter,
                        borderColor: '#009641',
                        borderWidth: 1
                    }
                ]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });

        // Кругова діаграма
        const pieChart = new Chart(pieCtx, {
            type: 'pie',
            data: {
                labels: ['Регіон 1', 'Регіон 2', 'Регіон 3'],
                datasets: [{
                    data: regionSales,
                    backgroundColor: [
                        '#E9510E',
                        '#EE7202',
                        '#CEDA3E'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true
            }
        });

        // Заповнення таблиці
        const tableBody = document.querySelector('#salesTable tbody');
        jsonData.forEach(data => {
            const row = document.createElement('tr');
            row.innerHTML = `<td>${data['Магазин']}</td><td>${data['Місто']}</td><td>${data['Продажі до']}</td><td>${data['Продажі після']}</td>`;
            tableBody.appendChild(row);
        });
    });
});
