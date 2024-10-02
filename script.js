// Placeholder for future functionalities (e.g., fetching real-time data)
document.addEventListener("DOMContentLoaded", () => {
    console.log("Driver Health Monitoring System loaded");

    // Sample Data for Health Chart
    const ctx = document.getElementById('healthChart').getContext('2d');
    const healthChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['0', '1', '2', '3', '4', '5'],
            datasets: [{
                label: 'Heart Rate (BPM)',
                data: [70, 75, 80, 85, 90, 85],
                backgroundColor: 'rgba(76, 175, 80, 0.2)',
                borderColor: 'rgba(76, 175, 80, 1)',
                borderWidth: 2,
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
});

const ctxTemperature = document.getElementById('temperatureChart').getContext('2d');
const temperatureChart = new Chart(ctxTemperature, {
    type: 'bar',
    data: {
        labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
        datasets: [{
            label: 'Temperature (°F)',
            data: [98.6, 99.1, 98.7, 98.4],
            backgroundColor: '#ff6384',
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

const ctxPulseRate = document.getElementById('pulseRateChart').getContext('2d');
const pulseRateChart = new Chart(ctxPulseRate, {
    type: 'line',
    data: {
        labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5'],
        datasets: [{
            label: 'Pulse Rate (BPM)',
            data: [70, 75, 80, 70, 72],
            borderColor: '#36a2eb',
            fill: false,
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

const ctxAirQuality = document.getElementById('airQualityChart').getContext('2d');
const airQualityChart = new Chart(ctxAirQuality, {
    type: 'pie',
    data: {
        labels: ['Good', 'Moderate', 'Unhealthy'],
        datasets: [{
            data: [60, 30, 10],
            backgroundColor: ['#4CAF50', '#FFCE56', '#FF6384'],
        }]
    },
    options: {
        responsive: true
    }
});

