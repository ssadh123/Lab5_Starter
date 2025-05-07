window.addEventListener('DOMContentLoaded', init);

function init() {
  console.log("DOM fully loaded and parsed.");
  setupEventListeners();
}

function setupEventListeners() {
  const hornSelect = document.getElementById("horn-select");
  const volumeSlider = document.getElementById("volume");
  const playButton = document.querySelector("button");

  // Event listeners
  hornSelect.addEventListener("change", handleHornSelection);
  volumeSlider.addEventListener("input", handleVolumeChange);
  playButton.addEventListener("click", handlePlaySound);
}

function handleHornSelection() {
  const hornSelect = document.getElementById("horn-select");
  const hornImage = document.querySelector("img");
  const hornAudio = document.querySelector("audio");

  const hornType = hornSelect.value;

  let imagePath = "";
  let audioPath = "";

  switch (hornType) {
    case "air-horn":
      imagePath = "./assets/images/air-horn.svg";
      audioPath = "./assets/audio/air-horn.mp3";
      break;
    case "car-horn":
      imagePath = "./assets/images/car-horn.svg";
      audioPath = "./assets/audio/car-horn.mp3";
      break;
    case "party-horn":
      imagePath = "./assets/images/party-horn.svg";
      audioPath = "./assets/audio/party-horn.mp3";
      break;
    default:
      imagePath = "./assets/images/no-image.png";
      audioPath = "";
  }

  hornImage.src = imagePath;
  hornAudio.src = audioPath;
}

function handleVolumeChange() {
  const volumeSlider = document.getElementById("volume");
  const volumeIcon = document.querySelector("#volume-controls img");
  const hornAudio = document.querySelector("audio");

  const volumeValue = volumeSlider.value;
  hornAudio.volume = volumeValue / 100;

  if (volumeValue == 0) {
    volumeIcon.src = "./assets/icons/volume-level-0.svg";
  } else if (volumeValue < 33) {
    volumeIcon.src = "./assets/icons/volume-level-1.svg";
  } else if (volumeValue < 67) {
    volumeIcon.src = "./assets/icons/volume-level-2.svg";
  } else {
    volumeIcon.src = "./assets/icons/volume-level-3.svg";
  }
}

function handlePlaySound() {
  const hornAudio = document.querySelector("audio");
  const hornSelect = document.getElementById("horn-select");
  const hornType = hornSelect.value;

  if (hornAudio.src) {
    hornAudio.play();
  }

  // Confetti for party horn
  if (hornType === "party-horn") {
    launchCanvasConfetti();
  }
}

function launchCanvasConfetti() {
  const canvas = document.createElement("canvas");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  document.body.appendChild(canvas);

  const ctx = canvas.getContext("2d");
  const confettiColors = ["#FFC107", "#FF5722", "#4CAF50", "#2196F3"];

  const confettiPieces = [];

  for (let i = 0; i < 100; i++) {
    confettiPieces.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 10 + 5,
      color: confettiColors[Math.floor(Math.random() * confettiColors.length)],
      velocity: Math.random() * 2 + 1,
      angle: Math.random() * Math.PI * 2,
    });
  }

  function drawConfetti() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    confettiPieces.forEach((piece) => {
      ctx.fillStyle = piece.color;
      ctx.beginPath();
      ctx.arc(piece.x, piece.y, piece.size, 0, Math.PI * 2);
      ctx.fill();
    });

    confettiPieces.forEach((piece) => {
      piece.y += piece.velocity;
      if (piece.y > canvas.height) {
        piece.y = -piece.size;
      }
    });

    requestAnimationFrame(drawConfetti);
  }

  drawConfetti();

  // Remove the canvas after 3 seconds
  setTimeout(() => {
    canvas.remove();
  }, 3000);
}
