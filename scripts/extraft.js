
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
        transform: `translate(${x}px, ${y}px) scale(${interacting ? 8 : 1})`
    }
    // Animate
    trailer.animate(keyframes, { 
        // Slows cursor down
        duration: 500, 
        fill: "forwards" 
    });
}
// Determines cursor type (Play icon for vids or arrow for links)
const getTrailerClass = type => {
  switch(type) {
    case "video":
        // Get class of play icon
        return "fa-solid fa-play";
    default:
        // Else is probably a link/ can become a link
        return "fa-solid fa-arrow-up-right"; 
  }
}

// Check if its close to an interactable
window.onmousemove = e => {
    const interactable = e.target.closest(".interactable"),
        interacting = interactable !== null;
  
    const icon = document.getElementById("trailer-icon");
  
    animateTrailer(e, interacting);
  
    trailer.dataset.type = interacting ? interactable.dataset.type : "";
  
    if(interacting) {
        icon.className = getTrailerClass(interactable.dataset.type);
    }
}
// Sets trailer to visible
trailer.style.display = "flex";