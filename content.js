
console.log("content.js running")


function color() {
  chrome.storage.sync.get(["key"]).then((result) => {
    console.log("Value currently is " + result.key);
    color1 = ''
    color2 = ''
    accent = ''

    if (result.key == "1") {
      console.log("X")
      color1 = '#FFC20A';
      color2 = '#0C7BDC';
      accent = '#0C7BDC';

    } else if (result.key == "2") {

      color1 = '#994F00'
      color2 = '#006CD1'
      accent = '#006CD1'

    } else if (result.key == "3") {

      color1 = '#E1BE6A'
      color2 = '#40B0A6'
      accent = '#40B0A6'

    } else if (result.key == "4") {
      color1 = '#E66100'
      color2 = '#5D3A9B'
      accent = '#5D3A9B'
    } else if (result.key == "5") {

    };


    const code = document.querySelectorAll("code");
    body = document.querySelector("body");
    body.style.backgroundColor = accent

    for (let i = 0; i < code.length; i++) {
      code[i].style.backgroundColor = color2;
      code[i].style.color = accent;
    };
    const ul = document.querySelectorAll("ul");

    for (let i = 0; i < ul.length; i++) {
      ul[i].style.backgroundColor = color1;
      ul[i].style.color = color2;
    };
    const ol = document.querySelectorAll("ol");

    for (let i = 0; i < ol.length; i++) {
      ol[i].style.backgroundColor = color1;
      ol[i].style.color = color2;
    };
    const li = document.querySelectorAll("li");

    for (let i = 0; i < li.length; i++) {
      li[i].style.backgroundColor = color1;
      li[i].style.color = color2;
    };
    const a = document.querySelectorAll("a");

    for (let i = 0; i < a.length; i++) {
      a[i].style.color = color2;
      // a[i].style.backgroundColor = color1

    };
    const article = document.querySelectorAll("article");

    for (let i = 0; i < article.length; i++) {
      article[i].style.color = color2;
      article[i].style.backgroundColor = color1

    };
    const cite = document.querySelectorAll("cite");

    for (let i = 0; i < cite.length; i++) {
      cite[i].style.color = color2;
      cite[i].style.backgroundColor = color1
    };
    const header = document.querySelectorAll("header");

    for (let i = 0; i < header.length; i++) {
      header[i].style.color = color2;
      header[i].style.backgroundColor = color1
    };
    const section = document.querySelectorAll("section");

    for (let i = 0; i < section.length; i++) {
      section[i].style.color = color2;
      section[i].style.backgroundColor = color1
    };
    const div = document.querySelectorAll("div");

    for (let i = 0; i < div.length; i++) {
      div[i].style.color = color1;
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
      button[i].style.backgroundColor = color1;
    };
    const h1 = document.querySelectorAll("h1");
    for (let i = 0; i < h1.length; i++) {
      h1[i].style.color = color2;
      h1[i].style.backgroundColor = color1;

    };

    const p = document.querySelectorAll("p");
    for (let i = 0; i < p.length; i++) {
      p[i].style.color = color2;
      p[i].style.backgroundColor = color1;
    };

    const strong = document.querySelectorAll("strong");
    for (let i = 0; i < strong.length; i++) {
      strong[i].style.color = color2;
      strong[i].style.backgroundColor = color1;
    };



    const h2 = document.querySelectorAll("h2");

    const h3 = document.querySelectorAll("h3");

    const h4 = document.querySelectorAll("h4");

    const h5 = document.querySelectorAll("h5");

    const h6 = document.querySelectorAll("h6");

    for (let i = 0; i < h2.length; i++) {
      h2[i].style.color = color2;
      h2[i].style.backgroundColor = color1;

    };
    for (let i = 0; i < h3.length; i++) {
      h3[i].style.color = color2;
      h3[i].style.backgroundColor = color1;
    };
    for (let i = 0; i < h4.length; i++) {
      h4[i].style.color = color2;
      h4[i].style.backgroundColor = color1;
    };
    for (let i = 0; i < h5.length; i++) {
      h5[i].style.color = color2;
      h5[i].style.backgroundColor = color1;
    };
    for (let i = 0; i < h6.length; i++) {
      h6[i].style.color = color2;
      h6[i].style.backgroundColor = color1;
    };







  });


}


color()