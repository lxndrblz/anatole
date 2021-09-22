


function setDisplay(elements, value) {
    elements.forEach(element => {
        element.style.display = value;
    });
}

var isDropdownShowing = false;

function toggleDropdown() {
    var displayVal = isDropdownShowing ? 'none' : 'block';
    isDropdownShowing = !isDropdownShowing;

    setDisplay(document.querySelectorAll('.sl-nav li ul'), displayVal);
    setDisplay(document.querySelectorAll('.sl-nav li ul li'), displayVal);
    setDisplay(document.querySelectorAll('.sl-nav li .triangle'), displayVal);
}


// Add listener after page loads
document.addEventListener(
    'DOMContentLoaded',
    function () {
    document.querySelector('ul[class="sl-nav"]').addEventListener('click', function() {toggleDropdown();}, false);

    // window.onclick = function(event) {
    //     if (!event.target.matches('ul[class="sl-nav"]')) {
    //         isDropdownShowing = true;   // TODO: change implmentation
    //         toggleDropdown();
    //     }
    // }
    },
    false,
  );

