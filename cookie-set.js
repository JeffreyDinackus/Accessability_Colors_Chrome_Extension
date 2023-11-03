
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


// //now using storage api, seems like it makes more sense for my use case and the google cookies docs are garbage