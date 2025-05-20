// ================================
// JavaScript Events - Notes with Examples
// ================================

// 1. Mouse Events
// These events are triggered by mouse actions.

// onclick - Triggered when an element is clicked
const btnClick = document.getElementById("btnClick");
btnClick.onclick = function () {
  alert("Button Clicked");
};

// ondblclick - Triggered on double-click
btnClick.ondblclick = function () {
  alert("Button Double-Clicked");
};

// oncontextmenu - Triggered on right-click
btnClick.oncontextmenu = function () {
  alert("Right-clicked");
};

// onmousedown - Mouse button pressed
btnClick.onmousedown = function () {
  console.log("Mouse Down");
};

// onmouseup - Mouse button released
btnClick.onmouseup = function () {
  console.log("Mouse Up");
};

// onmouseover - When the mouse pointer enters an element
btnClick.onmouseover = function () {
  btnClick.style.backgroundColor = "lightblue";
};

// onmouseout - When the mouse pointer leaves an element
btnClick.onmouseout = function () {
  btnClick.style.backgroundColor = "white";
};

// onmousemove - When the mouse moves within an element
btnClick.onmousemove = function () {
  console.log("Mouse is moving inside the button");
};


// 2. Keyboard Events
// Triggered by keyboard interactions.

// onkeydown - When a key is pressed
// onkeypress - When a key is pressed (deprecated, use keydown instead)
// onkeyup - When a key is released
document.addEventListener("keydown", function (event) {
  console.log("Key Down: " + event.key);
});

document.addEventListener("keyup", function (event) {
  console.log("Key Up: " + event.key);
});


// 3. Form Events
// Triggered during form input and submission

const form = document.getElementById("myForm");

// onsubmit - When the form is submitted
form.onsubmit = function (e) {
  e.preventDefault();
  alert("Form submitted");
};

// onfocus - When an input gains focus
const nameInput = document.getElementById("name");
nameInput.onfocus = function () {
  nameInput.style.backgroundColor = "#e0f7fa";
};

// onblur - When an input loses focus
nameInput.onblur = function () {
  nameInput.style.backgroundColor = "";
};

// onchange - When the value changes
nameInput.onchange = function () {
  console.log("Value changed to: " + nameInput.value);
};

// oninput - While typing (every keystroke)
nameInput.oninput = function () {
  console.log("Input: " + nameInput.value);
};


// 4. Window Events
// Related to the browser window itself

// onload - When the page loads
window.onload = function () {
  console.log("Page Loaded");
};

// onunload - When the page is about to unload (not reliable in modern browsers)
window.onunload = function () {
  console.log("Page Unloading");
};

// onresize - When the window is resized
window.onresize = function () {
  console.log("Window Resized");
};

// onscroll - When the window or element is scrolled
window.onscroll = function () {
  console.log("Page Scrolled");
};


// 5. Clipboard Events
// Related to copy-paste actions

nameInput.oncopy = function () {
  alert("You copied text");
};

nameInput.oncut = function () {
  alert("You cut text");
};

nameInput.onpaste = function () {
  alert("You pasted text");
};


// 6. Drag and Drop Events
// Used for draggable elements

const draggable = document.getElementById("drag");
const dropzone = document.getElementById("dropzone");

draggable.ondragstart = function (e) {
  e.dataTransfer.setData("text", draggable.id);
};

dropzone.ondragover = function (e) {
  e.preventDefault();
};

dropzone.ondrop = function (e) {
  e.preventDefault();
  const data = e.dataTransfer.getData("text");
  dropzone.appendChild(document.getElementById(data));
};


// 7. Media Events
// Used with video and audio elements

const video = document.getElementById("myVideo");

video.onplay = function () {
  console.log("Video playing");
};

video.onpause = function () {
  console.log("Video paused");
};

video.onended = function () {
  console.log("Video ended");
};


// 8. Touch Events (for mobile devices)
// ontouchstart, ontouchend, ontouchmove

const touchArea = document.getElementById("touchMe");

touchArea.ontouchstart = function () {
  console.log("Touch started");
};

touchArea.ontouchmove = function () {
  console.log("Touch moving");
};

touchArea.ontouchend = function () {
  console.log("Touch ended");
};

// JavaScript Advanced Events Examples

// --------------------
// Animation Events
// --------------------
// animationstart: Triggered when a CSS animation starts
document.querySelector("#animated").addEventListener("animationstart", () => {
  console.log("Animation started");
});

// animationiteration: Triggered each time an animation repeats
document.querySelector("#animated").addEventListener("animationiteration", () => {
  console.log("Animation repeated");
});

// animationend: Triggered when a CSS animation ends
document.querySelector("#animated").addEventListener("animationend", () => {
  console.log("Animation ended");
});

// --------------------
// Transition Events
// --------------------
// transitionstart: Triggered when a CSS transition starts
document.querySelector("#transitioned").addEventListener("transitionstart", () => {
  console.log("Transition started");
});

// transitionend: Triggered when a CSS transition ends
document.querySelector("#transitioned").addEventListener("transitionend", () => {
  console.log("Transition ended");
});

// transitionrun: Triggered when a transition is running
document.querySelector("#transitioned").addEventListener("transitionrun", () => {
  console.log("Transition running");
});

// transitioncancel: Triggered when a transition is canceled
document.querySelector("#transitioned").addEventListener("transitioncancel", () => {
  console.log("Transition cancelled");
});

// --------------------
// Pointer Events (covers mouse, pen, touch)
// --------------------
const pointerTarget = document.querySelector("#pointerTarget");

// pointerdown: Triggered when pointer is pressed
target.addEventListener("pointerdown", () => {
  console.log("Pointer down");
});

// pointerup: Triggered when pointer is released
target.addEventListener("pointerup", () => {
  console.log("Pointer up");
});

// pointermove: Triggered when pointer moves
target.addEventListener("pointermove", () => {
  console.log("Pointer moved");
});

// pointerenter / pointerleave
pointerTarget.addEventListener("pointerenter", () => {
  console.log("Pointer entered");
});

pointerTarget.addEventListener("pointerleave", () => {
  console.log("Pointer left");
});

// pointercancel: Triggered when pointer interaction is aborted
pointerTarget.addEventListener("pointercancel", () => {
  console.log("Pointer cancelled");
});

// gotpointercapture / lostpointercapture
pointerTarget.addEventListener("gotpointercapture", () => {
  console.log("Got pointer capture");
});

pointerTarget.addEventListener("lostpointercapture", () => {
  console.log("Lost pointer capture");
});

// --------------------
// WebSocket Events
// --------------------
const socket = new WebSocket("wss://echo.websocket.org"); // Echo test server

// open: Triggered when connection is established
socket.addEventListener("open", () => {
  console.log("WebSocket connection opened");
  socket.send("Hello Server!");
});

// message: Triggered when message is received
socket.addEventListener("message", (event) => {
  console.log("Message from server:", event.data);
});

// error: Triggered on error
socket.addEventListener("error", () => {
  console.log("WebSocket error occurred");
});

// close: Triggered when connection is closed
socket.addEventListener("close", () => {
  console.log("WebSocket connection closed");
});

// --------------------
// Other Specialized Events
// --------------------

// hashchange: When the URL hash (#id) changes
window.addEventListener("hashchange", () => {
  console.log("Hash changed to", window.location.hash);
});

// popstate: When navigating browser history (used with pushState)
window.addEventListener("popstate", () => {
  console.log("Popstate triggered");
});

// beforeunload: Warn user before leaving page
window.addEventListener("beforeunload", (e) => {
  e.preventDefault();
  e.returnValue = "Are you sure you want to leave?";
});

// storage: Triggered when localStorage is changed in another tab
window.addEventListener("storage", (event) => {
  console.log("Storage changed:", event);
});
