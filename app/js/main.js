document.addEventListener('DOMContentLoaded', function () {
  'use strict';

  // create function to toggle adding/removing a CSS class on an element
  function toggleClass(element, className) {

    // if the element or class name isn't found, return
    if (!element || !className) {
      return;
    }

    var classString = element.className, nameIndex = classString.indexOf(className);
    if (nameIndex === -1) {
      // add a space in between the class name being added an any current class name
      classString += ' ' + className;
    } else {
      classString = classString.substr(0, nameIndex) + classString.substr(nameIndex + className.length);
    }
    element.className = classString;
  }

  // toggle the CSS class add/remove
  // show/hide mobile menu
  document.getElementById('mobile-menu').addEventListener('click', function (e) {
    e.preventDefault();
    // when the mobile-menu element is tapped, add a CSS class named 'active' to the desktop-menu element
    toggleClass(document.getElementById('desktop-menu'), 'active');

  });

  // expand/collapse top songs panel
  document.getElementById('expand-top-songs').addEventListener('click', function (e) {

    e.preventDefault();
    // when the chevron arrow is tapped, add a CSS class named 'active' to the top-songs-panel element
    toggleClass(document.getElementById('top-songs-panel'), 'active');

    document.getElementById('chevron-icon').className = '';

    if (document.getElementById('top-songs-panel').classList.contains('active')) {
      toggleClass(document.getElementById('chevron-icon'), 'chevron-up');
    } else {
      toggleClass(document.getElementById('chevron-icon'), 'chevron-down');
    }
  });
});