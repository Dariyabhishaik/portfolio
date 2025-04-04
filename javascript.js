document.addEventListener("DOMContentLoaded", function () {
    let text = "WELCOME TO MY PORTFOLIO WEBSITE";
    let index = 0;
    let speed = 100; // Typing speed in milliseconds

    let element = document.getElementById("ani");
    let header = document.querySelector("header");
    let mainContent = document.getElementById("main-content");
    let homeContent = document.getElementById("home-content");
    let skillContent = document.getElementById("skill-content");       
    element.innerHTML = ""; // Ensure it's empty before animation starts

    function typeEffect() {
        if (index < text.length) {
            element.innerHTML += text.charAt(index);
            index++;
            setTimeout(typeEffect, speed);
        } else {
            setTimeout(() => {
                element.style.opacity = "0"; // Fade out effect
                setTimeout(() => {
                    element.style.display = "flex";  
                    header.style.display = "flex";   
                    mainContent.style.display = "block"; 
                    homeContent.style.display = "flex"; 
                    skillContent.style.display = "flex";
                }, 500);
            }, 1000);
        }
    }

    setTimeout(typeEffect, 1500);

    // Smooth scrolling for navigation links
    
    document.querySelectorAll("nav ul li a").forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            let targetId = this.getAttribute("href").substring(1);
            let targetSection = document.getElementById(targetId);
      
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 60, // Adjust offset
                    behavior: "smooth"
                   
                });
            }
        });
    });

    // Toggle Skills Section
    let skillsLink = document.querySelector("a[href='#skills']");

    skillsLink.addEventListener("click", function (event) {
        event.preventDefault();
        skillContent.style.display = "flex";
        if (skillContent.style.display === "none" || skillContent.style.display === "") {
            // skillContent.style.display = "flex";
            setTimeout(() => {
                skillContent.style.opacity = "1";
            }, 100);
        }
    });

    // Project section - Open projects in a new tab
    function openProject(url) {
        window.open(url, "_blank");
    }

    document.querySelectorAll(".project-item").forEach(item => {
        item.addEventListener("click", function () {
            let projectUrl = this.getAttribute("onclick").match(/'(.*?)'/)[1];
            openProject(projectUrl);
        });
    });
});



