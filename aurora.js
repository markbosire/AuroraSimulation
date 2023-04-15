const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// Define the colors of the aurora
const colors = ["#00ff00", "#ffff00", "#ff00ff"];

function update() {
  // Read the values of the sliders and the dropdown menu
  const speed = document.getElementById("speed").value;
  const size = document.getElementById("size").value;
  const density = document.getElementById("density").value;
  const gas = document.getElementById("gas").value;

  // Clear the canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Simulate the interaction between the solar wind and the atmosphere
  // and draw the resulting aurora
  for (let i = 0; i < density; i++) {
    const x = Math.random() * canvas.width;
    const y = Math.random() * canvas.height;
    const color = gas === "oxygen" ? "#00ff00" : "#ff00ff";
    const sizeValue = Math.random() * size;
    ctx.beginPath();
    ctx.arc(x, y, sizeValue, 0, 2 * Math.PI);
    ctx.fillStyle = color;
    ctx.fill();
  }

  // Call the update function again on the next frame
  setTimeout(update, 1000 / speed);
}
// Start the animation loop
update();
