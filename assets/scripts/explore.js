// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  console.log("DOM fully loaded and parsed.");
  setupExploreEventListeners();
  loadVoices();
}

function setupExploreEventListeners() {
  const speakButton = document.getElementById("speak-button");
  const textInput = document.getElementById("text-input");
  const voiceSelect = document.getElementById("voice-select");
  const faceImage = document.getElementById("face-image");

  // Event listener for the speak button
  speakButton.addEventListener("click", function() {
    const text = textInput.value;
    const selectedVoice = voiceSelect.value;
    speakText(text, selectedVoice, faceImage);
  });
}

function loadVoices() {
  const voiceSelect = document.getElementById("voice-select");
  const synth = window.speechSynthesis;
  let voices = synth.getVoices();

  // Populate the dropdown with available voices
  voices.forEach((voice) => {
    const option = document.createElement("option");
    option.textContent = `${voice.name} (${voice.lang})`;
    option.value = voice.name;
    voiceSelect.appendChild(option);
  });

  // If voices are not loaded, try to load again
  if (voices.length === 0) {
    synth.onvoiceschanged = () => {
      voices = synth.getVoices();
      loadVoices();
    };
  }
}

function speakText(text, selectedVoice, faceImage) {
  const synth = window.speechSynthesis;
  const utterance = new SpeechSynthesisUtterance(text);
  const voices = synth.getVoices();

  // Find the selected voice
  utterance.voice = voices.find((voice) => voice.name === selectedVoice);

  // Open mouth while speaking
  faceImage.src = "./assets/images/smiling-open.png";

  // Event when speaking ends
  utterance.onend = () => {
    faceImage.src = "./assets/images/smiling.png";
  };

  // Speak the text
  synth.speak(utterance);
}
