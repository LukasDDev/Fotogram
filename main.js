let img = [
    "london(1).jpg",
    "london(2).jpg",
    "london(3).jpg",
    "london(4).jpg",
    "london(5).jpg",
    "london(6).jpg",
    "london(7).jpg",
    "london(8).jpg",
    "london(9).jpg",
    "london(10).jpg",
    "london(11).jpg",
    "london(12).jpg",
];

let imgTitles = [
    "London Eye",
    "Royal Guard",
    "Big Ben",
    "Notting Hill",
    "Covent Garden",
    "Guinness",
    "Shard",
    "Tube",
    "St.Pauls Cathedral",
    "Walkie Talkie",
    "Camden Town",
    "Soho",
];

function getImg() {
    let imagesData = [];
    for (let i = 0; i < img.length; i++) {
        imagesData.push({
            index: i,
            file: img[i],
            title: imgTitles[i]
        });
    }
    return imagesData;
}

let currentImageIndex = 0;

function openDialog(index) {
    currentImageIndex = index;
    const data = getImg()[index];
    const dialog = document.getElementById("dialogPreview");
    const dialogImg = document.getElementById("dialogImg");
    const dialogTitle = document.getElementById("dialogTitle");

    dialogImg.src = `./bilderFotogram/${data.file}`;
    dialogTitle.textContent = data.title;
    imageCounter.textContent = `${currentImageIndex + 1} / ${img.length}`;
    dialog.showModal();
}

function closeDialog() {
    const dialog = document.getElementById("dialogPreview");
    dialog.close();
}

const dialog = document.getElementById("dialogPreview");

dialog.addEventListener("click", (e) => {
  if (e.target === dialog) 
    dialog.close();
});

function nextImg(){
    currentImageIndex++;
    if (currentImageIndex >= img.length) currentImageIndex = 0;
    openDialog(currentImageIndex);
}

const imageCounter = document.getElementById("imageCounter")
imageCounter.innerHTML = `${currentImageIndex + 1} / ${img.length}`;

function prevImg(){
    currentImageIndex--;
    if (currentImageIndex < 0) currentImageIndex = img.length - 1;
    openDialog(currentImageIndex);
}

document.addEventListener("keydown", (event) => {
    if (!dialog.open) return;

    switch (event.key) {
        case "ArrowRight":
            event.preventDefault();
            nextImg();
            break;
        case "ArrowLeft":
            event.preventDefault();
            prevImg();
            break;
    }
});