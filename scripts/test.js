document.addEventListener('DOMContentLoaded', function () {
  // Get the Lottie player element
  const lottiePlayer = document.querySelector('lottie-player');

  // Hide loading elements when animation completes
  lottiePlayer.addEventListener('animationend', function () {
    const loadingContainer = document.getElementById('loadingContainer');
    loadingContainer.style.display = 'none';
  });
});
