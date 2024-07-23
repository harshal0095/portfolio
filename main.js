/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
    const scrollDown = window.scrollY

  sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id'),
              sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')
        
        if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
 
        }else{
     
        }                                                    
    })
}
window.addEventListener('scroll', scrollActive)

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
//     reset: true
});

sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text',{}); 
sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img',{delay: 400}); 
sr.reveal('.home__social-icon',{ interval: 200}); 
sr.reveal('.skills__data, .work__img, .contact__input',{interval: 200}); 


document.getElementById('downloadButton').addEventListener('click', function() {
    var imageUrl = 'assets/img/Resume.png'; // Replace with the actual path to your image file

    // Create elements for the image and close button
    var overlay = document.createElement('div');
    overlay.style.position = 'fixed';
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.width = '100%';
    overlay.style.height = '100%';
    overlay.style.background = 'rgba(0, 0, 0, 0.5)';
    overlay.style.zIndex = '9999';
    overlay.style.display = 'flex';
    overlay.style.alignItems = 'center';
    overlay.style.justifyContent = 'center';

    var img = document.createElement('img');
    img.src = imageUrl;
    img.style.maxWidth = '80%';
    img.style.maxHeight = '80%';

    var closeButton = document.createElement('button');
    closeButton.innerText = 'Close';
    closeButton.style.position = 'absolute';
    closeButton.style.top = '20px';
    closeButton.style.right = '20px';
    closeButton.style.padding = '10px 20px';
    closeButton.style.background = '#ccc';
    closeButton.style.border = 'none';
    closeButton.style.cursor = 'pointer';
    closeButton.style.zIndex = '10000';
    closeButton.addEventListener('click', function() {
        document.body.removeChild(overlay);
    });

    overlay.appendChild(img);
    overlay.appendChild(closeButton);
    document.body.appendChild(overlay);
});

document.addEventListener("DOMContentLoaded", () => {
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');
    
    // Check if a theme is already saved in localStorage
    const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;

    if (currentTheme) {
        document.body.classList.add(currentTheme);
        if (currentTheme === 'dark-mode') {
            themeIcon.classList.replace('bx-moon', 'bx-sun');
        } else {
            themeIcon.classList.replace('bx-sun', 'bx-moon');
        }
    }
    
    themeToggle.addEventListener('click', () => {
        if (document.body.classList.contains('dark-mode')) {
            document.body.classList.replace('dark-mode', 'light-mode');
            themeIcon.classList.replace('bx-sun', 'bx-moon');
            localStorage.setItem('theme', 'light-mode');
        } else {
            document.body.classList.replace('light-mode', 'dark-mode');
            themeIcon.classList.replace('bx-moon', 'bx-sun');
            localStorage.setItem('theme', 'dark-mode');
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const homeImage = document.querySelector('.home__blob-img');
    const aboutImage = document.querySelector('.about__img img');
    const skillsImage = document.querySelector('.skills__img');
    const imagesToProtect = ['pic.png', 'about.jpg', 'Test.jpg']; // List of images to protect

    // Function to check if the image should be protected
    function shouldProtectImage(imageUrl) {
        return imagesToProtect.some(protectUrl => imageUrl.includes(protectUrl));
    }

    // Function to prevent right-click on images
    function preventRightClick(event) {
        event.preventDefault();
    }

    // Function to prevent drag-and-drop of images
    function preventDragStart(event) {
        event.preventDefault();
    }

    // Check and apply protection for home image if necessary
    if (homeImage && shouldProtectImage(homeImage.getAttribute('href'))) {
        homeImage.addEventListener('contextmenu', preventRightClick);
        homeImage.addEventListener('dragstart', preventDragStart);
    }

    // Check and apply protection for about image if necessary
    if (aboutImage && shouldProtectImage(aboutImage.getAttribute('src'))) {
        aboutImage.addEventListener('contextmenu', preventRightClick);
        aboutImage.addEventListener('dragstart', preventDragStart);
    }

    // Check and apply protection for skills image if necessary
    if (skillsImage && shouldProtectImage(skillsImage.getAttribute('src'))) {
        skillsImage.addEventListener('contextmenu', preventRightClick);
        skillsImage.addEventListener('dragstart', preventDragStart);
    }
});





// Contact form api settings 

document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault();

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const fileInput = document.getElementById('attachment');

    // Collect form data
    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('message', message);

    // Append files
    for (let i = 0; i < fileInput.files.length; i++) {
        formData.append('attachments[]', fileInput.files[i]);
    }

    // Send email using EmailJS (excluding file attachments)
    fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer zph9IQOVXV4TObPZR` // Replace with your public API key
        },
        body: JSON.stringify({
            service_id: 'service_pkb5ttr', // Replace with your service ID
            template_id: 'template_ppqw5cu', // Replace with your template ID
            user_id: 'zph9IQOVXV4TObPZR', // Replace with your public API key
            template_params: {
                from_name: name,
                from_email: email,
                message: message
            }
        })
    })
    .then(response => response.text()) // Use text() if the response is not JSON
    .then(data => {
        console.log('Success:', data);
        alert('Your message has been sent successfully!');
    })
    .catch(error => {
        console.error('Error:', error);
        alert('There was an error sending your message. Please try again later.');
    });

    // Handle file uploads separately if needed
    // For example, upload files to a file storage service or your server
});


