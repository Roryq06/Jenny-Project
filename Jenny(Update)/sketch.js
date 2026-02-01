// ===== SETTINGS =====
const boyfriendBirthday = "06/04/2006";

// ===== VARIABLES =====
let birthdayInput, submitButton;
let message = "";

let screenState = "birthday";
// "birthday", "gif", "surprise", "loading", "bouef", "escape", "final"

let yesButton, noButton;
let continueButtonLol, continueButtonBouef;
let escapeYesButton, escapeNoButton;

let minionGif, minionImage2, girlfriendImg, ladyGif, escapeImg, fireworksGif;

let loadStartTime = null;
let loadProgress = 0;

// ===== PRELOAD =====
function preload() {
  minionGif = loadImage("minions-coquette.gif");
  minionImage2 = loadImage("download.jpg");
  girlfriendImg = loadImage("IMG_6482.jpeg");
  ladyGif = loadImage("lady-and-the-tramp-dogs.gif");
  escapeImg = loadImage("cover-full-margin-bottom.webp");
  fireworksGif = loadImage("72df1764704da24e2b76cf283a13e621.gif");
}

// ===== SETUP =====
function setup() {
  createCanvas(600, 400);
  textAlign(CENTER, CENTER);
  noStroke();

  birthdayInput = createInput("");
  birthdayInput.attribute("placeholder", "e.g. 28/04/2004");
  birthdayInput.position(width / 2 - 90, height / 2 + 40);
  birthdayInput.size(180);
  styleInput(birthdayInput);

  submitButton = createButton("Continue");
  submitButton.position(width / 2 - 50, height / 2 + 80);
  styleButton(submitButton);
  submitButton.mousePressed(checkBirthday);

  yesButton = createButton("Yes");
  yesButton.position(width / 2 - 70, height / 2 + 120);
  styleButton(yesButton);
  yesButton.mousePressed(() => {
    screenState = "surprise";
    yesButton.hide();
    noButton.hide();
    continueButtonLol.show();
  });
  yesButton.hide();

  noButton = createButton("No");
  noButton.position(width / 2 + 10, height / 2 + 120);
  styleButton(noButton);
  noButton.hide();

  continueButtonLol = createButton("Continue");
  continueButtonLol.position(width / 2 - 50, height / 2 + 140);
  styleButton(continueButtonLol);
  continueButtonLol.mousePressed(() => {
    screenState = "loading";
    continueButtonLol.hide();
    loadStartTime = null;
    loadProgress = 0;
  });
  continueButtonLol.hide();

  continueButtonBouef = createButton("Continue");
  continueButtonBouef.position(width / 2 - 50, height - 50);
  styleButton(continueButtonBouef);
  continueButtonBouef.mousePressed(() => {
    screenState = "escape";
    continueButtonBouef.hide();
    escapeYesButton.show();
    escapeNoButton.show();
  });
  continueButtonBouef.hide();

  escapeYesButton = createButton("Yes");
  escapeYesButton.position(width / 2 - 80, height - 60);
  styleButton(escapeYesButton);
  escapeYesButton.mousePressed(() => {
    screenState = "final";
    escapeYesButton.hide();
    escapeNoButton.hide();
  });
  escapeYesButton.hide();

  escapeNoButton = createButton("No");
  escapeNoButton.position(width / 2 + 20, height - 60);
  styleButton(escapeNoButton);
  escapeNoButton.mousePressed(() => {
    screenState = "final";
    escapeYesButton.hide();
    escapeNoButton.hide();
  });
  escapeNoButton.hide();
}

// ===== DRAW =====
function draw() {
  drawBackground();

  if (screenState === "birthday") drawBirthdayScreen();
  else if (screenState === "gif") drawGifScreen();
  else if (screenState === "surprise") drawLolScreen();
  else if (screenState === "loading") drawLoadingScreen();
  else if (screenState === "bouef") drawBouefScreen();
  else if (screenState === "escape") drawEscapeScreen();
  else if (screenState === "final") drawFinalScreen();
}

// ===== SCREENS =====

function drawBirthdayScreen() {
  fill(255);

  textSize(34);
  text("Hello Jenny 💕", width / 2, height / 2 - 110);

  textSize(20);
  text("Welcome to your surprise", width / 2, height / 2 - 70);

  textSize(14);
  text("Please enter your boyfriend’s birthday to continue",
       width / 2, height / 2 - 20);

  if (message) {
    text(message, width / 2, height / 2 + 130);
  }
}

function drawGifScreen() {
  fill(255);

  textSize(30);
  text("Well Done 🎉", width / 2, 40);

  textSize(14);
  text("Would have been awkward if you had got that wrong 😅",
       width / 2, 70);

  image(minionGif, width / 2 - 80, 120, 160, 160);

  textSize(16);
  text("Do you want to know your surprise?",
       width / 2, 300);
}

function drawLolScreen() {
  fill(255);

  textSize(40);
  text("LOL", width / 2, 60);

  textSize(16);
  text("Did you really think it’d be that easy?",
       width / 2, 100);

  image(minionImage2, width / 2 - 100, 140, 200, 180);
}

function drawLoadingScreen() {
  fill(255);

  if (loadStartTime === null) loadStartTime = millis();
  loadProgress = constrain((millis() - loadStartTime) / 20000, 0, 1);

  textSize(26);
  text("Surprise is loading...", width / 2, 70);

  const barW = 320;
  const barX = width / 2 - barW / 2;
  const barY = height / 2 + 60;

  noFill();
  stroke(255);
  rect(barX, barY, barW, 18, 10);

  noStroke();
  fill(255);
  rect(barX, barY, barW * loadProgress, 18, 10);

  image(girlfriendImg, barX + barW * loadProgress - 40, barY - 110, 80, 100);

  if (loadProgress >= 1) {
    screenState = "bouef";
    continueButtonBouef.show();
  }
}

function drawBouefScreen() {
  fill(255);

  textSize(30);
  text("Okay", width / 2, 40);

  textSize(16);
  text(
    "So as you know we are going to Bouef Burgers on Valentine’s Day",
    width / 2, 80
  );

  image(ladyGif, width / 2 - 140, 120, 280, 160);

  textSize(18);
  text("But is that all we are doing? 👀",
       width / 2, 310);
}

function drawEscapeScreen() {
  fill(255);

  textSize(34);
  text("Surprise", width / 2, 50);

  textSize(16);
  text(
    "At 8:30 on Valentine’s Day you are invited to an escape room",
    width / 2, 90
  );

  image(escapeImg, width / 2 - 160, 110, 320, 200);

  textSize(18);
  text("Do you accept invitation?", width / 2, 330);
}

function drawFinalScreen() {
  fill(255);

  textSize(40);
  text("WAHEYYYYY 🎉", width / 2, 60);

  image(fireworksGif, width / 2 - 150, 100, 300, 180);

  textSize(22);
  text("I can’t wait 💕", width / 2, 320);
}

// ===== HELPERS =====

function drawBackground() {
  for (let y = 0; y < height; y++) {
    stroke(lerpColor(color(255,190,215), color(170,90,140), y / height));
    line(0, y, width, y);
  }
  noStroke();
}

function styleInput(i) {
  i.style("padding","8px");
  i.style("border-radius","20px");
  i.style("border","none");
  i.style("text-align","center");
}

function styleButton(b) {
  b.style("padding","8px 18px");
  b.style("border-radius","20px");
  b.style("border","none");
  b.style("background","#ff8fb6");
  b.style("color","#3b0020");
  b.style("cursor","pointer");
}

function checkBirthday() {
  if (birthdayInput.value() === boyfriendBirthday) {
    message = "Correct! 💕";
    screenState = "gif";
    birthdayInput.hide();
    submitButton.hide();
    yesButton.show();
    noButton.show();
  } else {
    message = "That doesn’t seem right — try again 💗";
  }
}
