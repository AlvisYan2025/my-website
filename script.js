function adjust_background(){
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
function slide_pages(){
    const page1 = document.getElementById('page1');
    const page2 = document.getElementById('page2');
    const pageLinks = document.querySelectorAll('.page-link');

    pageLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            if (page1.classList.contains('hidden')) {
                page1.classList.remove('hidden');
                page2.classList.add('hidden');
            } else {
                page1.classList.add('hidden');
                page2.classList.remove('hidden');
            }
        });
    });
}
adjust_background();
slide_pages();
