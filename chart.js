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
    const ctx = canvasElement.getContext('2d');
    
    // Gradients
    const gradientA = ctx.createLinearGradient(0, 0, 0, 400);
    gradientA.addColorStop(0, 'rgba(0, 82, 255, 0.4)');
    gradientA.addColorStop(1, 'rgba(0, 82, 255, 0)');

    const gradientB = ctx.createLinearGradient(0, 0, 0, 400);
    gradientB.addColorStop(0, 'rgba(248, 113, 113, 0.4)');
    gradientB.addColorStop(1, 'rgba(248, 113, 113, 0)');

    new Chart(canvasElement, {
        type: 'line',
        data: {
            labels: data.map(d => d.time),
            datasets: [
                {
                    label: 'Victoire Équipe A',
                    data: data.map(d => d.equipeA),
                    borderColor: '#0052FF',
                    backgroundColor: gradientA,
                    fill: true,
                    borderWidth: 3,
                    tension: 0.4,
                    pointBackgroundColor: '#0052FF',
                    pointBorderColor: '#fff',
                    pointRadius: 6,
                    pointHoverRadius: 8
                },
                {
                    label: 'Match Nul',
                    data: data.map(d => d.matchNul),
                    borderColor: '#94A3B8',
                    backgroundColor: 'transparent',
                    borderWidth: 2,
                    borderDash: [5, 5],
                    tension: 0.4,
                    pointRadius: 0
                },
                {
                    label: 'Victoire Équipe B',
                    data: data.map(d => d.equipeB),
                    borderColor: '#F87171',
                    backgroundColor: gradientB,
                    fill: true,
                    borderWidth: 3,
                    tension: 0.4,
                    pointBackgroundColor: '#F87171',
                    pointBorderColor: '#fff',
                    pointRadius: 6,
                    pointHoverRadius: 8
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: { 
                        color: '#94A3B8', 
                        usePointStyle: true,
                        padding: 25,
                        font: { size: 14, weight: '600' } 
                    }
                },
                tooltip: {
                    backgroundColor: '#1E293B',
                    titleColor: '#fff',
                    bodyColor: '#94A3B8',
                    padding: 16,
                    borderColor: 'rgba(255,255,255,0.1)',
                    borderWidth: 1,
                    displayColors: true,
                    boxPadding: 8
                }
            },
            scales: {
                x: {
                    grid: { display: false },
                    ticks: { color: '#64748B', font: { size: 12 } }
                },
                y: {
                    grid: { color: 'rgba(148, 163, 184, 0.1)' },
                    ticks: { color: '#64748B', font: { size: 12 } }
                }
            }
        }
    });
}

// Initialisation au chargement de la page
document.addEventListener('DOMContentLoaded', initChart);
