//   dark and light mode 
  const checkbox = document.querySelector('input[type="checkbox"]');
  checkbox.addEventListener("change", function () {
    if (checkbox.checked) {
      document.documentElement.style.setProperty("--for", "#34353b");
      document.documentElement.style.setProperty("--bg", "rgb(236, 236, 236)");
      document.documentElement.style.setProperty(
        "--card",
        "rgb(165, 164, 164)"
      );

      console.log("Checkbox is checked");
    } else {
      document.documentElement.style.setProperty("--bg", "#34353b");
      document.documentElement.style.setProperty("--for", "white");
      document.documentElement.style.setProperty("--card", "#3d3e42");

      console.log("Checkbox is not checked");
    }
  });



// for animation 

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      console.log(entry);
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      } else {
        entry.target.classList.remove('show');
      }
    });
  }, {
    threshold: 0,
    rootMargin: '-400px 0px -150px 0px', 
  });
  
  const sections = document.querySelectorAll('section');
  sections.forEach((el) => observer.observe(el));
  

  //slider

  const slidediv = document.querySelectorAll('.project');
  const right = document.querySelector('#right');
  const left = document.querySelector('#left');
  let current = 0;

  slidediv.forEach((slide, index) => {
    if (index !== current) {
      slide.style.display = 'none';
    }
  });
  
  right.addEventListener("click", () => {
    changeSlide(current + 1);
  });
  
  left.addEventListener("click", () => {
    changeSlide(current - 1);
  });
  
  const changeSlide = (to) => {
    slidediv[current].style.display = 'none';
    if (to >= slidediv.length) {
      to = 0;
    } else if (to < 0) {
      to = slidediv.length - 1;
    }
    slidediv[to].style.display = 'flex';
    current = to;
  };
  



