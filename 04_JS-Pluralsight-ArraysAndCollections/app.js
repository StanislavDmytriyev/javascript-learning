// Charts
let ctx = document.getElementById("montlySales").getContext("2d");
let pieCtx = document.getElementById("deptSales").getContext("2d");

let monthlySales = Array.of(12, 9, 3);
let montlyLabels = Array.of("Oct", "Nov", "Dec");

let deptSales = Array.of(12, 9, 3);
let deptLabels = Array.of("Hiking", "Running", "Hunting");
//bar
var montlySalesChart = new Chart(ctx, {
  type: "bar",
  data: {
    labels: montlyLabels,
    datasets: [
      {
        label: "# of Sales",
        data: monthlySales,
        backgroundColor: [
          "rgba(238, 184, 104, 1",
          "rgba(75, 166, 223, 1)",
          "rgba(239, 118, 122, 1)",
        ],
        borderwidth: 0,
      },
    ],
  },
  options: {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  },
});
