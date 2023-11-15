function adjustBackground(){
    const container = document.getElementById('container');
    console.log(container);
    const backgroundImage = new Image();
    backgroundImage.src = 'public/img/backgroundpic1\ copy.jpg'; 
    backgroundImage.onload = function() {
        container.style.width = backgroundImage.width + 'px';
        container.style.height = backgroundImage.height + 'px';
        //console.log(backgroundImage.width);
        //console.log(backgroundImage.height);
        //console.log(container.style.height);
    };
}
function showView(){
    const viewButtons = document.querySelectorAll(".view-project");
    const projectDetails = document.querySelectorAll(".project-details");
    console.log('loading views');
    viewButtons.forEach((button, index) => {
        button.addEventListener("click", () => {
            projectDetails[index].classList.toggle("hidden");
        });
    });
}
function switchPages(){
    document.addEventListener("DOMContentLoaded", function () {
        const pageLinks = document.querySelectorAll('.page-link');
    
        pageLinks.forEach(link => {
            link.addEventListener('click', (event) => {
                event.preventDefault();
                const targetPage = link.getAttribute('href');
                navigateToPage(targetPage);
            });
        });
    
        async function navigateToPage(targetPage) {
            // Load target page
            const elementToReplace = document.getElementById("toReplace");
            const new_page = await fetch(targetPage);
            const content = await new_page.text();
            elementToReplace.innerHTML = content;
            //console.log(content);
            // Hide the current page
            const currentPage = document.querySelector('.currpage');
            // show the hidden page
            const otherPage = document.querySelector('.otherpage');
            currentPage.classList.remove('current-page');
            currentPage.classList.add('hidden')
            otherPage.classList.add('current-page');
            otherPage.classList.remove('hidden');
            console.log("curr",currentPage);
            console.log("other",otherPage);
            showView();
        }
    });
}
adjustBackground();
switchPages();