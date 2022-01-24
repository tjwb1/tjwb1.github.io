// Get the img object using its Id.
img = document.getElementById("img1");
// Function to increase image size.
function enlargeImg() {
  //Make sure image sits in front of anything else.
  img.style.zIndex = "999";
  //Border and background.
  img.style.border = "10px solid rgba(125, 102, 8, 0.1)";
  img.style.backgroundColor = "rgba(125, 102, 8, 0.9)";
  // Set image size to 1.5 times original
  img.style.transform = "scale(1.5)";
  //Animation.
  img.style.transition = "transform 0.25s ease";
  //Make x box to close visable.
  document.getElementById("btn1").style.visibility = "visible";
}
// Function to reset image size.
function resetImg() {
  //Change z-index back.
  img.style.zIndex = "1";
  //Border and background.
  img.style.border = "none";
  img.style.backgroundColor = "white";

  // Set image size to original.
  img.style.transform = "scale(1)";
  //Animation.
  img.style.transition = "transform 0.25s ease";
  //Make the x box to close hidden.
  document.getElementById("btn1").style.visibility = "hidden";
}
