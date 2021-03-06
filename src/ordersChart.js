const labels = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July'
];
const data = {
    labels: labels,
    datasets: [{
        label: 'Orders By Month',
        data: [34, 43, 26, 45, 48, 65, 23],
        backgroundColor: [
        '#1F2937',
        '#1F2937',
        '#1F2937',
        '#1F2937',
        '#1F2937',
        '#1F2937',
        '#1F2937'
        ],
        borderColor: [
            '#111827'
        ],
        borderWidth: 2
    }]
};

const config = {
    type: 'bar',
    data: data,
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    },
};

var ordersChart = new Chart(
  document.getElementById('ordersChart'),
  config
);