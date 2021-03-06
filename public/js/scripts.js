let sectionMain = document.getElementById("section-main");
let navbar = document.getElementById("navbar");
let navPos = navbar.getBoundingClientRect().top;

window.addEventListener("scroll", e => {
  let viewportHeight = window.innerHeight;
  let scrollPos = window.scrollY;
  if (scrollPos > navPos) {
    navbar.classList.add('sticky');
    sidenavid.style.borderTopRightRadius = "0px";
  } else {
    navbar.classList.remove('sticky');
    sidenavid.style.borderTopRightRadius = "8px";
  }
});

if ($(window).width() > 768) {
  function toggleNav() {
    var element = document.getElementById("sidenavid");
    if (element.style.width == "350px") {
      element.style.width = "0px";
    } else {
      element.style.width = "350px";
    }

    var element = document.getElementById("sidenavid");
    if (element.style.width == "350px") {
      element.style.boxShadow = "0.5px -1px 1px 0px #929498";
    } else {
      element.style.boxShadow = "none";
    }

    var element = document.getElementById("main");
    if (element.style.marginLeft == "350px") {
      element.style.marginLeft = "0px";
    } else {
      element.style.marginLeft = "350px";
    }

    var element = document.getElementById("navbar");
    if(element.style.borderBottomLeftRadius == "0px") {
      element.style.borderBottomLeftRadius = "8px";
    } else {
      element.style.borderBottomLeftRadius = "0px";
    }

    var element = document.getElementById("logotop");
    if(element.style.display == "none") {
      element.style.display = "flex";
    } else {
      element.style.display = "none";
    }
    
  }
} else {
  function toggleNav() {
    var element = document.getElementById("sidenavid");
    if (element.style.width == "100%") {
      element.style.width = "0px";
    } else {
      element.style.width = "100%";
    }
  }
}

function hoverEffect(x) {
  x.style.color = "var(--hover-color)";
  x.style.fontSize = "14.5px";
}

function nohoverEffect(x) {
  x.style.color = "var(--text-color)";
  x.style.fontSize = "14px";
}

function toggleIcon(x) {
  if ($(window).width() > 768) {
    x.classList.toggle("iconoir-cancel");
    x.classList.toggle("iconoir-menu");
  } else {
    x.classList.toggle("none")
  }
}

// Get the modal
var modal = document.getElementById("connect-modal");

// Get the button that opens the modal
var btn = document.getElementById("connect-open");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("closeicon-2")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

$(document).ready(function(){
  $('.slick-content').slick({
  dots: false,
  infinite: true,
  autoplay: true,
  speed: 1200,
  slidesToShow: 4,
  slidesToScroll: 1,
  prevArrow: $('.prev-arrow'),
  nextArrow: $('.next-arrow'),
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite:true
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
  });
});

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panelAccordion = this.nextElementSibling;
    if (panelAccordion.style.display === "block") {
      panelAccordion.style.display = "none";
    } else {
      panelAccordion.style.display = "block";
    }
  });
}