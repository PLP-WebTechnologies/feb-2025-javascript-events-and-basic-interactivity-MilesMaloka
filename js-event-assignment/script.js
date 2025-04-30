// === EVENT HANDLING ===
document.getElementById("clickBtn").addEventListener("click", () => {
    alert("Button clicked!");
  });
  
  document.getElementById("hoverBox").addEventListener("mouseover", () => {
    document.getElementById("hoverBox").style.backgroundColor = "pink";
  });
  
  document.getElementById("keyInput").addEventListener("keypress", (e) => {
    console.log(`You pressed: ${e.key}`);
  });
  
  document.getElementById("clickBtn").addEventListener("dblclick", () => {
    alert("Double-click detected! 🎉");
  });
  
  // === INTERACTIVE COLOR BUTTON ===
  document.getElementById("colorBtn").addEventListener("click", function () {
    this.style.backgroundColor = "limegreen";
    this.textContent = "Changed!";
  });
  
  // === IMAGE SLIDER ===
  const slider = document.getElementById("slider");
  const totalImages = slider.querySelectorAll("img").length;
  let currentIndex = 0;
  
  document.getElementById("nextBtn").addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % totalImages;
    slider.style.transform = `translateX(-${200 * currentIndex}px)`;
  });
  
  // === FORM VALIDATION ===
  document.getElementById("myForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const feedback = document.getElementById("formFeedback");
  
    if (!email.includes("@") || password.length < 8) {
      feedback.textContent = "❌ Invalid email or password must be at least 8 characters.";
      feedback.style.color = "red";
    } else {
      feedback.textContent = "✅ Form is valid!";
      feedback.style.color = "green";
    }
  });
  