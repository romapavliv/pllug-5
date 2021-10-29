const dragAndDropArea = document.getElementById('drag-n-drop-container');
console.log(dragAndDropArea);

const fileEl = document.querySelector('#fileEl');
console.log(fileEl);

['dragenter', 'dragover', 'dragleave', 'drop'].forEach((eventName) =>
    dragAndDropArea.addEventListener(eventName, (event) => {
        event.preventDefault();
        event.stopPropagation();
        console.log(eventName);
    })
);

dragAndDropArea.addEventListener('drop', (event) => {
    let dt = event.dataTransfer;
    console.log(dt);
    let files = dt.files;
    console.log(files);
    [...files].forEach(displayImage);
})

const previewContainer = document.querySelector('#preview-container');

function displayImage(file) {
    console.log(file);
    if (file) {
        const img = document.createElement('IMG');
        img.src = URL.createObjectURL(file);
        img.classList.add('thumbnail');
        previewContainer.appendChild(img);
    }
}

fileEl.addEventListener('change', ({target: {files}}) => { 
    [...files].forEach(displayImage);
})