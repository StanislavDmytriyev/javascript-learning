const input = 1441;

function timeFormatter(input) {
  const hours = Math.floor(input / 60);
  const minutes = input % 60;
  const formattedHours = String(hours).padStart(2, "0");
  const formattedMinutes = String(minutes).padStart(2, "0");
  console.log(`${formattedHours}:${formattedMinutes}`);
}

timeFormatter(input);
