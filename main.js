// RESPONSIVE HAMBURGER Pocetak
// const btnResponsive = document.querySelector(".btn-mobile-nav");
// const nav = document.querySelector(".nav");
// const barIcon = document.querySelector("#bars");
// const xIcon = document.querySelector("#iks");
// const lista = document.querySelector(".nav");

// btnResponsive.addEventListener("click", () => {
//   nav.classList.toggle("activeNav");
//   barIcon.classList.toggle("close");
//   xIcon.classList.toggle("close");
// });

$(document).ready(function () {
  $(".btn-mobile-nav").click(function () {
    $(".nav").toggleClass("activeNav");
    $("#bars").toggleClass("close");
    $("#iks").toggleClass("close");
  });
});

// RESPONSIVE HAMBURGER Kraj

//Header sticky na scroll - START

window.addEventListener("scroll", () => {
  let header = document.querySelector("#header");
  header.classList.toggle("sticky", window.scrollY > 0);
});

//Header sticky na scroll - END

//HERO SECTION VIDEO SLIDER - Pocetak
const slides = document.querySelectorAll(".video-slide");
// console.log(slides);
var slideIndex = 0;
slideShow();
function slideShow() {
  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.add("none");
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].classList.remove("none");
  setTimeout(slideShow, 5000);
}

//HERO SECTION VIDEO SLIDER - Kraj

//Dinamicki meni - pocetak
const menuTekst = new Array(
  "Home",
  "About us",
  "Gallery",
  "Testimonials",
  "Contact"
);
const menuHref = new Array(
  "index.html",
  "#about-us-section",
  "#gallery-section",
  "#testimonial-section",
  "#cta"
);

let menuIspis = `<ul>`;
for (let i = 0; i < menuTekst.length; i++) {
  menuIspis += `<li><a href="${menuHref[i]}">${menuTekst[i]}</a></li>`;
}
menuIspis += `</ul>`;

const navDiv = document.querySelector(".nav");
navDiv.innerHTML = menuIspis;
//Dinamicki meni - kraj

// Dinamicko uletanje elemenata pocetak
window.addEventListener("scroll", reveal);

function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var revealTop = reveals[i].getBoundingClientRect().top;
    var revealPoint = 150;
    if (revealTop < windowHeight - revealPoint) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}
// Dinamicko uletanje elemenata kraj

// Ispis galerija dinamicki
const galerijaKartice = new Array("Exotic", "Capitals", "Party", "Winter");
const galerijaDataFilter = new Array("exotic", "capital", "party", "winter");

let galerijaIspis = `<ul> <li class='list active' data-filter='all'>All</li>`;
for (let i = 0; i < galerijaKartice.length; i++) {
  galerijaIspis += `<li class='list' data-filter='${galerijaDataFilter[i]}'>${galerijaKartice[i]}</li>`;
}
galerijaIspis += `</ul>`;
const galerijaDataItem = new Array(
  "exotic",
  "capital",
  "party",
  "winter",
  "exotic",
  "capital",
  "party",
  "winter",
  "exotic",
  "capital",
  "winter",
  "exotic",
  "party",
  "winter",
  "capital",
  "party"
);
const galerijaSrc = new Array(
  "exotic1.jpg",
  "capital1.jpg",
  "party1.jpg",
  "winter2.jpg",
  "exotic2.jpg",
  "capital2.jpg",
  "party2.jpg",
  "winter1.jpg",
  "exotic3.jpg",
  "capital3.jpg",
  "winter4.jpg",
  "exotic4.jpg",
  "party3.jpg",
  "winter3.jpg",
  "capital4.jpg",
  "party4.jpg"
);
const galerijaAlt = new Array(
  "exotic photo",
  "capital photo",
  "party photo",
  "winter photo",
  "exotic photo",
  "capital photo",
  "party photo",
  "winter photo",
  "exotic photo",
  "capital photo",
  "winter photo",
  "exotic photo",
  "party photo",
  "winter photo",
  "capital photo",
  "party photo"
);

galerijaIspis += `<div class='product'>`;
for (let i = 0; i < galerijaSrc.length; i++) {
  galerijaIspis += `<div class='itemBox' data-item='${galerijaDataItem[i]}'>
                    <img src='img/${galerijaSrc[i]}' alt='${galerijaAlt[i]}'/>
                  </div>`;
}
galerijaIspis += `</div>`;
// console.log(galerijaIspis);
const divGalerija = document.querySelector(".section-filter");
divGalerija.innerHTML = galerijaIspis;

// Filter galerija dogadjaj - start
let liste = document.querySelectorAll(".list");
let itemBoxes = document.querySelectorAll(".itemBox");

for (let i = 0; i < liste.length; i++) {
  liste[i].addEventListener("click", function () {
    for (let j = 0; j < liste.length; j++) {
      liste[j].classList.remove("active");
    }
    this.classList.add("active");

    let dataFilter = this.getAttribute("data-filter");

    for (let k = 0; k < itemBoxes.length; k++) {
      itemBoxes[k].classList.remove("active");
      itemBoxes[k].classList.add("hide");

      if (
        itemBoxes[k].getAttribute("data-item") == dataFilter ||
        dataFilter == "all"
      ) {
        itemBoxes[k].classList.remove("hide");
        itemBoxes[k].classList.add("active");
      }
    }
  });
}

// Filter galerija dogadjaj end

// Testimonials - preko objekta !!

const testimonials = [
  {
    name: "Stephanie B.",
    image: "testimonial-1.jpg",
    testimonial:
      ' "We had a wonderful time! I highly recommend the Resort at Longboat Key & the area. It was perfect for not being crowded on the beach w/ Covid concerns. The beach is for guests only & beautiful!....Thanks so much for finding the perfect spot for us for spring break :)"',
  },
  {
    name: "Ben S.",
    image: "testimonial-2.jpg",
    testimonial:
      " \"The ship was extremely organized. It was impressive. The food was very good. .... Overall it was a great vacation and definitely our best. We are all happy we did it and I'd recommend it to anyone. I'm trying to get them to think about next year's vacation. Hopefully we can come up with some ideas in July.\"",
  },
  {
    name: "Juli M.",
    image: "testimonial-3.jpg",
    testimonial:
      ' "This trip was wonderful due to Ilana at Gil. She added a special dimension to our experience that no one else could. And that’s what made the trip so great!!!! The trip was a life changer for me and meeting some truly amazing travel mates was extremely heartwarming."',
  },
  {
    name: "Brooke B.",
    image: "testimonial-4.jpg",
    testimonial:
      '"A very emotional experience.The hotel, the food, the guide and the traveling and trip schedule including visiting significant places in Bahrain made this trip an experience which was perfectly orchestrated and adjusted according to limits and changes."',
  },
];
const testimonialContainer = document.querySelector("#testimonial-container");
const btnNext = document.querySelector("#next");
const btnPrev = document.querySelector("#prev");

window.addEventListener("load", funTestimonial);

let i = 0;

btnNext.addEventListener("click", function () {
  i = (testimonials.length + i + 1) % testimonials.length;
  funTestimonial();
});

btnPrev.addEventListener("click", function () {
  i = (testimonials.length + i - 1) % testimonials.length;
  funTestimonial();
});

function funTestimonial() {
  testimonialContainer.innerHTML = `
  <p>${testimonials[i].testimonial}</p>
  <img src='img/${testimonials[i].image}'/>
  <h3>${testimonials[i].name}</h3>
  `;
}
// Testimonials - preko objekta  Kraj!!

// jQuery Smooth Scroll - Start
$(document).ready(function () {
  $('a[href*="#"]')
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function (event) {
      if (
        location.pathname.replace(/^\//, "") ==
          this.pathname.replace(/^\//, "") &&
        location.hostname == this.hostname
      ) {
        var target = $(this.hash);
        target = target.length
          ? target
          : $("[name=" + this.hash.slice(1) + "]");
        if (target.length) {
          event.preventDefault();
          $("html, body").animate(
            {
              scrollTop: target.offset().top,
            },
            1000,
            function () {
              var $target = $(target);
              $target.focus();
              if ($target.is(":focus")) {
                return false;
              } else {
                $target.attr("tabindex", "-1");
                $target.focus();
              }
            }
          );
        }
      }
    });
});
// jQuery Smooth Scroll - End

//Forma dinamicki ispis - start
const nizIdNameLabel = new Array(
  "full-name",
  "email",
  "password",
  "passwordConfirm"
);
const nizFormLabel = new Array(
  "Full Name*",
  "Email address*",
  "Password*",
  "Confirm password*"
);
const nizPlaceholders = new Array(
  "John Smith",
  "me@example.com",
  "Password",
  "Confirm password"
);
const nizIspisGreske = new Array(
  "First and Last name must start with uppercase (John Smith ...)",
  "Email must be in format me@example.com",
  "Min 1 special char 1 uppercase and 1 number min length 6",
  "Passwords must match"
);

const tipPolje = new Array("text", "text", "password", "password");

let formaIspis = `
      <h2 class="heading-secondary">Register for free !</h2>
      <form class="cta-form" name="sign-up">`;
for (let i = 0; i < nizIdNameLabel.length; i++) {
  formaIspis += `
  <div>
    <label for="${nizIdNameLabel[i]}">${nizFormLabel[i]}</label>
    <input id="${nizIdNameLabel[i]}" type="${tipPolje[i]}" placeholder="${nizPlaceholders[i]}" name="${nizIdNameLabel[i]}"/>
    <p class="display-none">${nizIspisGreske[i]}</p>
  </div>
  `;
}
const nizValue = new Array("0", "male", "female", "other");
const nizTekst = new Array(
  "Please choose one option:",
  "I'm male",
  "I'm female",
  "Other"
);
formaIspis += `
      <div>
      <label for="ddl-gender">Select your gender*</label>
      <select id="ddl-gender" name="ddl-gender">
`;
for (let i = 0; i < nizValue.length; i++) {
  formaIspis += ` <option value="${nizValue[i]}">${nizTekst[i]}</option> 
  `;
}
formaIspis += ` </select>
<p class="display-none">You must select your gender</p>
              </div>`;

formaIspis += `
              <input type="button" value="Sign up now" class="btn" id="btnForma"/>
              </form>`;
// console.log(formaIspis);

const divForma = document.querySelector(".cta-text-box");
divForma.innerHTML = formaIspis;

//Forma dinamicki ispis - end

//validacija forme - onBlur
//Bez Srpskih slova jer je sajt na engleskom jeziku !!

function proveraFormeOnBlur() {
  const ime = document.querySelector("#full-name");
  let regIme = /^[A-Z][a-z]{2,14}(\s[A-Z][a-z]{2,14})+$/;

  //Ime validacija
  ime.addEventListener("blur", () => {
    if (regIme.test(ime.value)) {
      ime.nextElementSibling.classList.add("display-none");
    } else {
      ime.nextElementSibling.classList.remove("display-none");
    }
  });

  //Email validacija
  const email = document.querySelector("#email");
  let regEmail = /^[a-zA-Z0-9_\.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-\.]+$/;

  email.addEventListener("blur", () => {
    if (regEmail.test(email.value)) {
      email.nextElementSibling.classList.add("display-none");
    } else {
      email.nextElementSibling.classList.remove("display-none");
    }
  });

  //Password validacija
  const pass = document.querySelector("#password");
  var regPass =
    /^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[A-Z])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
  pass.addEventListener("blur", () => {
    if (regPass.test(pass.value)) {
      pass.nextElementSibling.classList.add("display-none");
    } else {
      pass.nextElementSibling.classList.remove("display-none");
    }
  });

  //Confirm password validacija
  const passConfirm = document.querySelector("#passwordConfirm");

  passConfirm.addEventListener("blur", () => {
    if (passConfirm.value == pass.value && passConfirm.value != "") {
      passConfirm.nextElementSibling.classList.add("display-none");
    } else {
      passConfirm.nextElementSibling.classList.remove("display-none");
    }
  });
  //DDL validacija
  const ddlPol = document.querySelector("#ddl-gender");
  ddlPol.addEventListener("change", () => {
    if (ddlPol.options[ddlPol.options.selectedIndex].value == "0") {
      ddlPol.nextElementSibling.classList.remove("display-none");
    } else {
      ddlPol.nextElementSibling.classList.add("display-none");
    }
  });
}

proveraFormeOnBlur();

//validacija forme - onBlur Kraj

//validacija forme - onCliick na dugme pocetak
window.addEventListener("load", () => {
  const dugmeForma = document.querySelector("#btnForma");
  dugmeForma.addEventListener("click", proveriFormu);
});

function proveriFormu() {
  let brojGresaka = 0;
  //Ime validacija
  const ime = document.querySelector("#full-name");
  let regIme = /^[A-Z][a-z]{2,14}(\s[A-Z][a-z]{2,14})+$/;

  if (regIme.test(ime.value)) {
    ime.nextElementSibling.classList.add("display-none");
  } else {
    ime.nextElementSibling.classList.remove("display-none");
    brojGresaka++;
  }

  //Email validacija
  const email = document.querySelector("#email");
  let regEmail = /^[a-zA-Z0-9_\.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-\.]+$/;

  if (regEmail.test(email.value)) {
    email.nextElementSibling.classList.add("display-none");
  } else {
    email.nextElementSibling.classList.remove("display-none");
    brojGresaka++;
  }

  //Password validacija
  const pass = document.querySelector("#password");
  var regPass =
    /^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[A-Z])[a-zA-Z0-9!@#$%^&*]{6,16}$/;

  if (regPass.test(pass.value)) {
    pass.nextElementSibling.classList.add("display-none");
  } else {
    pass.nextElementSibling.classList.remove("display-none");
    brojGresaka++;
  }

  //Confirm password validacija
  const passConfirm = document.querySelector("#passwordConfirm");

  if (passConfirm.value == pass.value && passConfirm.value != "") {
    passConfirm.nextElementSibling.classList.add("display-none");
  } else {
    passConfirm.nextElementSibling.classList.remove("display-none");
    brojGresaka++;
  }

  //DDL validacija
  const ddlPol = document.querySelector("#ddl-gender");

  if (ddlPol.options[ddlPol.options.selectedIndex].value == "0") {
    ddlPol.nextElementSibling.classList.remove("display-none");
    brojGresaka++;
  } else {
    ddlPol.nextElementSibling.classList.add("display-none");
  }
  if (brojGresaka == 0) {
    ime.value = "";
    email.value = "";
    pass.value = "";
    passConfirm.value = "";
    ddlPol.selectedIndex = 0;
    alert("You are sucessfully registred");
  }
}
//validacija forme - onCliick na dugme kraj

// FOOTER ISPIS - pocetak
const hrefSocials = new Array("facebook", "instagram", "twitter", "linkedin");
const classSocials = new Array(
  "fa fa-facebook",
  "fa fa-instagram",
  "fa fa-twitter",
  "fa fa-linkedin"
);

let ispisFooter = `
        <div class="footer-left">
          <a href="index.html" class="logo-footer"><span class="logo-footer">KRSMAN</span>TRAVEL</a>
          <p>
            This is our only and official website, here you can find all very
            important links.
          </p>
        <div class="socials">`;

for (let i = 0; i < hrefSocials.length; i++) {
  ispisFooter += `
  <a href="https://www.${hrefSocials[i]}.com"><i class="${classSocials[i]}"></i></a>`;
}
ispisFooter += `
            </div>
        </div>
    <ul class="footer-right">`;

const nizH2 = new Array("Colaborations", "Useful links", "Address");
const footerObjectTekst = [
  {
    prvi: "Bon Voyage Travel",
    drugi: "Central Travel",
    treci: "Gulliver's Travel",
    cetvrti: "Crown Cruise Vacations",
  },
  {
    prvi: "Documentation",
    drugi: "Author",
    treci: "Sitemap",
    cetvrti: "Robot.txt",
  },
  {
    prvi: "127, Westwood Lane",
    drugi: "DA15 9PS, Sidecup",
    treci: "London",
    cetvrti: "United Kingdom",
  },
];
const footerObjectHref = [
  {
    prvi: "#",
    drugi: "#",
    treci: "#",
    cetvrti: "#",
  },
  {
    prvi: "Dokumentacija.pdf",
    drugi: "author.html",
    treci: "sitemap.xml",
    cetvrti: "robots.txt",
  },
  {
    prvi: "#",
    drugi: "#",
    treci: "#",
    cetvrti: "#",
  },
];
for (let i = 0; i < nizH2.length; i++) {
  ispisFooter += `
      <li>
        <h2>${nizH2[i]}</h2>
        <ul class="box">
          <li><a href="${footerObjectHref[i].prvi}">${footerObjectTekst[i].prvi}</a></li>
          <li><a href="${footerObjectHref[i].drugi}">${footerObjectTekst[i].drugi}</a></li>
          <li><a href="${footerObjectHref[i].treci}">${footerObjectTekst[i].treci}</a></li>
          <li><a href="${footerObjectHref[i].cetvrti}">${footerObjectTekst[i].cetvrti}</a></li>
        </ul>
      </li>`;
}

ispisFooter += `
        </ul>
    <div class="footer-bottom">
      <p>
        All Rights reserved by <span id="bojaPlava">&copy;KRSMANTRAVEL</span>
        <span id="currentYear"></span>
      </p>
    </div>
    `;
// console.log(ispisFooter);
const divFooter = document.querySelector(".footer");
divFooter.innerHTML = ispisFooter;
// FOOTER ISPIS - kraj

//Current year - footer

let datum = new Date();
let godina = datum.getFullYear();
const spanFuterGodina = document.querySelector("#currentYear");
spanFuterGodina.innerHTML = godina;

//Current year - footer

// TOP DESTINATION SEKCIJA - START
const objTopDest = [
  {
    h3: "Bora Bora",
    p: "Bora Bora island will make you feel love at first sight. With ocean views of turquoise waters resembling an artist’s palette of bright blues and greens tropical vegetation...",
    hiden: "Average price per night 115$",
  },
  {
    h3: "Bali Indonesia",
    p: "Also known as the Land of the Gods, Bali appeals through its sheer natural beauty of looming volcanoes.It is also famous for surfers’ paradise! If you love surfing you must visit...",
    hiden: "Average price per night 80$",
  },
  {
    h3: "Zanzibar Tanzania",
    p: "Zanzibar Island is known as Africa’s tropical paradise, offering the world’s most beautiful beaches. Miles and miles of white sandy beaches dotted with palm trees...",
    hiden: "Average price per night 100$",
  },
];

const nizTopDestSrc = new Array("bora-bora.jpg", "bali.jpg", "zanzibar.jpg");
let ispisTopDest = "";
for (let i = 0; i < objTopDest.length; i++) {
  ispisTopDest += `
    <div class="col-lg-4 col-md-6 col-sm-12 mb-5 okvir">
      <img src="img/${nizTopDestSrc[i]}" class="img-fluid" />
        <h3>${objTopDest[i].h3}</h3>
        <p>
          ${objTopDest[i].p}
        </p>
          <p class="aditional-info${i} display-none">
             ${objTopDest[i].hiden}
          </p>
        <span class="showMore${i}">Read more...</span>
    </div>
  `;
}
const divTopDest = document.querySelector("#top-destinations");
divTopDest.innerHTML = ispisTopDest;
//Read more - read less (radi ali nije optimizovan)
$(document).ready(function () {
  $(".showMore0").click(function () {
    $(".aditional-info0").slideToggle();

    $(this).text() === "Read more..."
      ? $(this).text("Read less...")
      : $(this).text("Read more...");
  });
  $(".showMore1").click(function () {
    $(".aditional-info1").slideToggle();

    $(this).text() === "Read more..."
      ? $(this).text("Read less...")
      : $(this).text("Read more...");
  });
  $(".showMore2").click(function () {
    $(".aditional-info2").slideToggle();

    $(this).text() === "Read more..."
      ? $(this).text("Read less...")
      : $(this).text("Read more...");
  });
});
// TOP DESTINATION SEKCIJA - END

//Gasenje mobilne nav kad se klikne na link - start
const liTagovi = document.querySelectorAll(".nav ul li");

for (let i = 0; i < liTagovi.length; i++) {
  liTagovi[i].addEventListener("click", () => {
    $(".nav").toggleClass("activeNav");
    $("#bars").toggleClass("close");
    $("#iks").toggleClass("close");
  });
}
//Gasenje mobilne nav kad se klikne na link -- end
