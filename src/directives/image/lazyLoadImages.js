export default {
  created: (el, binding) => {
    // Handle if the image in in view
    function handleIntersect(entries, observer) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // If the image or the element in view
          // Load the image/images
          loadImage();
          observer.unobserve(el);
        }
      });
    }

    function createObserver() {
      const options = {
        root: null,
        threshold: "0",
      };

      const observer = new IntersectionObserver(handleIntersect, options);
      observer.observe(el);
    }

    if (window["IntersectionObserver"]) {
      createObserver();
    } else {
      loadImage();
    }

    const showLoader = (img) => {
      // Loader element
      const loader = document.createElement("div");

      let loadingClass = binding.value?.class;

      if (!loadingClass) {
        loadingClass = "v-lazy-image-loading";
      }

      // Add the class so that user add custom style
      loader.classList.add(loadingClass);

      // Set the loader same width height as the image
      loader.style.width = img.style.width;
      loader.style.height = img.style.height;

      // Insert after the img element
      img.after(loader);

      return loader;
    };

    const getImages = () => {
      // If used on a img element
      if (el.nodeName === "IMG") {
        return [el];
      }

      // If used on other elements
      // e.g. div, section etc.
      return Array.from(el.children).filter((el) => el.nodeName === "IMG");
    };

    const loadImage = () => {
      // Get the image element/elements
      const images = getImages();
      // If no image element/elements found
      if (!images.length) throw new Error("Mounted on an empty element or invalid element!");

      // Else
      images.forEach((img) => {
        const loader = showLoader(img);
        // initial dispaly
        const display = img.style.display;
        // Hide the image component
        img.style.display = "none";

        // When the image has been
        // successfully loaded
        img.onload = () => {
          loader.remove(); // Remove the loader
          img.style.display = display; // Change back the display to initial
        };

        img.addEventListener("error", () => console.log("error")); // If any error occured
        img.src = img.dataset.url; // Update the source with the loaded image
      });
    };
  },
};
