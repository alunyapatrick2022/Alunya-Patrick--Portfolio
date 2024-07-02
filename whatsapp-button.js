document.getElementById("whatsapp-button").addEventListener("click", function(event) {
  event.preventDefault(); // Prevent the default link behavior
//   var targetElement = document.querySelector("a[href^='https://wa.me/send?phone=254115348341']");
//   if (targetElement) {
//     var targetUrl = targetElement.getAttribute("href");
//     window.open(targetUrl, "_blank");
//   } else {
//     console.error("No WhatsApp link found on the page.");
     //   }
     var ua = navigator.userAgent.toLowerCase();

var isMobile = ua.indexOf("mobile") > -1;

if (isMobile) {

    window.location.href = "whatsapp://send?text=your_message&phone=254115348341",  "_blank";

} else {

    window.open("https://web.whatsapp.com/send?text=your_message&phone=254115348341",  "_blank", "Share with Whatsapp Web", 'width=800,height=600');

}
  
  // Smooth scroll to the top of the page
  var currentPosition = window.pageYOffset;
  var duration = 500; // Smooth scroll duration in milliseconds
  var startTime = null;
  
  function scrollAnimation(currentTime) {
    if (startTime === null) {
      startTime = currentTime;
    }
    var timeElapsed = currentTime - startTime;
    var progress = Math.min(timeElapsed / duration, 1);
    window.scrollTo(0, currentPosition * (1 - progress));
    if (progress < 1) {
      requestAnimationFrame(scrollAnimation);
    } else {
      window.scrollTo(0, 0); // Ensure the page is scrolled to the top
    }
  }
  
  requestAnimationFrame(scrollAnimation);
});
