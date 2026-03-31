const components = [
  // I have done the chunk of the research for you guys
  // This is where you add your files and their corresponding ids
  // For example:
  // { id: "navbar", file: "views/navbar.html" },

  // If you still don't understand it or are not able to do the
  // rest yourself, please let me know and I will be more than
  // happy to help you out
  { id: "about-section", file: "views/about.html" },

  { id: "footer-section", file: "views/footer.html" },
];

components.forEach(component => {
  fetch(component.file)
    .then(res => res.text())
    .then(data => {
      document.getElementById(component.id).innerHTML = data;
    });
});