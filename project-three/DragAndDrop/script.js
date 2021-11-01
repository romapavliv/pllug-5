const dragAndDropArea = document.getElementById('drag-n-drop-container');
console.log(dragAndDropArea);

const element = (tag, classes = [], content) => {
    const node = document.createElement(tag)

    if (classes.length) {
        node.classList.add(...classes)
    }

    if (content) {
        node.textContent = content
    }

    return node
}

function bytesToSize(bytes) {
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB']
    if (!bytes) {
        return '0 Byte'
    }
    const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
    return Math.round(bytes / Math.pow(1024, i)) + ' ' + sizes[i];
}

const preview = element('div', ['preview']);
let files = [];

const fileEl = document.querySelector('#fileEl');
console.log(fileEl);

const open = document.createElement('button');
open.classList.add('btn');
open.textContent = 'Upload';

const triggerInput = () => fileEl.click();

fileEl.insertAdjacentElement('afterend', open);
fileEl.insertAdjacentElement('afterend', preview);


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

const changeHandler = event => {
    if (!event.target.files.length) {
        return
    }

    files = Array.from(event.target.files)
    preview.innerHTML = ''


    files.forEach(file => {
        const reader = new FileReader()

        reader.onload = ev => {
            const src = ev.target.result
            preview.insertAdjacentHTML('afterbegin', `
          <div class="preview-image">   
            <div class="preview-remove" data-name="${file.name}">&times;</div>
            <img src="${src}" alt="${file.name}" />
            <div class="preview-info">
              <span>${file.name}</span>
              ${bytesToSize(file.size)}
            </div>
          </div>
        `)
        }

        reader.readAsDataURL(file)
    })
}

const removeHandler = event => {
    if (!event.target.dataset.name) {
        return
    }


    const {name} = event.target.dataset
    files = files.filter(file => file.name !== name)


    const block = preview
        .querySelector(`[data-name="${name}"]`)
        .closest('.preview-image')

    block.classList.add('removing')
    setTimeout(() => block.remove(), 300)


}
preview.addEventListener('click', removeHandler);
fileEl.addEventListener('change', changeHandler);


// fileEl.addEventListener('change', ({target: {files}}) => {
//     [...files].forEach(displayImage);
// })


open.addEventListener('click', triggerInput);
