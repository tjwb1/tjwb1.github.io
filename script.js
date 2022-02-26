//Home page image sizing functions.

// Get the img object using its Id.
img1 = document.getElementById("img-1");
// Function to increase image size.
function enlargeImg() {
  //Make sure image sits in front of anything else.
  img1.style.zIndex = "999";
  //Border and background.
  img1.style.border = "10px solid rgba(125, 102, 8, 0.1)";
  img1.style.backgroundColor = "rgba(125, 102, 8, 0.9)";
  // Set image size to 1.5 times original
  img1.style.transform = "scale(1.5)";
  //Animation.
  img1.style.transition = "transform 0.25s ease";
  //Make x box to close visable.
  document.getElementById("btn1").style.visibility = "visible";
}
// Function to reset image size.
function resetImg() {
  //Change z-index back.
  img1.style.zIndex = "1";
  //Border and background.
  img1.style.border = "none";
  img1.style.backgroundColor = "white";

  // Set image size to original.
  img1.style.transform = "scale(1)";
  //Animation.
  img1.style.transition = "transform 0.25s ease";
  //Make the x box to close hidden.
  document.getElementById("btn1").style.visibility = "hidden";
}

// Shoes and boots pages image sizing functions.

// // Article 1.
// //Initialising the variables that hold the ID of the image.
// const open1 = document.getElementById("fi-1");
// const modalContainer1 = document.getElementById("modal-container1");
// const close1 = document.getElementById("close1");

// //Adding the function to change the opacity through the show selector.
// open1.addEventListener("click", () => {
//   modalContainer1.classList.add("show");
// });

// close1.addEventListener("click", () => {
//   modalContainer1.classList.remove("show");
// });

// // Article 2.
// //Initialising the variables that hold the ID of the image.
// const open2 = document.getElementById("fi-2");
// const modalContainer2 = document.getElementById("modal-container2");
// const close2 = document.getElementById("close2");

// //Adding the function to change the opacity through the show selector.
// open2.addEventListener("click", () => {
//   modalContainer2.classList.add("show");
// });

// close2.addEventListener("click", () => {
//   modalContainer2.classList.remove("show");
// });

// // Article 3.
// //Initialising the variables that hold the ID of the image.
// const open3 = document.getElementById("fi-3");
// const modalContainer3 = document.getElementById("modal-container3");
// const close3 = document.getElementById("close3");

// //Adding the function to change the opacity through the show selector.
// open3.addEventListener("click", () => {
//   modalContainer3.classList.add("show");
// });

// close3.addEventListener("click", () => {
//   modalContainer3.classList.remove("show");
// });

// // Article 4.
// //Initialising the variables that hold the ID of the image.
// const open4 = document.getElementById("fi-4");
// const modalContainer4 = document.getElementById("modal-container4");
// const close4 = document.getElementById("close4");

// //Adding the function to change the opacity through the show selector.
// open4.addEventListener("click", () => {
//   modalContainer4.classList.add("show");
// });

// close4.addEventListener("click", () => {
//   modalContainer4.classList.remove("show");
// });

// // Article 5.
// //Initialising the variables that hold the ID of the image.
// const open5 = document.getElementById("fi-5");
// const modalContainer5 = document.getElementById("modal-container5");
// const close5 = document.getElementById("close5");

// //Adding the function to change the opacity through the show selector.
// open5.addEventListener("click", () => {
//   modalContainer5.classList.add("show");
// });

// close5.addEventListener("click", () => {
//   modalContainer5.classList.remove("show");
// });

// // Article 6.
// //Initialising the variables that hold the ID of the image.
// const open6 = document.getElementById("fi-6");
// const modalContainer6 = document.getElementById("modal-container6");
// const close6 = document.getElementById("close6");

// //Adding the function to change the opacity through the show selector.
// open6.addEventListener("click", () => {
//   modalContainer6.classList.add("show");
// });

// close6.addEventListener("click", () => {
//   modalContainer6.classList.remove("show");
// });

function toggleContent(options) {
  const { container, expandable, triggerer, autoClose } = options,
    contents = document.querySelectorAll(container);
  // buttonText = ["x"];
  let current = null; // Keeps book of the currently open expandee

  function toggle(e) {
    const selected = e.target;
    if (!selected.matches(triggerer)) {
      return;
    } // Quit, an irrelevant element clicked
    const commonParent = selected.closest(expandable);
    if (!commonParent) {
      return;
    } // Quit, the expandable element was not found
    // if (autoClose && current && button !== current) {
    if (autoClose && current !== current) {
      // If autoClose is on, closes the current expandee
      toggle({ target: current });
    }
    const state = +commonParent.classList.toggle("expanded");
    // button.textContent = buttonText[state];
    current = state ? button : null;
  }

  // Add click listeners to all elements containing expandables
  contents.forEach((cont) => cont.addEventListener("click", toggle));
}

// Activate ContentToggler
toggleContent({
  container: ".expandables-container", // Selector for the elements containing expandable elements
  expandable: ".expandable", // Selector for expandable elements
  triggerer: [".footwear-image", ".modal-img"], // Selector for the element triggering expansion
  autoClose: true, // Indicates whether the expanded element is closed when a new element is expanded (optional)
});

//Scrolling reveal animations

//Home page
ScrollReveal({
  reset: true,
  distance: "60px",
  duration: 2500,
  delay: 400,
});

ScrollReveal().reveal(".intro", {
  delay: 200,
  origin: "left",
});
ScrollReveal().reveal(".article", {
  delay: 200,
  origin: "bottom",
});
ScrollReveal().reveal(".article-intro", {
  delay: 200,
  origin: "right",
});

//Shoes and boots

// ScrollReveal().reveal("#e2, #e4, #e6", {
//   delay: 200,
//   origin: "right",
//   // afterReveal: (this.style.zIndex = "999"),
// });

// ScrollReveal().reveal("#e1, #e3, #e5", {
//   delay: 200,
//   origin: "left",
// });

// This is for the filter menu

// const liItem = document.querySelectorAll(".ul li");
// const imgItem = document.querySelectorAll(".items img");

// liItem.forEach((li) => {
//   li.onclick = function () {
//     //active
//     liItem.forEach((li) => {
//       li.className = "";
//     });
//     li.className = "active";
//   };

//   //filter
//   const value = li.textContent;
//   imgItem.forEach((img) => {
//     img.style.display = "none";
//     if (
//       img.getAttribute("data-filter") == value.toLowerCase() ||
//       value == "All Menu"
//     ) {
//       console.log("winner");
//       img.style.display = "block";
//     }
//   });
// });

//Filter menu code. Code sourced from:
//[1]. Azharos. Desain-Front-End/Filter Image/. 2020.
//https://github.com/azharos/Desain-Front-End/tree/master/Filter%20Image
const liItem = document.querySelectorAll("ul li");
const imgItem = document.querySelectorAll(".items img");

liItem.forEach((li) => {
  li.onclick = function () {
    console.log(li.textContent);
    //active
    liItem.forEach((li) => {
      li.className = "";
    });
    li.className = "active";

    //Filter
    const value = li.textContent;
    imgItem.forEach((img) => {
      img.style.display = "none";
      if (
        img.getAttribute("data-filter") == value.toLowerCase() ||
        value == "All Menu"
      ) {
        img.style.display = "block";
      }
    });
  };
});
