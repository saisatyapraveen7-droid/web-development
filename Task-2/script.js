document.getElementById("contactForm").addEventListener("submit", function (e) {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const errorMessage = document.getElementById("error-message");

  errorMessage.textContent = "";

  // Simple email validation pattern
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  if (!name || !email || !message) {
    errorMessage.textContent = "All fields are required.";
    e.preventDefault();
    return;
  }

  if (!email.match(emailPattern)) {
    errorMessage.textContent = "Please enter a valid email address.";
    e.preventDefault();
    return;
  }

  alert("Form submitted successfully!");
});


function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskList = document.getElementById("taskList");

  const taskText = taskInput.value.trim();
  if (taskText === "") return;

  const li = document.createElement("li");
  li.textContent = taskText;

  const removeBtn = document.createElement("button");
  removeBtn.textContent = "Remove";
  removeBtn.style.marginLeft = "10px";
  removeBtn.onclick = () => taskList.removeChild(li);

  li.appendChild(removeBtn);
  taskList.appendChild(li);

  taskInput.value = "";
}
