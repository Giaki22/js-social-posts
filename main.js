/* FUNCTIONS */
function printPosts(){
    for(let i=0; i<posts.length; i++){
        const template = document.getElementById("template").content.cloneNode(true);
        if (posts[i].author.image !== null){
            template.querySelector(".profile-pic").src = posts[i].author.image;
        } else {
            const nameAndSurname = posts[i].author.name.split(" ");
            template.querySelector(".post-meta__icon").innerHTML = `<div class="profile-pic-default"><span>${nameAndSurname[0][0]}${nameAndSurname[1][0]}</span></div>`
        }
        template.querySelector(".post-meta__author").innerHTML = posts[i].author.name;
        template.querySelector(".post-meta__time").innerHTML = posts[i].created.split("-").reverse().join("-");
        template.querySelector(".post__text").innerHTML = posts[i].content;
        template.querySelector(".post__image").src = posts[i].media;
        template.getElementById("like-counter-1").innerHTML = posts[i].likes;
        container.appendChild(template);
        const button = document.querySelectorAll(".like-button");
        button[i].addEventListener("click", 
        function(e){
            e.preventDefault();
            const likeCounter = document.querySelectorAll(".js-likes-counter");
                if (!(this.classList.contains("like-button--liked"))){
                    this.classList.add("like-button--liked");
                    likesPlusIDs.likes++;
                    likesPlusIDs.ids += this.getAttribute("data-postid");
                    likeCounter[i].innerHTML++;
                } else {
                    this.classList.remove("like-button--liked");
                    likesPlusIDs.likes--;
                    likesPlusIDs.ids -= this.getAttribute("data-postid");
                    likeCounter[i].innerHTML--;
                }
        });
    }
}
/* VARIABLES */
const posts = [
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=15"
        },
        "likes": 80,
        "created": "2021-06-25"
    },
    {
        "id": 2,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=112",
        "author": {
            "name": "Sofia Perlari",
            "image": "https://unsplash.it/300/300?image=10"
        },
        "likes": 120,
        "created": "2021-09-03"
    },
    {
        "id": 3,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=234",
        "author": {
            "name": "Chiara Passaro",
            "image": "https://unsplash.it/300/300?image=20"
        },
        "likes": 78,
        "created": "2021-05-15"
    },
    {
        "id": 4,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=24",
        "author": {
            "name": "Luca Formicola",
            "image": null
        },
        "likes": 56,
        "created": "2021-04-03"
    },
    {
        "id": 5,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 95,
        "created": "2021-03-05"
    }
];
let likesPlusIDs = {likes : 0, ids : []};
// DOM //
const container = document.getElementById("container");
/* MAIN */
printPosts();