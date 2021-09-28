
// //to get the feedback form to open AND CLOSE!!!!.
// // You have no idea how long this took to get this to work, goddamm!!!!
// I sent over 5hr straight trying to get this one little function to work.
 // i had multiplle different code the got it to open. Closing again was the issue.
// function openForm() {
//   const feedbackP = document.querySelector('#feedback')
//   const closeFormP = document.querySelector('#feedbackClose')
//   const feedbackFormOpen = document.getElementById("sliding_form_desktop");
//   feedbackFormOpen.classList.toggle("desktopFormOpen");
//   feedbackP.style.display = feedbackP.style.display === 'none' ? '' : 'none';
//   closeFormP.style.display = closeFormP.style.display === 'none' ? '' : 'block';
//
$(document).ready(function() {

    var formWidth = $('.sliding_form_desktop').width();
    $('.sliding_form_desktop').css('right', '-' + formWidth + 'px');
    $("#form_trigger").on('click', function() {

        if ($('.sliding_form_desktop').hasClass('slide_out')) {
            $('.sliding_form_desktop').removeClass('slide_out').addClass('slide_in')
            $(".sliding_form_desktop").animate({ right: 0 + 'px' });
        } else {
            $('.sliding_form_desktop').removeClass('slide_in').addClass('slide_out')
            $('.sliding_form_desktop').animate({ right: '-' + formWidth + 'px' });
        }

    });
});




// to get the menu to open and close
var menu = document.querySelector(".menu")
var ham = document.querySelector(".ham")
var xIcon = document.querySelector(".xIcon")
var menuIcon = document.querySelector(".menuIcon")
const backgroundBlur = document.querySelector(".backgroudBlur")

ham.addEventListener("click", toggleMenu)

function toggleMenu() {
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
    xIcon.style.display = "none";
    menuIcon.style.display = "block";
    backgroundBlur.style.display= "none";
  } else {
    menu.classList.add("showMenu");
    xIcon.style.display = "block";
    menuIcon.style.display = "none";
    backgroundBlur.style.display = "block";
  }
}

var menuLinks = document.querySelectorAll(".menuLink")

menuLinks.forEach(
  function (menuLink) {
    menuLink.addEventListener("click", toggleMenu)
  }
)



// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal amd submenus
var btn = document.getElementById("myBtn");
var btnTwo = document.getElementById("myBtnTwo");
// Get the element that closes the modal
var modalClose = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}
btnTwo.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on (x), close the modal
modalClose.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }}





  // //get the submenus
  const desktopMenu = document.getElementById("desktopFoodMenuOptions")
  // // // get food menu button
  const foodMenuBtn = document.getElementById("foodMenuBtn");

  // click on menu to open sub menu in desktop mode
  // foodMenuBtn.onclick = function() {
  //   desktopMenu.classList.add("menu-active");
  // }

  foodMenuBtn.onclick = function() {
    if (desktopMenu.classList.contains("menu-active")) {
      desktopMenu.classList.remove("menu-active");
    } else {
      desktopMenu.classList.add("menu-active");
    }}




// food order
const allFood = document.querySelectorAll('.food');
allFood.forEach(food => {
    food.querySelector('.food-total').textContent = '$ 0.00';
});

allFood.forEach((food, index) => {
    food.addEventListener('click', (event) => {
        if(event.target.classList.contains('order-dec') || event.target.parentElement.classList.contains('order-dec')){
            changeOrder(food, 'dec');
        }

        if(event.target.classList.contains('order-inc') || event.target.parentElement.classList.contains('order-inc')){
            changeOrder(food, 'inc');
        }
    });
});

function changeOrder(food, changeType){
    let foodQuan = parseInt(food.querySelector('.order-val').textContent);
    let foodPrice = parseFloat(food.querySelector('.food-rate').textContent.replace(/[^\d.-]/g, '')); // replacing all non-digit characters

    if(changeType === 'dec' && foodQuan > 0) foodQuan--;
    if(changeType === 'inc') foodQuan++;

    food.querySelector('.order-val').textContent = foodQuan;
    food.querySelector('.food-total').textContent = `$ ${(foodQuan * foodPrice).toFixed(2)}`;
}


new Glider(document.querySelector('.glider'), {
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: '.dots',
  draggable: true,
  // arrows: {
  //     prev: '.glider-prev',
  //     next: '.glider-next'
  //   }
});


//
// // hey the submenus
// const desktopMenu = document.getElementById("desktopFoodMenuOptions");
// // get food menu button
// const foodMenuBtn = document.getElementById("foodMenuBtn");
//
// // click on menu to open sub menu in desktop mode
// foodMenuBtn.onclick = function() {
//   desktopMenu.style.display = "block";
// }
