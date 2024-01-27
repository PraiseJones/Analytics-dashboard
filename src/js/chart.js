const ctx = document.getElementById('myChart').getContext('2d');

function createGradient(ctx) {
  const gradient = ctx.createLinearGradient(0, 0, 0, 400);
  gradient.addColorStop(0, 'rgba(52, 202, 165, 1)');
  gradient.addColorStop(1, 'rgba(52, 202, 165, 0.10)');
  return gradient;
}

new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Jui', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [{
      data: [6000, 21000, 4500, 28000, 8000, 45000, 9000, 23000, 31000, 6400, 34000, 28000],
      borderWidth: 1,
      borderRadius: 500,
      backgroundColor: 'rgba(52, 202, 165, 0.10)',
      hoverBackgroundColor: createGradient(ctx),
    }]
  },
  options: {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 5000
        },
        color: '#ffffff'
      },
      x: {
        grid:{
          display: false,
        },
      }
      
    },
    plugins: {
      legend: {
        display: false
      }
    },
  }
});
