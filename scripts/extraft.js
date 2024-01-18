
/////////////////////
/// Mouse Trailer ///
/////////////////////

const trailer = document.getElementById("trailer");
// Animation
const animateTrailer = (e, interacting) => {
    // Determine position
    const x = e.clientX - trailer.offsetWidth / 2,
        y = e.clientY - trailer.offsetHeight / 2;
    // Scale trailer
    const keyframes = {
        transform: `translate(${x}px, ${y}px) scale(${interacting ? 4 : 1})`
    }
    // Animate
    trailer.animate(keyframes, { 
        // Slows cursor down
        duration: 500, 
        fill: "forwards" 
    });
}
// Determines cursor type (Play icon for vids or arrow for links)
const getTrailerIcon = type => {
  switch(type) {
    case "video":
        // Get class of play icon
        return "▶";
    case "search":
        return "?";
    default:
        // Else is probably a link/ can become a link
        return ""; 
  }
}

// Check if its close to an interactable
window.onmousemove = e => {
    const interactable = e.target.closest(".interactable"),
        interacting = interactable !== null;
  
    const icon = document.getElementById("trailer-icon");
  
    animateTrailer(e, interacting);
    // Set dataset type of trailer based on interactable
    trailer.dataset.type = interacting ? interactable.dataset.type : "";
  
    if(interacting) {
        icon.innerText = getTrailerIcon(interactable.dataset.type);
    }
}
$(document).ready(function() {
    $(document).on('mousemove', function(e) {
      $('#circularcursor').css({
        left: e.pageX,
        top: e.pageY
      });
    })
});
// Sets trailer to visible if PC view
trailer.style.display = "flex";