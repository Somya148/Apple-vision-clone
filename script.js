window.addEventListener('scroll', function () {
  var page1 = document.getElementById('page1');
  var page2 = document.getElementById('page2');
  var h1 = document.querySelector('h1');

  var page1Bottom = page1.getBoundingClientRect().bottom;
  var page2Top = page2.getBoundingClientRect().top;

  if (page1Bottom < 0 && page2Top > window.innerHeight) {
    // Scrolling down from page 1
    h1.style.color = 'red'; // Change text color to red
  } else if (page2Top < window.innerHeight && page2Top > 0) {
    // Scrolling up to page 2
    h1.style.color = 'blue'; // Change text color to blue
  } else {
    // Reset to initial color if not in the specified range
    h1.style.color = 'black'; // Initial text color
  }
});
