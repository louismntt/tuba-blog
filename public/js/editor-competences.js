const titleCompetencesField = document.getElementById('title-competences');
const nameCompetencesField = document.getElementById('name-competences');

const articleCompetencesField = document.getElementById('article-competences');
const contactCompetencesField = document.getElementById('contact-competences');


// banner
// const bannerImage = document.querySelector('#banner-upload');
// const banner = document.querySelector(".banner");
// let bannerPath;

const publishCompetenceBtn = document.getElementById('publish-competences-button');
// console.log(blogTitleProjectsField);
// const uploadInput = document.querySelector('#image-upload');

// bannerImage.addEventListener('change', () => {
//     uploadImage(bannerImage, "banner");
// })
//
// uploadInput.addEventListener('change', () => {
//     uploadImage(uploadInput, "image");
// })
//
// const uploadImage = (uploadFile, uploadType) => {
//     const [file] = uploadFile.files;
//     if(file && file.type.includes("image")){
//         const formdata = new FormData();
//         formdata.append('image', file);
//
//         fetch('/upload', {
//             method: 'post',
//             body: formdata
//         }).then(res => res.json())
//         .then(data => {
//             if(uploadType == "image"){
//                 addImage(data, file.name);
//             } else{
//                 bannerPath = `${location.origin}/${data}`;
//                 banner.style.backgroundImage = `url("${bannerPath}")`;
//             }
//         })
//     } else{
//         alert("upload Image only");
//     }
// }

// const addImage = (imagepath, alt) => {
//     let curPos = articleFeild.selectionStart;
//     let textToInsert = `\r![${alt}](${imagepath})\r`;
//     articleFeild.value = articleFeild.value.slice(0, curPos) + textToInsert + articleFeild.value.slice(curPos);
// }

let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

publishCompetenceBtn.addEventListener('click', () => {
    if(articleCompetencesField.value.length && titleCompetencesField.value.length){
        // generating id
        let letters = 'abcdefghijklmnopqrstuvwxyz';
        let blogTitle = titleCompetencesField.value.split(" ").join("-");
        let id = '';
        for(let i = 0; i < 4; i++){
            id += letters[Math.floor(Math.random() * letters.length)];
        }

        // setting up docName
        let docName = `${blogTitle}-${id}`;
        let date = new Date(); // for published at info

        //access firstore with db variable;
        db.collection("Compétences").doc(docName).set({
            title: titleCompetencesField.value,
            name: nameCompetencesField.value,

            article: articleCompetencesField.value,
            tag:"competences",
            // bannerImage: bannerPath,
            publishedAt: `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`,
            contact: contactCompetencesField.value,

        })
        .then(() => {
            location.href = `/competences`;
        })
        .catch((err) => {
            console.error(err);
        })
    }
})
