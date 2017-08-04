// Home flex panel

const taggle = (e) => {
  tar = e.target.parentNode;
  if (tar.style.flex == "1 1 0%") {
    tar.style.flex = "3";
  }
  else {
    tar.style.flex = "1";
  }
  console.log(tar);
  tar.children['1'].children['0'].classList.toggle('open');
}

const arr = Array.from(document.getElementById('three-boxes').children);
arr.forEach(box => box.addEventListener('click', taggle));

// End Home flex panel
