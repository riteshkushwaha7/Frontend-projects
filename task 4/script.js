document.addEventListener('DOMContentLoaded', function () {

    function validateEmail(email) {
        var re = /\S+@\S+\.\S+/;
        return re.test(email);
    }


    function submitForm(formData) {
        // Log form data to console
        console.log('Form Data:', formData);

    
        alert('Message sent successfully');
    }

    
    document.querySelectorAll('form').forEach(form => {
        form.addEventListener('submit', function (event) {
            event.preventDefault();

            const formData = new FormData(form);
            const formDataObject = {};
            formData.forEach((value, key) => {
                formDataObject[key] = value;
            });

        
            submitForm(formDataObject);
        });
    });


    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav');

    if (menuToggle && nav) {
        menuToggle.addEventListener('click', () => {
            nav.classList.toggle('active');
        });
    }
});
