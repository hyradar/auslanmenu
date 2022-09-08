


function showBeerSign(input) {
    let x = document.getElementById("theimgtag");
    let y = document.getElementById("4xgoldbutton");
    let z = document.getElementById("vbbutton");
    let gn = document.getElementById("northbutton");

  switch (input) {
    case "fourx":
        x.src = "gold.gif";
        x.style.display = "block";
        z.style.backgroundColor = "white";
        gn.style.backgroundColor = "white";
        y.style.backgroundColor = "yellow";
        break;

      case "vb":
        x.src = "bitter.gif";
        x.style.display = "block";
        y.style.backgroundColor = "white";
        gn.style.backgroundColor = "white";
        z.style.backgroundColor = "yellow";
        break;

      case "north":
        x.style.display = "none";
        x.src = "north.gif";
        x.style.display = "block";
        y.style.backgroundColor = "white";
        z.style.backgroundColor = "white";
        gn.style.backgroundColor = "yellow";
        break;
  }
}

function showNumberSign(input) {
  let imageTag = document.getElementById("numberimg");
  let oneButton = document.getElementById("onebutton");
  let twoButton = document.getElementById("twobutton");
  let threeButton = document.getElementById("threebutton");
  
  switch (input) {
    case "one":
        imageTag.src = "one.png";
        imageTag.style.display = "block";
        oneButton.style.backgroundColor = "yellow";
        twoButton.style.backgroundColor = "white";
        threeButton.style.backgroundColor = "white";
      break;
    
      case "two":
        imageTag.src = "two.png";
        imageTag.style.display = "block";
        oneButton.style.backgroundColor = "white";
        twoButton.style.backgroundColor = "yellow";
        threeButton.style.backgroundColor = "white";
      break;

      case "three":
        imageTag.src = "three.png";
        imageTag.style.display = "block";
        oneButton.style.backgroundColor = "white";
        twoButton.style.backgroundColor = "white";
        threeButton.style.backgroundColor = "yellow";
      break;
  }
}

function showEndingSign(input) {
  let imageTag = document.getElementById("endingimg");
  let thanksbutton = document.getElementById("thanksbutton");
  let pleasebutton = document.getElementById("pleasebutton");
  let yourewelcomebutton = document.getElementById("yourewelcomebutton");
  let andbutton = document.getElementById("andbutton");

  switch (input) {
    case "thanks":
      imageTag.src = "thanks.gif";
      thanksbutton.style.backgroundColor = "yellow";
      pleasebutton.style.backgroundColor = "white";
      yourewelcomebutton.style.backgroundColor = "white";
      andbutton.style.backgroundColor = "white";
      break;

    case "please":
      imageTag.src = "please.gif";
      thanksbutton.style.backgroundColor = "white";
      pleasebutton.style.backgroundColor = "yellow";
      yourewelcomebutton.style.backgroundColor = "white";
      andbutton.style.backgroundColor = "white";
      break;

    case "yourewelcome":
      imageTag.src = "yourewelcome.gif";
      thanksbutton.style.backgroundColor = "white";
      pleasebutton.style.backgroundColor = "white";
      yourewelcomebutton.style.backgroundColor = "yellow";
      andbutton.style.backgroundColor = "white";
      break;

      case "and":
      imageTag.src = "and.gif";
      thanksbutton.style.backgroundColor = "white";
      pleasebutton.style.backgroundColor = "white";
      yourewelcomebutton.style.backgroundColor = "white";
      andbutton.style.backgroundColor = "yellow";
      break;
  }
}