document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById("loginForm");

    if (loginForm) {
        loginForm.addEventListener("submit", function(e) {
            e.preventDefault();
            const username = document.getElementById("username").value;
            const password = document.getElementById("password").value;
            const role = document.getElementById("role").value;

            // Simulated login validation (Replace with real authentication as needed)
            if (username && password) {
                if (role === "user") {
                    window.location.href = "user_dashboard.html";
                } else if (role === "merchant") {
                    window.location.href = "merchant_dashboard.html";
                } else {
                    alert("Invalid role selected.");
                }
            } else {
                alert("Please enter both username and password.");
            }
        });
    }
});
