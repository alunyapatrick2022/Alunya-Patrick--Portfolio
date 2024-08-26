document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('form');
    const result = document.getElementById('result');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission behavior

        var response = hcaptcha.getResponse();

        if (response.length === 0) {
            // hCaptcha not completed
            alert('Please complete the hCaptcha challenge.');
            return;
        }

        const formData = new FormData(form);
        const object = Object.fromEntries(formData.entries());
        const json = JSON.stringify(object);

        result.innerHTML = "Please wait...";

        fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: json
        })
        .then(async (response) => {
            let jsonResponse = await response.json();
            if (response.status === 200) {
                result.innerHTML = "Form submitted successfully";
            } else {
                console.log(response);
                result.innerHTML = jsonResponse.message;
            }
        })
        .catch(error => {
            console.log(error);
            result.innerHTML = "Something went wrong!";
        })
        .finally(() => {
            form.reset();
            setTimeout(() => {
                result.style.display = "none";
            }, 3000);
        });
    });
});
