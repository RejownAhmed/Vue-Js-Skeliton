export default {
  // Bind hook is called when the directive is bound to an element
  // el is the element the directive is bound to
  // binding is an object containing information about the binding
  // vnode is the virtual node of the element
  mounted(el, binding, vnode) {
    const options = binding.value || {}; // You can pass options to the directive
    // Create an Intersection Observer instance
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0]; // Get the first (and often only) entry
      // Check if the element is intersecting (visible)
      if (entry.isIntersecting) {
        // Call a callback function or emit an event here
        binding.value(el, entry);
      }
    }, options.intersectionOptions || {});

    // Start observing the element
    observer.observe(el);

    // Cleanup when the element or component is destroyed
    vnode.component?.proxy?.$once("hook:destroyed", () => {
      console.log("Destroyed");
      observer.unobserve(el);
    });
  },
};
