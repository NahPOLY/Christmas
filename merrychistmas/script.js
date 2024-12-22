const imageFolderPath = '/images/';
const imageFiles = ['image1.jpg', 'image2.jpg', 'image3.jpg', 'image4.jpg', 'image5.jpg', 'image6.jpg', 'image7.jpg', 'image8.jpg', 'image9.jpg', 'image10.jpg', 'image11.jpg', 'image12.jpg', 'image13.jpg'];  // ชื่อไฟล์ภาพ
let currentImageIndex = 0;

function toggleGift() {
    const gift = document.getElementById('gift');
    gift.classList.toggle('open');
}

function showImage() {
    const expandedMessage = document.getElementById('expandedMessage');
    expandedMessage.classList.add('active');
    startImageRotation();
}

function closeImage() {
    const expandedMessage = document.getElementById('expandedMessage');
    expandedMessage.classList.remove('active');
}

function changeImage(imageUrl) {
    const image = document.querySelector('#expandedMessage img');
    image.src = imageUrl;
}

function startImageRotation() {
    setInterval(() => {
        currentImageIndex = (currentImageIndex + 1) % imageFiles.length;
        const imageUrl = imageFolderPath + imageFiles[currentImageIndex];
        changeImage(imageUrl);
    }, 3000); // เปลี่ยนทุกๆ 3 วินาที
}

