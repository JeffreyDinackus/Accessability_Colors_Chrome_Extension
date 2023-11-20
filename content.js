
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



    body = document.querySelector("body");
    body.style.backgroundColor = color1




    const code = document.querySelectorAll("code");

    code.forEach(Elem => {
      Elem.style.setProperty('color', color2, 'important');
      Elem.style.setProperty('background-color', color1, 'important');
    });
    const ul = document.querySelectorAll("ul");

    ul.forEach(Elem => {
      Elem.style.setProperty('color', color2, 'important');
      Elem.style.setProperty('background-color', color1, 'important');
    });
    const ol = document.querySelectorAll("ol");

    ol.forEach(Elem => {
      Elem.style.setProperty('color', color2, 'important');
      Elem.style.setProperty('background-color', color1, 'important');
    });
    const li = document.querySelectorAll("li");

    li.forEach(Elem => {
      Elem.style.setProperty('color', color2, 'important');
      Elem.style.setProperty('background-color', color1, 'important');
    });
    const article = document.querySelectorAll("article");

    article.forEach(Elem => {
      Elem.style.setProperty('color', color2, 'important');
      Elem.style.setProperty('background-color', color1, 'important');
    });
    const cite = document.querySelectorAll("cite");

    cite.forEach(Elem => {
      Elem.style.setProperty('color', color2, 'important');
      Elem.style.setProperty('background-color', color1, 'important');
    });
    const header = document.querySelectorAll("header");

    header.forEach(Elem => {
      Elem.style.setProperty('color', color2, 'important');
      Elem.style.setProperty('background-color', color1, 'important');
    });
    const section = document.querySelectorAll("section");

    section.forEach(Elem => {
      Elem.style.setProperty('color', color2, 'important');
      Elem.style.setProperty('background-color', color1, 'important');
    });



    const rel = document.querySelectorAll("relative-time");
    //for github
    rel.forEach(Elem => {
      Elem.style.setProperty('color', color2, 'important');
      Elem.style.setProperty('background-color', color1, 'important');
    });


    //this just fixes some necessary styling on github, BOO GITHUB. using important styles on their website. 
    const github1 = document.querySelectorAll('.color-fg-muted');

    for (let i = 0; i < github1.length; i++) {
      github1[i].classList.remove("color-fg-muted");

    }


    const span = document.querySelectorAll('span');

    span.forEach(element => {
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

    const yt1 = document.querySelectorAll('yt-formatted-string');

    yt1.forEach(yt1Elem => {
      yt1Elem.style.setProperty('color', color2, 'important');
      yt1Elem.style.setProperty('background-color', color1, 'important');
    });




    // const button = document.querySelectorAll("button");

    // for (let i = 0; i < button.length; i++) {
    //   button[i].style.backgroundColor = color1;
    // };

    const h1 = document.querySelectorAll('h1');

    h1.forEach(h1Elem => {
      h1Elem.style.setProperty('color', color2, 'important');
      h1Elem.style.setProperty('background-color', color1, 'important');
    });



    const pre = document.querySelectorAll("pre");
    pre.forEach(Elem => {
      Elem.style.setProperty('color', color2, 'important');
      Elem.style.setProperty('background-color', color1, 'important');
    });



    const p = document.querySelectorAll("p");
    p.forEach(Elem => {
      Elem.style.setProperty('color', color2, 'important');
      Elem.style.setProperty('background-color', color1, 'important');
    });
    const strong = document.querySelectorAll("strong");
    strong.forEach(Elem => {
      Elem.style.setProperty('color', color2, 'important');
      Elem.style.setProperty('background-color', color1, 'important');
    });



    const h2 = document.querySelectorAll("h2");

    const h3 = document.querySelectorAll("h3");

    const h4 = document.querySelectorAll("h4");

    const h5 = document.querySelectorAll("h5");

    const h6 = document.querySelectorAll("h6");

    h2.forEach(Elem => {
      Elem.style.setProperty('color', color2, 'important');
      Elem.style.setProperty('background-color', color1, 'important');
    });
    h3.forEach(Elem => {
      Elem.style.setProperty('color', color2, 'important');
      Elem.style.setProperty('background-color', color1, 'important');
    });
    h4.forEach(Elem => {
      Elem.style.setProperty('color', color2, 'important');
      Elem.style.setProperty('background-color', color1, 'important');
    });
    h5.forEach(Elem => {
      Elem.style.setProperty('color', color2, 'important');
      Elem.style.setProperty('background-color', color1, 'important');
    });
    h6.forEach(Elem => {
      Elem.style.setProperty('color', color2, 'important');
      Elem.style.setProperty('background-color', color1, 'important');
    });







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
