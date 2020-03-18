new Chart(document.getElementById('firstChart'), {
  type: 'doughnut',
  data: {
    labels: ['China', 'Italie', 'Iran', 'Espagne', 'République de Corée', 'France', 'Allemagne', 'Etats-Unis'],
    datasets: [
      {
        label: 'Nombre de personnes infectées par pays:',
        backgroundColor: [
          'rgba(216,40,16, 1)',
          'rgba(0,142,68, 1)',
          '#FF1493',
          'rgba(248,191,0, 1)',
          'rgba(0, 0, 0, 1)',
          '#852bc2',
          'rgba(0,34,145, 1)',
          'rgba(191,47,64, 1)'
        ],
        data: [81116, 27980, 14991, 9191, 8320, 6573, 6012, 3503]
      }
    ]
  },
  options: {
    title: {
      display: true,
      text: 'Nombre de personnes infectées par pays:'
    }
  }
})

new Chart(document.getElementById("secondChart"), {
  type: 'radar',
  data: {
    labels: ['China', 'Italie', 'Iran', 'Espagne', 'République de Corée', 'France', 'Allemagne', 'Etats-Unis'],
    datasets: [{
      label: "% de morts par rapport au nombre d\'inféctés ",
      fill: true,
      backgroundColor: "rgba(255,99,132,0.2)",
      borderColor: "rgba(255,99,132,1)",
      pointBorderColor: "#fff",
      pointBackgroundColor: "rgba(255,99,132,1)",
      pointBorderColor: "#fff",
      data: [3.98, 8.95, 5.69, 3.36, 0.97, 2.25, 0.22, 1.66]
    }]
  },
  options: {
    title: {
      display: true,
      text: '% de morts par rapport au nombre d\'inféctés'
    }
  }
});
