function showView(){
    const viewButtons = document.querySelectorAll(".view-project");
    const projectDetails = document.querySelectorAll(".project-details");

    viewButtons.forEach((button, index) => {
        button.addEventListener("click", () => {
            projectDetails[index].classList.toggle("hidden");
        });
    });
}
showView();