const revenueLabels = [
    'June 28',
    'June 29',
    'June 30',
    'July 1',
    'July 2',
    'July 3',
    'July 4',
    'July 5',
    'July 6',
    'July 7',
    'July 8',
    'July 9',
    'July 10',
    'July 11',
    'July 12',
    'July 13',
    'July 14',
    'July 15',
    'July 16',
    'July 17',
    'July 18',
    'July 19',
    'July 20',
    'July 21',
    'July 22',
    'July 23',
    'July 24',
    'July 25',
    'July 26',
    'July 27'
];
const revenueData = {
    labels: revenueLabels,
    datasets: [{
        label: 'Daily Revenues',
        data: [],
        fill: 'origin',
        borderColor: '#10B981',
        tension: 0.1,
    }]
};

for(var i = 0; i < 30; i++){
    let min = 30;
    let max = 60;
    let result = 0;
    result = Math.random() * (max - min) + min;
    revenueData.datasets[0].data.push(result);
}
const revenueConfig = {
    type: 'line',
    data: revenueData,
    options: {
        scales: {
        xAxes: [{
            ticks: {
                display: false //this will remove only the label
            }
        }]
    }
    }
};

var revenueChart = new Chart(
    document.getElementById('revenueChart'),
    revenueConfig
);