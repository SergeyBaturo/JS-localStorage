const images = document.querySelectorAll('img');

if(localStorage != {}) {
  let savedBackground = JSON.parse(localStorage.backgroundImg);
  document.body.style.backgroundImage = `url(${savedBackground})`;
}

images.forEach(img => {
  img.addEventListener('click', () => {
    images.forEach(image => {
      if (event.target == image) {
        image.classList.add('active');
        let background = image.getAttribute('src');
        document.body.style.backgroundImage = `url(${background})`;
        localStorage.backgroundImg = JSON.stringify(background);
      } else {
        image.classList.remove('active');
      }
    });
  })
})