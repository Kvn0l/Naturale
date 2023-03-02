var slideIndex = 1;
var slideIndex2 = 0;
//showSlides(slideIndex);
showSlidesAutomatic();

// Controle de Próximo/Anterior
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Controles de imagem em miniatura
function currentSlide(n) {
  showSlides(slideIndex = n);
}

// Função para exibir as imagens
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

function showSlidesAutomatic() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex2++;
  if (slideIndex2 > slides.length) { slideIndex2 = 1 }

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  
  slides[slideIndex2 - 1].style.display = "block";
  dots[slideIndex2 - 1].className += " active";
  setTimeout(showSlidesAutomatic, 3000);
}

var phone = document.getElementById("phone");
var im = new Inputmask("(99)99999-9999");
im.mask(phone);

function showNameError()
{
    document.getElementById("name-error").style.display = "inline";
}

function hideNameError()
{
    document.getElementById("name-error").style.display = "none";
}

function showEmailError()
{
    document.getElementById("email-error").style.display = "inline";
}

function hideEmailError()
{
    document.getElementById("email-error").style.display = "none";
}

function showPhoneError()
{
    document.getElementById("phone-error").style.display = "inline";
}

function hidePhoneError()
{
    document.getElementById("phone-error").style.display = "none";
}

function validateName() {
    var name = document.getElementById("name")
    var nameChars = name.value;
    let rgx = /^[a-zA-ZéúíóáÉÚÍÓÁèùìòàçÇÈÙÌÒÀõãñÕÃÑêûîôâÊÛÎÔÂëÿüïöäËYÜÏÖÄ\-\ \s]+$/;
    if (! rgx.test(nameChars)) {
        if (nameChars == "" || nameChars == null ) {
            showNameError();
            return false;
        } else {
            showNameError();
            return false;
        }   
    } else {
        hideNameError();
        return true;
    }
}

function validateEmail()
{
    var email = document.getElementById("email");
    var emailChars = email.value;
    let rgx = /(.+)@(.+){2,}\.(.+){2,}/
    if (! rgx.test(emailChars))
    {
        showEmailError();
        return false;
    }
    else
    {   
        hideEmailError();
        return true;
    }
}

function validatePhone()
{
    var phone = document.getElementById("phone");
    var phoneNums = phone.value;
    let rgx = /^\([0-9]{2}\)[0-9]{5}-[0-9]{4}/g;
    if (! rgx.test(phoneNums))
    {
        showPhoneError();
        return false;
    }
    else if (phoneNums == "" || phoneNums == null )
    {
        hidePhoneError();
        return true;
    }
    else
    {
        hidePhoneError();
        return true;
    }
}

document.getElementById("name-error").style.display = "none";
document.getElementById("email-error").style.display = "none";
document.getElementById("phone-error").style.display = "none";

var elForm = document.getElementById("formOffer");
elForm.onsubmit = validateName;
elForm.onsubmit = validateEmail;
elForm.onsubmit = validatePhone;