//–—————————————— COMPETENCES USAGERS ———————— 

const competencesSection = document.querySelector('.competences-section');
// console.log(tubaProjectsSection);

db.collection("Compétences").get().then((Competences) => {
    Competences.forEach(competence => {
        if(competence.id != decodeURI(location.pathname.split("/").pop())){
            createCompetences(competence);
        }
    })
})

const createCompetences = (competence) => {
    let data = competence.data();
    competencesSection.innerHTML += `
    <div class="blog-card">
        <h1 class="blog-title">${data.title}</h1>
        <p class="blog-overview">${data.article.substring(0, 200) + '...'}</p>
        <a href="/${competence.id}" class="btn dark">lire</a>
    </div>
    `;
}
