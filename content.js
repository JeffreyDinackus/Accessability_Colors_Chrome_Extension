
console.log("content.js running")


function color() {
  let IBM = {

    "div": "#DC267F", "table": "#648FFF", "a": "", "span": "", "p": "", "body": "#DC267F", "navbar": "#FFB000"


  };

  let Tol = {}

  let Wong = {}


  chrome.storage.sync.get(["key"]).then((result) => {
    console.log("Value currently is " + result.key);


    if (result.key == "IBM") {
      console.log("IBM TRUE");
      // const div = document.querySelectorAll("div");

      // for (let i = 0; i < div.length; i++) {
      //   div[i].style.backgroundColor = '#DC267F';
      //   div[i].style.color = '#FFB000';
      // };

      // const img = document.querySelectorAll("img");

      // for (let i = 0; i < img.length; i++) {
      //   img[i].style.backgroundColor = '';
      //   img[i].style.color = '';
      // };

      color1 = '#FFB000'
      color2 = '#785EF0'
      accent = '#785EF0'
      const code = document.querySelectorAll("code");
      body = document.querySelector("body");
      body.style.backgroundColor = accent

      for (let i = 0; i < code.length; i++) {
        code[i].style.backgroundColor = color1;
        code[i].style.color = accent;
      };

      const li = document.querySelectorAll("li");

      for (let i = 0; i < code.length; i++) {
        li[i].style.backgroundColor = color1;
        li[i].style.color = color2;
      };
      const a = document.querySelectorAll("a");

      for (let i = 0; i < a.length; i++) {
        a[i].style.color = color1;
      };
      const cite = document.querySelectorAll("cite");

      for (let i = 0; i < cite.length; i++) {
        cite[i].style.color = color1;
        cite[i].style.backgroundColor = color2
      };
      const header = document.querySelectorAll("header");

      for (let i = 0; i < header.length; i++) {
        header[i].style.color = color1;
        header[i].style.backgroundColor = color2
      };
      const section = document.querySelectorAll("section");

      for (let i = 0; i < section.length; i++) {
        section[i].style.color = color1;
        section[i].style.backgroundColor = color2
      };
      const div = document.querySelectorAll("div");

      for (let i = 0; i < div.length; i++) {
        div[i].style.color = color2;
      };
      // const textarea = document.querySelectorAll("textarea");
      // for (let i = 0; i < a.length; i++) {
      //   textarea[i].style.backgroundColor = "#FFB000"
      // };

      // const input = document.querySelectorAll("input");
      // for (let i = 0; i < a.length; i++) {
      //   input[i].style.color = '#648FFF';
      //   input[i].style.backgroundColor = "#FFB000"
      // };
      const span = document.querySelectorAll("span");

      for (let i = 0; i < span.length; i++) {
        span[i].style.color = color1;
        span[i].style.backgroundColor = color2
      };
      const button = document.querySelectorAll("button");

      for (let i = 0; i < button.length; i++) {
        button[i].style.backgroundColor = '#FFB000';
      };
      const h1 = document.querySelectorAll("h1");
      for (let i = 0; i < h1.length; i++) {
        h1[i].style.color = '#DC267F';
        h1[i].style.backgroundColor = '#FFB000';

      };

      const p = document.querySelectorAll("p");
      for (let i = 0; i < p.length; i++) {
        p[i].style.color = color1;
        p[i].style.backgroundColor = color2;
      };

      const strong = document.querySelectorAll("strong");
      for (let i = 0; i < p.length; i++) {
        strong[i].style.color = color1;
        strong[i].style.backgroundColor = color2;
      };



      const h2 = document.querySelectorAll("h2");

      const h3 = document.querySelectorAll("h3");

      const h4 = document.querySelectorAll("h4");

      const h5 = document.querySelectorAll("h5");

      const h6 = document.querySelectorAll("h6");

      for (let i = 0; i < h2.length; i++) {
        h2[i].style.color = '#DC267F';
        h2[i].style.backgroundColor = '#FFB000';

      };
      for (let i = 0; i < h3.length; i++) {
        h3[i].style.color = '#DC267F';
        h3[i].style.backgroundColor = '#FFB000';
      };
      for (let i = 0; i < h4.length; i++) {
        h4[i].style.color = color1;
        h4[i].style.backgroundColor = color2;
      };
      for (let i = 0; i < h5.length; i++) {
        h5[i].style.color = color1;
        h5[i].style.backgroundColor = color2;
      };
      for (let i = 0; i < h6.length; i++) {
        h6[i].style.color = color1;
        h6[i].style.backgroundColor = color2;
      };
    } else if (result.key == "Wong") {
      console.log("WONG TRUE");
    } else if (result.key == "Tol") {
      console.log("TOL TRUE");
    };
  });





  // let getting = browser.cookies.get(
  //   details                // object
  // )

  // !!(await Cookies.get('my-cookie'));

  // function getCookies(name, callback) {
  //   chrome.cookies.get({ "name": name }, function (cookie) {
  //     if (callback) {
  //       callback(cookie.value);
  //     }
  //   });
  // }

  // //usage:
  // getCookies("colorblind", function (value) {
  //   console.log(value);
  // });

  // // Change the background color of every even-indexed div
  // let divs = document.getElementsByTagName('div');
  // for (var i = 0; i < divs.length; i += 2) {
  //   divs[i].style.backgroundColor = '#D81B60';
  // }



  // // Change the background color of all paragraphs
  // let paragraphs = document.getElementsByTagName('button');
  // for (var i = 0; i < paragraphs.length; i++) {
  //   paragraphs[i].style.backgroundColor = '#1E88E5';
  // }


  // // Change the background color of all h1 elements
  // let h1 = document.getElementsByTagName('a');
  // for (var i = 0; i < h1.length; i++) {
  //   h1[i].style.backgroundColor = '#004D40';
  // }

  // // Change the background color of the body
  // document.body.style.backgroundColor = '#D81B60';

  // // Change the background color of all h1 elements
  // let span = document.getElementsByTagName('span');
  // for (var i = 0; i < h1.length; i++) {
  //   span[i].style.backgroundColor = '#1E88E5';
  // }

  // // Change the background color of the body
  // document.body.style.backgroundColor = '#D81B60';
}


color()