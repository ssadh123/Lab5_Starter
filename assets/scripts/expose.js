// expose.js

window.addEventListener('DOMContentLoaded', init);
function init() {
  console.log("DOM fully loaded and parsed.");
  setupEventListeners();
}

function setupEventListeners() {
  const hornSelect = document.getElementById("horn-select");
  const hornImage = document.querySelector("#horn-image");
  const hornAudio = document.querySelector("#horn-audio");
  const volumeSlider = document.getElementById("volume");
  const volumeIcon = document.getElementById("volume-icon");
  const playButton = document.getElementById("play-button");

  // Event listeners
  hornSelect.addEventListener("change", handleHornSelection);
  volumeSlider.addEventListener("input", handleVolumeChange);
  playButton.addEventListener("click", handlePlaySound);
}

function handleHornSelection() {
  const hornSelect = document.getElementById("horn-select");
  const hornImage = document.querySelector("#horn-image");
  const hornAudio = document.querySelector("#horn-audio");

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
  }

  hornImage.src = imagePath;
  hornAudio.src = audioPath;
}

function handleVolumeChange() {
  const volumeSlider = document.getElementById("volume");
  const volumeIcon = document.getElementById("volume-icon");
  const hornAudio = document.querySelector("#horn-audio");

  const volumeValue = volumeSlider.value;
  hornAudio.volume = volumeValue / 100;  // Convert to range 0 - 1

  if (volumeValue == 0) {
    volumeIcon.src = "./assets/icons/volume-level-0.svg";
  } else if (volumeValue < 33) {
    volumeIcon.src = "./assets/icons/volume-level-1.svg";
  } else if (volumeValue < 67) {
    volumeIcon.src = "./assets/icons/volume-level-2.svg";
  } else {
    volumeIcon.src = "./assets/icons/volume-level-3.svg";
  }

  console.log(`Volume set to: ${hornAudio.volume}`);
}

function handlePlaySound() {
  const hornAudio = document.querySelector("#horn-audio");
  const hornSelect = document.getElementById("horn-select");

  const hornType = hornSelect.value;

  hornAudio.play();

  // Confetti for party horn
  if (hornType === "party-horn") {
    const jsConfetti = new JSConfetti();
    jsConfetti.addConfetti();
  }
}
