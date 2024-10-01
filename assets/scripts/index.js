document.getElementById('hamburger-menu').addEventListener('click', function() {
            var navLinks = document.getElementById('nav-links');
            navLinks.classList.toggle('active');
        });

        let borderSize = 2; 
        const maxBorderSize = 3; 
        const borderIncrement = 1; 
        const whatsappIcon = document.getElementById('wa-icon');
        
        setInterval(() => {
            borderSize += borderIncrement;
            if (borderSize > maxBorderSize) {
                borderSize = 2; 
            }
            whatsappIcon.style.borderWidth = `${borderSize}px`;
        }, 500);


        const text = "Charles Ochieng"; // The text to be typed
        const displayElement = document.getElementById('brand-name');
        let index = 0;
        const typingSpeed = 100; 
        const delayBetweenRetypes = 5000; 
        
        function typeText() {
            if (index < text.length) {
                displayElement.innerHTML += text.charAt(index);
                index++;
                setTimeout(typeText, typingSpeed);
            } else {
                setTimeout(() => {
                    displayElement.innerHTML = ""; 
                    index = 0; 
                    typeText(); 
                }, delayBetweenRetypes); 
            }
        }
        
        typeText(); // Start the typing animation
         