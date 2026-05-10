// Configuration du graphique des cotes (Version simple sans build)
const data = [
  { time: 'J-7', equipeA: 2.10, matchNul: 3.20, equipeB: 3.40 },
  { time: 'J-5', equipeA: 2.05, matchNul: 3.25, equipeB: 3.50 },
  { time: 'J-3', equipeA: 1.95, matchNul: 3.30, equipeB: 3.80 },
  { time: 'J-1', equipeA: 1.85, matchNul: 3.40, equipeB: 4.10 },
  { time: 'Jour-J', equipeA: 1.80, matchNul: 3.50, equipeB: 4.30 },
];

function initChart() {
    const ctx = document.getElementById('oddsChartCanvas');
    if (!ctx) return;

    // Ajout d'un canvas si non présent
    if (ctx.tagName !== 'CANVAS') {
        ctx.innerHTML = '<canvas id="myChart"></canvas>';
        renderChart(document.getElementById('myChart'));
    } else {
        renderChart(ctx);
    }
}

function renderChart(canvasElement) {
    new Chart(canvasElement, {
        type: 'line',
        data: {
            labels: data.map(d => d.time),
            datasets: [
                {
                    label: 'Victoire Équipe A',
                    data: data.map(d => d.equipeA),
                    borderColor: '#60a5fa',
                    backgroundColor: 'transparent',
                    borderWidth: 3,
                    tension: 0.4,
                    pointBackgroundColor: '#111827',
                    pointRadius: 4
                },
                {
                    label: 'Match Nul',
                    data: data.map(d => d.matchNul),
                    borderColor: '#9ca3af',
                    backgroundColor: 'transparent',
                    borderWidth: 3,
                    tension: 0.4,
                    pointBackgroundColor: '#111827',
                    pointRadius: 4
                },
                {
                    label: 'Victoire Équipe B',
                    data: data.map(d => d.equipeB),
                    borderColor: '#f87171',
                    backgroundColor: 'transparent',
                    borderWidth: 3,
                    tension: 0.4,
                    pointBackgroundColor: '#111827',
                    pointRadius: 4
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: { color: '#d1d5db', padding: 20, font: { size: 14 } }
                },
                tooltip: {
                    backgroundColor: '#1f2937',
                    titleColor: '#f3f4f6',
                    bodyColor: '#d1d5db',
                    padding: 12,
                    borderColor: '#374151',
                    borderWidth: 1
                }
            },
            scales: {
                x: {
                    grid: { color: '#374151', display: false },
                    ticks: { color: '#9ca3af' }
                },
                y: {
                    grid: { color: '#374151' },
                    ticks: { color: '#9ca3af' }
                }
            }
        }
    });
}

// Initialisation au chargement de la page
document.addEventListener('DOMContentLoaded', initChart);
