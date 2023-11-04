
// function create(value){
//   document.cookie = `name=colorblind; value=${value}`;
// };
// function set(value1){
//   chrome.cookies.set({
//     url: "http://127.0.0.1:5500/",
//     name: "colorblind",
//     value: value1,  
//       domain: "http://127.0.0.1:5500/",  // Specify the domain for which the cookie is valid
//       path: "/",  // Specify the path where the cookie is valid
//       secure: false,  // Set to true for HTTPS-only cookies
//       httpOnly: false,  // Set to true to make the cookie inaccessible via JavaScript
//     });


//   };


// function scheme1() {
//   console.log("xd")

//   //create if statement to see if cookie exists
//   try{chrome.cookies.get(
//     {
//       "name": "colorblind"
//     }, function(cookie){
//       console.log(cookie)
//     }
//   )} catch (error){
//     console.log(error)
//     create("IBM");
//   } 


// };

// Function for Button 1
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
// //now using storage api, seems like it makes more sense for my use case and the google cookies docs are garbage



