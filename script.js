const text = ["MERN Developer", "Problem Solver", "Tech Enthusiast"];
let i = 0;
let j = 0;
let current = "";
let isDeleting = false;

function type() {
  if (i < text.length) {
    if (!isDeleting && j <= text[i].length) {
      current = text[i].substring(0, j++);
    } else if (isDeleting && j >= 0) {
      current = text[i].substring(0, j--);
    }

    document.getElementById("typing").innerHTML = current;

    if (j === text[i].length) isDeleting = true;
    if (j === 0) {
      isDeleting = false;
      i++;
    }
  } else {
    i = 0;
  }

  setTimeout(type, 100);
}

type();