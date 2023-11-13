document.getElementById('scheme1').addEventListener('click', function () {
  key = "colorblind"
  value = "1"
  chrome.storage.sync.set({ key: value }).then(() => {
    console.log("Scheme1 is set");

  });
});

document.getElementById('off').addEventListener('click',
  function () {
    key = "colorblind"
    value = "null"
    chrome.storage.sync.set({ key: value }).then(() => {
      console.log("Off is set");
    });
  })

// Function for Button 2
document.getElementById('scheme2').addEventListener('click', function () {
  key = "colorblind"
  value = "2"
  chrome.storage.sync.set({ key: value }).then(() => {
    console.log("Scheme2 is set");
  });
});

// Function for Button 3
document.getElementById('scheme3').addEventListener('click', function () {
  key = "colorblind"
  value = "3"
  chrome.storage.sync.set({ key: value }).then(() => {
    console.log("3 is set");
  });
});

document.getElementById('scheme4').addEventListener('click', function () {
  key = "colorblind"
  value = "4"
  chrome.storage.sync.set({ key: value }).then(() => {
    console.log("4 is set");
  });
});

document.getElementById('scheme5').addEventListener('click', function () {
  key = "colorblind"
  value = "5"
  chrome.storage.sync.set({ key: value }).then(() => {
    console.log("5 is set");
  });
});

document.getElementById('scheme6').addEventListener('click', function () {
  key = "colorblind"
  value = "6"
  chrome.storage.sync.set({ key: value }).then(() => {
    console.log("6 is set");
  });
});

document.getElementById('scheme7').addEventListener('click', function () {
  key = "colorblind"
  value = "7"
  chrome.storage.sync.set({ key: value }).then(() => {
    console.log("7 is set");
  });
});

document.getElementById('scheme8').addEventListener('click', function () {
  key = "colorblind"
  value = "8"
  chrome.storage.sync.set({ key: value }).then(() => {
    console.log("8 is set");
  });
});