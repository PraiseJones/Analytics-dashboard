const ctx = document.getElementById('myChart');

function createGradient(ctx, f, toColor) {
  const gradient = ctx.createLinearGradient(0, 0, 0, 400); // Adjust height as needed
  gradient.addColorStop(0, fromColor);
  gradient.addColorStop(1, toColor);
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
      hoverBackgroundColor: '(180deg, #34CAA5 0%, rgba(52, 202, 165, 0.00) 100%)',
    }]
  },
  options: {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true
      }
    },
    plugins: {
    legend: {
      display: false
    }
    },
  }
});