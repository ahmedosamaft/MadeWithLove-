//Landing
let landingPage = window.landingPage;
//Imgs
let randomMood;

const check = () => {
  if (localStorage.getItem("random") == "yes") {
    randomMood = true;
  } else if (localStorage.getItem("random") == "no") {
    randomMood = false;
  } else {
    randomMood = true;
  }
};
check();

let imgs = ["01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg"];
let inte;
const randomImg = () => {
  console.log(randomMood);
  if (randomMood) {
    inte = setInterval(() => {
      let img = Math.floor(Math.random() * imgs.length);
      landingPage.style.backgroundImage = `url(../imgs/${imgs[img]})`;
    }, 7000);
  } else {
    clearInterval(inte);
  }
};

randomImg();

// Setings Box
let gear = window.gear;
let box = window.container;

gear.addEventListener("click", () => {
  box.classList.toggle("active");
});

let randomOpts = Array.from(window.random.children);
randomOpts.forEach((opt) => {
  opt.addEventListener("click", (e) => {
    for (let op in randomOpts) {
      randomOpts[op].classList.remove("active");
    }
    opt.classList.toggle("active");
    localStorage.setItem("random", opt.innerText.toLowerCase());
    check();
    randomImg();
  });
});

function btnCheck() {
  if (randomMood) {
    for (let op in randomOpts) {
      randomOpts[op].classList.remove("active");
    }
    document.querySelector("#random .yes").classList.add("active");
  } else {
    for (let op in randomOpts) {
      randomOpts[op].classList.remove("active");
    }
    document.querySelector("#random .no").classList.add("active");
  }
}
btnCheck();
//Colors
let opts = window.colorOptions.children;

Array.from(opts).forEach((opt) => {
  opt.addEventListener("click", (ev) => {
    document.documentElement.style.setProperty(
      "--orange-color",
      opt.getAttribute("data-color")
    );
    Array.from(opts).forEach((el) => el.classList.remove("active"));
    opt.classList.add("active");
    window.localStorage.setItem("color", opt.getAttribute("data-color"));
  });
});
const checkColor = () => {
  if (localStorage.getItem("color")) {
    document.documentElement.style.setProperty(
      "--orange-color",
      localStorage.getItem("color")
    );
    Array.from(opts).forEach((e) => {
      e.classList.remove("active");
      if (e.getAttribute("data-color") == localStorage.getItem("color")) {
        e.classList.add("active");
      }
    });
  } else {
    document.documentElement.style.setProperty("--orange-color", "#FF9800");
  }
};
checkColor();
//Phone List

window.onload = () => {
  let bars = document.querySelector(".bars");
  let link = window.linkList;

  bars.addEventListener("click", (e) => {
    link.classList.toggle("active");
  });
};

//bullets
let bullets = Array.from(window.bullets.children);

bullets.forEach((bullet) => {
  bullet.addEventListener("click", () => {
    bullets.forEach((ele) => ele.classList.remove("active"));
    bullet.classList.add("active");
  });
});

bullets.forEach((bullet) => {
  bullet.addEventListener("click", (e) => {
    document.querySelector(e.target.dataset.section).scrollIntoView({
      behavior: "smooth",
    });
  });
});

//skills

let skills = document.querySelector(".skills");
let allSkills = document.querySelectorAll(".skill span span");
window.onscroll = () => {
  let skillsOffsetTop = skills.offsetTop; // mkan el Element
  let skillsOffsetHeight = skills.offsetHeight; // tol el Element
  let windowHeight = this.innerHeight; // Tol El 4a4a el m3roda
  let windowScrollTop = this.pageYOffset; //scorll
  if (windowScrollTop > skillsOffsetTop + 300 - windowHeight) {
    //mkan + tolh - 4a4a
    allSkills.forEach((skill) => {
      skill.style.width = skill.dataset.progress;
    });
  } else {
    allSkills.forEach((skill) => {
      skill.style.width = 0;
    });
  }
  if (windowScrollTop > 100) {
    window.toTop.style.display = "block";
  } else {
    window.toTop.style.display = "none";
  }
};

window.toTop.addEventListener("click", (e) => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});

//Gallery
let gallery = document.querySelectorAll(".gallery-img img");

gallery.forEach((img) => {
  img.addEventListener("click", (e) => {
    let overlay = document.createElement("div");
    overlay.className = "overlay";
    document.body.appendChild(overlay);
    let popBox = document.createElement("div");
    popBox.className = "popup";
    let popImg = document.createElement("img");
    popImg.src = img.src;
    let exit = document.createElement("div");
    let exitBtn = document.createElement("i");
    exitBtn.className = "fa-solid fa-xmark";
    exit.className = "exit";
    exit.id = "exit";
    exit.appendChild(exitBtn);
    popBox.appendChild(exit);
    popBox.appendChild(popImg);
    overlay.appendChild(popBox);
    window.exit.addEventListener("click", (e) => {
      window.exit.parentElement.parentElement.remove();
    });
  });
});

let btn = document.getElementById("form");
btn.addEventListener("click", (e) => {
  e.preventDefault();
  btn.parentElement.parentElement.innerHTML = `<div class="submit">Thanks For Contacting Us</div>`;
});

//Bullets

let bBtn = document.querySelectorAll(".btn");
let bMood;

function checkBull() {
  if (
    localStorage.getItem("bull") == "yes" ||
    localStorage.getItem("bull") == null
  ) {
    bMood = true;
    return true;
  } else {
    bMood = false;
    return false;
  }
}

checkBull();

let bullBox = window.bullbox;

const bullShow = () => {
  if (bMood) {
    bullBox.style.display = "flex";
  } else {
    bullBox.style.display = "none";
  }
};
bullShow();

const BullbtnCheack = () => {
  if (checkBull()) {
    bBtn[1].classList.remove("active");
    bBtn[0].classList.add("active");
  } else {
    bBtn[0].classList.remove("active");
    bBtn[1].classList.add("active");
  }
};

BullbtnCheack();

bBtn.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    bBtn[0].classList.remove("active");
    bBtn[1].classList.remove("active");
    btn.classList.add("active");
    localStorage.setItem("bull", btn.innerText.toLowerCase());
    checkBull();
    bullShow();
  });
});

//rest

let restBtn = window.rest;
restBtn.addEventListener("click", () => {
  localStorage.clear();
  checkBull();
  BullbtnCheack();
  check();
  btnCheck();
  Array.from(opts).forEach((opt) => {
    opt.classList.remove("active");
    opts[0].classList.add("active");
  });
  checkColor();
  bullShow();
  randomImg();
});

// Mouse
const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", (e) => {
  cursor.setAttribute(
    "style",
    "top: " + (e.pageY - 10) + "px; left: " + (e.pageX - 10) + "px;"
  );
});

document.addEventListener("click", () => {
  cursor.classList.add("expand");

  setTimeout(() => {
    cursor.classList.remove("expand");
  }, 500);
});
