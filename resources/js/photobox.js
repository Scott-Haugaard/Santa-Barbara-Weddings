// Photo Box 
const photobox = document.getElementById('photobox1');
const fileInput = document.getElementById('file-input');
const linkInput = document.getElementById('link-input');
const uploadBtn = document.getElementById('upload-btn');
const photoDisplay = document.createElement('img'); 

photobox.addEventListener('dragover', (e) => {
  e.preventDefault();
  e.dataTransfer.dropEffect = 'copy'; 
  photobox.style.border = '5px dashed #008000';
  return false;
});
photobox.addEventListener('dragenter', (e) => {
  console.log('Drag enter!');
  e.preventDefault();
});
photobox.addEventListener('dragleave', (e) => {
  console.log('Drag leave!');
});
photobox.addEventListener('drop', (e) => {
  console.log('Drop!');
  e.preventDefault();
  e.stopPropagation(); 
  const files = e.dataTransfer.files;
  console.log('Files:', files);
  if (files.length > 0) {
    const file = files[0];
    const reader = new FileReader(); 
    reader.onload = (event) => {
      photoDisplay.src = event.target.result;
      photobox.appendChild(photoDisplay); 
    };
    reader.readAsDataURL(file);
  }
  photobox.style.border = '5px dashed #808080';
});

uploadBtn.addEventListener('click', () => {
  const link = linkInput.value.trim();
  if (link !== '') {
    photoDisplay.src = link; 
    photobox.appendChild(photoDisplay); 
  }
});