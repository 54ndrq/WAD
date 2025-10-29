window.onload = function () {


    fetch("https://api.npoint.io/9b26ac3e584b23a71ecf")
        .then((response) => response.json())
        .then(json => {

            const body = document.body;

            const feedContainer = document.getElementById("feed-container");

            json.forEach(post => {
                const postContent = document.createElement("div");
                postContent.className = "post-content";

                const userInfo = document.createElement("div");
                userInfo.className = "user-info";
                const userAvatar = document.createElement("img");
                userAvatar.src = "res/images/login.png";
                userAvatar.alt = "user avatar";
                userAvatar.className = "user-info-avatar";
                const userName = document.createElement("p");
                userName.textContent = post.author;
                userName.className = "user-info-name";
                userInfo.appendChild(userAvatar);
                userInfo.appendChild(userName);

                const date = document.createElement("p");
                date.className = "user-info-date";
                date.textContent = post.createTime;
                userInfo.appendChild(date);
                postContent.appendChild(userInfo);

                const userPost = document.createElement("div");
                userPost.className = "user-post";

                const postedImage = document.createElement("img");
                postedImage.src = post.imagePath;
                postedImage.alt = "image";
                postedImage.className = "post-image";

                userPost.appendChild(postedImage);
                postContent.appendChild(userPost);

                const description = document.createElement("div");
                description.className = "post-description";
                const title = document.createElement("p");
                title.textContent = post.title;
                title.className = "description-text";
                description.appendChild(title);
                postContent.appendChild(description);

                const like = document.createElement("div");
                like.className = "like";
                const likeImg = document.createElement("img");
                likeImg.src = "res/images/like.png";
                likeImg.alt = "like button";
                likeImg.className = "like-image";
                like.appendChild(likeImg);
                postContent.appendChild(like);

                feedContainer.appendChild(postContent);

            })
            body.appendChild(feedContainer);
        }).catch(err => {
        let errDiv = document.createElement("div");
        errDiv.className = 'post-content';
        errDiv.innerText = err;
        document.body.appendChild(errDiv);
    }).finally(() => {
        let footer = document.createElement("footer");
        const footerTxt = document.createElement("p");
        footerTxt.textContent = "footer";
        footer.appendChild(footerTxt);

        document.body.appendChild(footer);
    })


}
