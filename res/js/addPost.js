window.addEventListener("DOMContentLoaded", () => {
    const addPostForm = document.getElementById("addPostForm");
    const postImageInput = document.getElementById("postImage");
    const fileNameSpan = document.getElementById("fileName");

    postImageInput.addEventListener("change", function () {
        if (postImageInput.files.length > 0) {
            fileNameSpan.textContent = postImageInput.files[0].name;
        } else {
            fileNameSpan.textContent = "No file chosen";
        }
    });

    addPostForm.addEventListener("submit", function (e) {
        e.preventDefault();
        window.location.href = "index.html";
    });
});
