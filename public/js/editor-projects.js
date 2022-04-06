const titleProjectsField = document.getElementById('title-projects');
const domainProjectsField = document.getElementById('domain-projects');

const articleProjectsField = document.getElementById('article-projects');
const contactProjectsField = document.getElementById('contact-projects');


// banner
// const bannerImage = document.querySelector('#banner-upload');
// const banner = document.querySelector(".banner");
// let bannerPath;

const publishProjectBtn = document.getElementById('publish-project-button');
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

publishProjectBtn.addEventListener('click', () => {
    if(articleProjectsField.value.length && titleProjectsField.value.length){
        // generating id
        let letters = 'abcdefghijklmnopqrstuvwxyz';
        let blogTitle = titleProjectsField.value.split(" ").join("-");
        let id = '';
        for(let i = 0; i < 4; i++){
            id += letters[Math.floor(Math.random() * letters.length)];
        }

        // setting up docName
        let docName = `${blogTitle}-${id}`;
        let date = new Date(); // for published at info

        //access firstore with db variable;
        db.collection("Projets").doc(docName).set({
            title: titleProjectsField.value,
            domain: domainProjectsField.value,

            article: articleProjectsField.value,
            tag:"projets",
            // bannerImage: bannerPath,
            publishedAt: `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`,
            contact: contactProjectsField.value,

        })
        .then(() => {
            location.href = `/projects`;
        })
        .catch((err) => {
            console.error(err);
        })
    }
})
