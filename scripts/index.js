setTimeout(() => {
    document.querySelector("#mn").style.transform = "translateX(0)";
}, 1000);

function txt(flag) {
  const text = this.firstElementChild;

  if (flag) {
    text.textContent = this.dataset.fullname;

    text.classList.add('mouseEnter');
  } else {
    text.textContent = this.dataset.shortname;

    text.classList.remove('mouseEnter');
  }
}

function changeSource(src) {
    const video = document.getElementById("video");
    video.setAttribute("src", src);

    video.onload = () => {
        video.play();
    };
}

window.onload = function() {
    const menuElements = document.querySelectorAll(".menu_element");
    const video = document.getElementById("video");
    video.volume = 0.1;
    
    menuElements.forEach(menuElement => {
        menuElement.addEventListener("click", function() {
            changeSource(this.dataset.source);
        });
    });

    menuElements.forEach(menuElement => {
      menuElement.addEventListener('mouseenter', event => txt.call(event.target, true));
    });

    menuElements.forEach(menuElement => {
      menuElement.addEventListener('mouseleave', event => txt.call(event.target, false));
    });
};
