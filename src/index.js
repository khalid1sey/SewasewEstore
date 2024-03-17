console.log("Test")
  const servicesItem = document.getElementById('drop-option');
  const drop1 = document.querySelector('.drop1');

  servicesItem.addEventListener('onmouseover', function () {
    drop1.style.display = 'block';
    drop1.style.animation = 'slide-down 0.3s ease';
  });

  servicesItem.addEventListener('mouseleave', function () {
    drop1.style.display = 'none';
    drop1.style.animation = '';
  });


// btn.addEventListener('onclick', function() {
//   links.style.display = "block";

// })

function showSidebar() {
  const sidebar = document.querySelector('.sidebar')
  sidebar.style.display = 'flex'
}
function hideSidebar() {
  const menu = document.querySelector('.sidebar')
  menu.style.display = 'none'
}

// 
//   var x = document.getElementById(".nav-links");
//   var navLinks = document.querySelector(".nav-list");
//   var icon = document.getElementById(".menu-btn");

//   if (x.className === "nav-links") {
//     x.className += " responsive";
//     navLinks.style.display = "block";
//     icon.classList.remove("ri-menu-2-fill");
//     icon.classList.add("ri-close-fill");
//   } else {
//     x.className = "nav-links";
//     navLinks.style.display = "none";
//     icon.classList.remove("ri-close-fill");
//     icon.classList.add("ri-menu-2-fill");
//   }
// }


// function cartAdd() {
//   var cart = document.querySelector('.cart-holder');
//   for(var i = 0; i <= )
// }