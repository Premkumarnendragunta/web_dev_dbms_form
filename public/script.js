document.getElementById("registrationForm").addEventListener("submit", async function(e) {
    e.preventDefault();
  
    const formData = {
      name: this.name.value,
      email: this.email.value,
      college: this.college.value
    };
  
    const response = await fetch("/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData)
    });
  
    const message = await response.text();
    document.getElementById("responseMessage").innerText = message;
  });
  