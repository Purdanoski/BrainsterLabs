// FORM VALIDATION
const inputs = document.querySelectorAll("input");

const nameInput = document.querySelector("#name");
const company = document.querySelector("#company");
const email = document.querySelector("#email");
const number = document.querySelector("#number");

const form = document.querySelector("form");

const nameError = document.querySelector(".error.name");
const companyError = document.querySelector(".error.company");
const emailError = document.querySelector(".error.email");
const numberError = document.querySelector(".error.number");

const patterns = {
  email: /^([a-zA-Z\d\.\-\_]+)@([a-zA-Z\d-]+)\.([a-zA-Z]{2,8})(\.[a-zA-Z]{2,8})?$/,
  number: /^\+389([\d]{8,9})$/,
  name: /^([a-zA-Z\s]+)$/,
  company: /^([a-zA-Z\d\.\-\_\s]+)$/,
};

form.addEventListener("submit", (e) => {
  if (nameInput.value === "" || nameInput.value == null || patterns["name"].test(nameInput.value) == false) {
    nameError.classList.add("show");
    nameInput.style.outline = "2px solid red";
    e.preventDefault();
  } else {
    nameInput.style.outline = "2px solid limegreen";
    nameError.classList.remove("show");
  }

  if (company.value === "" || company.value == null || patterns["company"].test(company.value) == false) {
    companyError.classList.add("show");
    company.style.outline = "2px solid red";
    e.preventDefault();
  } else {
    company.style.outline = "2px solid limegreen";
    companyError.classList.remove("show");
  }

  if (email.value === "" || email.value == null || patterns["email"].test(email.value) == false) {
    emailError.classList.add("show");
    email.style.outline = "2px solid red";
    e.preventDefault();
  } else {
    email.style.outline = "2px solid limegreen";
    emailError.classList.remove("show");
  }

  if (number.value === "" || number.value == null || patterns["number"].test(number.value) == false) {
    numberError.classList.add("show");
    number.style.outline = "2px solid red";
    e.preventDefault();
  } else {
    number.style.outline = "2px solid limegreen";
    numberError.classList.remove("show");
  }

  if (selectMenu.innerHTML == "Изберете тип на студент") {
    selectMenu.style.outline = "2px solid red";
    e.preventDefault();
  } else if (selectMenu.innerHTML !== "Изберете тип на студент") {
    selectMenu.style.outline = "2px solid limegreen";
  }
});

inputs.forEach((input) => {
  input.addEventListener("keyup", (e) => {
    validate(e.target, patterns[e.target.attributes.name.value]);
  });
});

function validate(field, regex) {
  if (regex.test(field.value)) {
    field.style.outline = "2px solid limegreen";
  } else {
    field.style.outline = "2px solid red ";
  }
}

// CUSTOM DROPDOWN OPTIONS
x = document.getElementsByClassName("custom-select");
l = x.length;
for (i = 0; i < l; i++) {
  selElmnt = x[i].getElementsByTagName("select")[0];
  ll = selElmnt.length;

  a = document.createElement("DIV");
  a.setAttribute("class", "select-selected");
  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  x[i].appendChild(a);

  b = document.createElement("DIV");
  b.setAttribute("class", "select-items select-hide");
  for (j = 1; j < ll; j++) {
    c = document.createElement("DIV");
    c.innerHTML = selElmnt.options[j].innerHTML;
    c.addEventListener("click", function (e) {
      var y, i, k, s, h, sl, yl;
      s = this.parentNode.parentNode.getElementsByTagName("select")[0];
      sl = s.length;
      h = this.parentNode.previousSibling;
      for (i = 0; i < sl; i++) {
        if (s.options[i].innerHTML == this.innerHTML) {
          s.selectedIndex = i;
          h.innerHTML = this.innerHTML;
          y = this.parentNode.getElementsByClassName("same-as-selected");
          yl = y.length;
          for (k = 0; k < yl; k++) {
            y[k].removeAttribute("class");
          }
          this.setAttribute("class", "same-as-selected");
          break;
        }
      }
      h.click();
    });
    b.appendChild(c);
  }
  x[i].appendChild(b);
  a.addEventListener("click", function (e) {
    e.stopPropagation();
    closeAllSelect(this);
    this.nextSibling.classList.toggle("select-hide");
    this.classList.toggle("select-arrow-active");
  });
}

function closeAllSelect(elmnt) {
  var x,
    y,
    i,
    xl,
    yl,
    arrNo = [];
  x = document.getElementsByClassName("select-items");
  y = document.getElementsByClassName("select-selected");
  xl = x.length;
  yl = y.length;
  for (i = 0; i < yl; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i);
    } else {
      y[i].classList.remove("select-arrow-active");
    }
  }
  for (i = 0; i < xl; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("select-hide");
    }
  }
}

document.addEventListener("click", closeAllSelect);
