function updateGreeting() {
    var nameInput = document.getElementById("name").value;
    document.getElementById("greeting").textContent = nameInput;
  }