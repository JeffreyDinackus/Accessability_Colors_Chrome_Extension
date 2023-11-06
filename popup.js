document.getElementById('scheme1').addEventListener('click', function () {
  key = "colorblind"
  value = "IBM"
  chrome.storage.sync.set({ key: value }).then(() => {
    console.log("IBM is set");
  });
});

// Function for Button 2
document.getElementById('scheme2').addEventListener('click', function () {
  key = "colorblind"
  value = "WONG"
  chrome.storage.sync.set({ key: value }).then(() => {
    console.log("Wong is set");
  });
});

// Function for Button 3
document.getElementById('scheme3').addEventListener('click', function () {
  key = "colorblind"
  value = "Tol"
  chrome.storage.sync.set({ key: value }).then(() => {
    console.log("Tol is set");
  });
});