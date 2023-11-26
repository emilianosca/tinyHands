
export function helloWorld() {
  console.log("Hello World!");
}



let takePhotoButton = document.querySelector("button#takePhoto");
let canvas = document.querySelector("canvas");

takePhotoButton.onclick = takePhoto;

function takePhoto() {
    console.log("camera clicked");
    // get element by id takePhoto
    let img = document.querySelector("#takePhoto");
    console.log(img);


  imageCapture
    .takePhoto()
    .then((blob) => {
      console.log("Took photo:", blob);
      img.classList.remove("hidden");
      img.src = URL.createObjectURL(blob);
    })
    .catch((error) => {
      console.error("takePhoto() error: ", error);
    });
}

