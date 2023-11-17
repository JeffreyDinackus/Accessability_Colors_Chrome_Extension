
console.log("content.js running")


function color() {
  chrome.storage.sync.get(["key"]).then((result) => {
    console.log("Value currently is " + result.key);
    color1 = ''
    color2 = ''
    accent = ''

    if (result.key == "1") {
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
      color1 = '#1AFF1A'
      color2 = '#4B0092'
      accent = '#4B0092'
    }
    else if (result.key == "6") {
      color1 = '#FEFE62'
      color2 = '#D35FB7'
      accent = '#D35FB7'
    } else if (result.key == "7") {
      color1 = '#005AB5'
      color2 = '#DC3220'
      accent = '#DC3220'
    } else if (result.key == "8") {
      color1 = '#1A85FF'
      color2 = '#D41159'
      accent = '#D41159'
    };

    // const elems = document.querySelectorAll('span');

    // elems.forEach(elem => {
    //   elem.removeAttribute('style');
    // });

    const code = document.querySelectorAll("code");
    body = document.querySelector("body");
    body.style.backgroundColor = color1





    for (let i = 0; i < code.length; i++) {
      code[i].style.backgroundColor = color1;
      code[i].style.color = color2;
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
      div[i].style.color = color2;
      // div[i].style.backgroundColor = color1;
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

    const rel = document.querySelectorAll("relative-time");
    //for github
    for (let i = 0; i < rel.length; i++) {


      rel[i].style.color = color2;
      rel[i].style.backgroundColor = color1
    };
    // for (let i = 0; i < span.length; i++) {
    //   // if (span[i].style.removeProperty) {
    //   //   span[i].style.removeProperty('color');
    //   // } else {
    //   //   span[i].style.removeAttribute('color');
    //   // }
    //   span[i].style.color = color2;
    //   span[i].style.backgroundColor = color1
    // };


    //this just fixes some necessary styling on github, BOO GITHUB. using important styles on their website. 
    const github1 = document.querySelectorAll('.color-fg-muted');

    for (let i = 0; i < github1.length; i++) {
      github1[i].classList.remove("color-fg-muted");

    }


    const elements = document.querySelectorAll('span');

    elements.forEach(element => {
      element.style.setProperty('color', color2, 'important');
      element.style.setProperty('background-color', color1, 'important');
    });
    const summary2 = document.querySelectorAll('summary');

    summary2.forEach(summary23 => {
      summary23.style.setProperty('color', color2, 'important');
      summary23.style.setProperty('background-color', color1, 'important');
    });
    const a2 = document.querySelectorAll('a');

    a2.forEach(a23 => {
      a23.style.setProperty('color', color2, 'important');
      a23.style.setProperty('background-color', color1, 'important');
    });

    const div2 = document.querySelectorAll('div');

    div2.forEach(div23 => {
      div23.style.setProperty('color', color2, 'important');
    });
    const p2 = document.querySelectorAll('p');

    p2.forEach(pElem => {
      pElem.style.setProperty('color', color2, 'important');
      pElem.style.setProperty('background-color', color1, 'important');
    });
    const li2 = document.querySelectorAll('li');

    li2.forEach(liElem => {
      liElem.style.setProperty('color', color2, 'important');
      liElem.style.setProperty('background-color', color1, 'important');
    });
    const button2 = document.querySelectorAll('button');

    button2.forEach(buttonElem => {
      buttonElem.style.setProperty('color', color2, 'important');
      buttonElem.style.setProperty('background-color', color1, 'important');
    });
    const yt1 = document.querySelectorAll(" yt-formatted-string");

    for (let i = 0; i < yt1.length; i++) {
      yt1[i].style.color = color2;
      yt1[i].style.backgroundColor = color1;

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
    const pre = document.querySelectorAll("pre");
    for (let i = 0; i < pre.length; i++) {
      pre[i].style.color = color2;
      pre[i].style.backgroundColor = color1;

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



function observeSearchResults() {
  // identify an element to observe
  const elementToObserve = document.body

  // create a new instance of `MutationObserver` named `observer`,
  // passing it a callback function
  const observer = new MutationObserver(() => {
    console.log("callback that runs when observer is triggered");
    color()
  });

  // call `observe()` on that MutationObserver instance,
  // passing it the element to observe, and the options object
  observer.observe(elementToObserve, { subtree: true, childList: true });
}

// Function to create and configure the MutationObserver


// Call the function to start observing the search results
color()
observeSearchResults();
