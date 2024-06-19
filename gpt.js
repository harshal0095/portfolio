        // Check for saved user preference, if any, on load
        document.addEventListener('DOMContentLoaded', function () {
            const themeToggle = document.getElementById('theme-toggle');
            const themeIcon = document.getElementById('theme-icon');
            const currentTheme = localStorage.getItem('theme') || 'light';

            if (currentTheme === 'dark') {
                document.body.classList.add('dark-mode');
                themeIcon.classList.replace('bx-moon', 'bx-sun');
            }

            themeToggle.addEventListener('click', function () {
                document.body.classList.toggle('dark-mode');
                const isDarkMode = document.body.classList.contains('dark-mode');
                themeIcon.classList.toggle('bx-moon', !isDarkMode);
                themeIcon.classList.toggle('bx-sun', isDarkMode);
                localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
            });
        });





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


function filterTools() {
    const searchInput = document.getElementById('searchBar').value.toLowerCase();
    const cards = document.querySelectorAll('.ChatAi__card, .wow__card');

    cards.forEach(card => {
        const toolName = card.getAttribute('data-tool').toLowerCase();
        if (toolName.includes(searchInput)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}



// gpt.js

// Handle form submission
document.getElementById('searchForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let searchTerm = document.getElementById('searchInput').value.toLowerCase().trim();
    let found = false;
    let sections = document.querySelectorAll('.ChatAi__card');

    // Loop through all sections to find the one matching the search term
    sections.forEach(function(section) {
        let sectionId = section.id.toLowerCase();
        let toolName = section.querySelector('h3 a').innerText.toLowerCase();
        if (sectionId.includes(searchTerm) || toolName.includes(searchTerm)) {
            scrollToSection(sectionId);
            found = true;
        }
    });

    // If no matching section is found, display an alert
    if (!found) {
        alert('No matching tool found.');
    }
});

// Function to scroll to the section
function scrollToSection(sectionId) {
    let section = document.getElementById(sectionId);
    if (section) {
        window.scrollTo({
            top: section.offsetTop - 100, // Adjust the offset if necessary
            behavior: 'smooth'
        });
    }
}



document.addEventListener('DOMContentLoaded', function () {
    const cards = document.querySelectorAll('.ChatAi__card, .wow__card');

    cards.forEach(card => {
        card.addEventListener('dragstart', dragStart);
        card.addEventListener('dragover', dragOver);
        card.addEventListener('dragenter', dragEnter);
        card.addEventListener('dragleave', dragLeave);
        card.addEventListener('drop', dragDrop);
        card.addEventListener('dragend', dragEnd);
    });

    function dragStart(e) {
        this.classList.add('dragging');
        draggedCard = this;
        e.dataTransfer.effectAllowed = 'move';
        e.dataTransfer.setData('text/html', this.innerHTML);
    }

    function dragOver(e) {
        e.preventDefault();
        e.dataTransfer.dropEffect = 'move';
    }

    function dragEnter(e) {
        e.preventDefault();
        if (this !== draggedCard) {
            this.classList.add('over');
        }
    }

    function dragLeave() {
        this.classList.remove('over');
    }

    function dragDrop(e) {
        e.stopPropagation();
        if (draggedCard !== this) {
            draggedCard.innerHTML = this.innerHTML;
            this.innerHTML = e.dataTransfer.getData('text/html');
        }
        return false;
    }

    function dragEnd() {
        this.classList.remove('dragging');
        cards.forEach(card => {
            card.classList.remove('over');
        });
    }
});
