document
  .querySelectorAll('.accordion-custom input[type="checkbox"]')
  .forEach(function (checkbox) {
    checkbox.addEventListener("change", function () {
      const accordionBody = this.nextElementSibling.nextElementSibling;

      if (this.checked) {
        accordionBody.style.maxHeight = accordionBody.scrollHeight + "px";
      } else {
        accordionBody.style.maxHeight = 0;
      }
    });
  });
