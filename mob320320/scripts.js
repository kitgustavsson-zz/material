(function(win){
  win.onload = function() {
      var sizeElement = document.getElementById("size"),
      nameElement = document.getElementById("name"),
      height = win.innerHeight,
      width = win.innerWidth;

      var name = parent.win.name.split("-")[0];
      if (!name) {
          name = "ad without iframe..."
      }
      nameElement.innerHTML = name;
      sizeElement.innerHTML = width + "x" + height;
  };
})(window);
