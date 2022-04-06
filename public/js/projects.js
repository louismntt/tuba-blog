// structure blogs home

// const blogSection = document.querySelector('.blogs-section');
//
// // voir doc "firebase get collection order by" — cf groupe insta lien athnony
//
// db.collection("blogs").get().then((blogs) => {
//     blogs.forEach(blog => {
//         if(blog.id != decodeURI(location.pathname.split("/").pop())){
//             createBlog(blog);
//         }
//     })
// })
//
// const createBlog = (blog) => {
//     let data = blog.data();
//     blogSection.innerHTML += `
//     <div class="blog-card">
//         <img src="${data.bannerImage}" class="blog-image" alt="">
//         <h1 class="blog-title">${data.title.substring(0, 100) + '...'}</h1>
//         <p class="blog-overview">${data.article.substring(0, 200) + '...'}</p>
//         <a href="/${blog.id}" class="btn dark">read</a>
//     </div>
//     `;
// }

//–—————————————— TUBA PROJECTS SUR HOME ———————— 

const tubaProjectsSection = document.querySelector('.tuba-projects-section');
// console.log(tubaProjectsSection);

db.collection("Projets-Tuba").get().then((ProjetsTuba) => {
    ProjetsTuba.forEach(projetTuba => {
        if(projetTuba.id != decodeURI(location.pathname.split("/").pop())){
            createTubaProject(projetTuba);
        }
    })
})

const createTubaProject = (projetTuba) => {
    let data = projetTuba.data();
    console.log(projetTuba);
    tubaProjectsSection.innerHTML += `
    <div class="blog-card">
        <h1 class="blog-title">${data.title}</h1>
        <p class="blog-tag" style="text-decoration: underline 0.20rem; text-decoration-color: #FBE039;">${data.tag}</p>
        <p class="blog-overview">${data.article.substring(0, 200) + '...'}</p>
        <a href="/${projetTuba.id}" class="btn dark">lire</a>
    </div>
    `;
}

//–—————————————— PROJETS USAGERS ———————— 

const projectsSection = document.querySelector('.projects-section');
// console.log(tubaProjectsSection);

db.collection("Projets").get().then((Projets) => {
    Projets.forEach(projet => {
        if(projet.id != decodeURI(location.pathname.split("/").pop())){
            createProject(projet);
        }
    })
})

const createProject = (projet) => {
    let data = projet.data();
    projectsSection.innerHTML += `
    <div class="blog-card">
        <h1 class="blog-title">${data.title}</h1>
        <p class="blog-tag" style="text-decoration: underline 0.20rem; text-decoration-color: #FBE039;">${data.domain}</p>
        <p class="blog-overview">${data.article.substring(0, 200) + '...'}</p>
        <a href="/${projet.id}" class="btn dark">lire</a>
    </div>
    `;
}
