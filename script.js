document.addEventListener("DOMContentLoaded", function() {
    // Лінійний графік
    const lineCtx = document.getElementById('lineChart').getContext('2d');
    const lineChart = new Chart(lineCtx, {
        type: 'line',
        data: {
            labels: ['Січ', 'Лют', 'Бер', 'Квіт', 'Трав', 'Черв'],
            datasets: [{
                label: 'Продажі',
                data: [65, 59, 80, 81, 56, 55],
                borderColor: '#E9510E',
                borderWidth: 2,
                fill: false
            }]
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
    const pieCtx = document.getElementById('pieChart').getContext('2d');
    const pieChart = new Chart(pieCtx, {
        type: 'pie',
        data: {
            labels: ['Регіон 1', 'Регіон 2', 'Регіон 3'],
            datasets: [{
                label: 'Продажі',
                data: [300, 50, 100],
                backgroundColor: [
                    '#E9510E',
                    '#EE7202',
                    '#CEDA3E'
                ],
                borderColor: [
                    '#009641',
                    '#009641',
                    '#009641'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true
        }
    });
});
