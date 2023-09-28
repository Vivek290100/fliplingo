
const toggleButton = document.getElementById('toggleButton');
const hiddenText = document.getElementById('hiddenText');
let isVisible = false;
function toggleTextVisibility() {
    isVisible = !isVisible;
    hiddenText.style.display = isVisible ? 'block' : 'none';
}
toggleButton.addEventListener('click', toggleTextVisibility);