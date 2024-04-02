const materialDropdown = document.getElementById('material-dropdown');
const materialLink = document.getElementById('material');

materialLink.addEventListener('click', function() {
    materialDropdown.style.display = (materialDropdown.style.display === 'block') ? 'none' : 'block';
});

materialLink.addEventListener('mouseover', function() {
    materialDropdown.style.display = 'block';
});

materialDropdown.addEventListener('mouseleave', function() {
    materialDropdown.style.display = 'none';
});
