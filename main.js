Fancybox.bind('[data-fancybox="gallery"]', {

}); 



if (document.querySelector(".gallery-buttons")) {
    let galleryButtons = document.querySelectorAll(".gallery-buttons button");
    let gallery = document.querySelectorAll(".gallery-col");

    galleryButtons[0].classList.add("active");

    galleryButtons.forEach((button) => {
        button.addEventListener("click", function () {
            let galleryID = button.getAttribute("data-id");

            for (let i = 0; i < galleryButtons.length; i++) {
                galleryButtons[i].classList.remove("active");
            }
            button.classList.add("active");

            if (galleryID === "0") {
                for (let i = 0; i < gallery.length; i++) {
                    gallery[i].classList.remove("d-none");
                }
            } 
            else {
                let filteredGallery = Array.from(gallery).filter(
                    (gallery) => gallery.getAttribute("data-category-id") === galleryID
                );
                for (let i = 0; i < gallery.length; i++) {
                    gallery[i].classList.add("d-none");
                  }
                  for (let i = 0; i < filteredGallery.length; i++) {
                    filteredGallery[i].classList.remove("d-none");
                  }              
            }
        });
    });
}






let valueDisplays = document.querySelectorAll(".counter-span");
let interval = 4000;

valueDisplays.forEach((valueDisplays) => {
    let startValue = 0;
    let endValue = parseInt(valueDisplays.getAttribute
        ("data-val"));
    let duration = Math.floor(interval / endValue);
    let counter = setInterval(function () {
        startValue += 1;
        valueDisplays.textContent = startValue;
        if (startValue == endValue){
            clearInterval(counter);
        }
    }, duration);
});
