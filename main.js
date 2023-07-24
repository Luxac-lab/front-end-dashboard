const chart = document.querySelector("#chart").getContext("2d");

//create new chart.........
new Chart(chart, {
  type: "line",
  data: {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],

    datasets: [
      {
        label: "BTC",
        data: [
          67263, 17262, 50763, 12372, 20000, 23632, 21021, 28621, 23763, 21371,
          32761, 23732,
        ],
        borderColor: "red",
        borderWidth: 2,
      },
      {
        label: "ETH",
        data: [
          33833, 36762, 23484, 32722, 64137, 50000, 10248, 38721, 27378, 27849,
          70733, 72832,
        ],
        borderColor: "blue",
        borderWidth: 2,
      },
    ],
  },
  options: {
    responsive: true,
  },
});

//menu or hide sidebar
const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");
const sidebar = document.querySelector("aside");

menuBtn.addEventListener("click", () => {
  sidebar.style.display = "block";
});

closeBtn.addEventListener("click", () => {
  sidebar.style.display = "none";
});

//change theme
const themeBtn = document.querySelector(".theme-btn");

themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");

  themeBtn.querySelector("span:first-child").classList.toggle("active");
  themeBtn.querySelector("span:last-child").classList.toggle("active");
});

const footerText = document.getElementById("footer-text");
const currentYear = new Date().getFullYear();
footerText.innerText =
  "© " + currentYear + " Luxac Dashboard Project. All rights reserved.";
