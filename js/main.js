// 1. Creare un ciclo for per generare un post per ogni oggetto per poi stamparlo nell'html
// 2. Fare cambiare colore al click al bottone like 
// 3. Aumentare il counter dei like del post
// 4. Salvare in un array gli id dei post a cui si è messo like

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

const postContainer=document.querySelector(".posts-list");
for(let i = 0; i < posts.length; i++) {
    const template = document.getElementById('template-post').content.cloneNode(true);
    const post = posts[i];
    const date=posts[i].created;
    const dateMonth=date[5]+date[6];
    const now=new Date;
    const actualMonth=now.getMonth()+1;
    const dateYear=date[0]+date[1]+date[2]+date[3];
    const actualYear=now.getFullYear();
    const yearsPassed=actualYear-dateYear;
    const monthsPassed=actualMonth-dateMonth;
    let likes=template.querySelector(".js-likes-counter");
    const postsLiked=[];
    template.querySelector('.post__text').innerHTML = post.content;
    if( post.author.image===null) {
        template.querySelector('.post-meta__icon').innerHTML="LF";
    } else {
        template.querySelector('.profile-pic').setAttribute("src",`${post.author.image}`);
    }
    if(yearsPassed==1){
        template.querySelector('.post-meta__time').innerHTML = `1 anno fa`;
    }else if(yearsPassed==0 && monthsPassed!=1){
        template.querySelector('.post-meta__time').innerHTML = `${monthsPassed} mesi fa`;
    }else if(monthsPassed==1){
        template.querySelector('.post-meta__time').innerHTML = `1 mese fa`;
    }else if(yearsPassed>1){
        template.querySelector('.post-meta__time').innerHTML = `${yearsPassed} anno fa`;
    }
    template.querySelector('.post-meta__author').innerHTML = post.author.name;
    likes.innerHTML = Number(post.likes);
    template.querySelector('.post__image').innerHTML=`<img src="${post.media}" alt="${post.author.name}">`;
    const btn=template.querySelector('.like-button');
    btn.setAttribute("data-postid",post.id);
    let liked=false;
    const id=btn.getAttribute("data-postid");
    btn.addEventListener("click",function(){
        if(liked===false){
            btn.classList.add("like-button--liked");
            likes.innerHTML=Number(likes.innerHTML)+1;
            postsLiked.push(id);
            console.log(postsLiked);
            liked=true;
        }else{
            btn.classList.remove("like-button--liked");
            likes.innerHTML=Number(likes.innerHTML)-1;;
            liked=false;
        }
    });
    console.log(postsLiked);
    postContainer.append(template);
}

