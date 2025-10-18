// --- 1. Tạo hiệu ứng Hoa Anh Đào Rơi ---
const sakuraContainer = document.querySelector('.sakura-container');
const numberOfPetals = 40; 

for (let i = 0; i < numberOfPetals; i++) {
    const petal = document.createElement('div');
    petal.classList.add('petal');
    
    petal.style.cssText = `
        position: absolute;
        width: ${10 + Math.random() * 10}px; 
        height: ${10 + Math.random() * 10}px;
        background-color: rgba(255, 192, 203, ${0.7 + Math.random() * 0.3}); 
        border-radius: 50%;
        box-shadow: 0 0 5px rgba(255, 192, 203, 0.5);
        left: ${Math.random() * 100}vw;
        animation: fall ${5 + Math.random() * 7}s linear infinite; 
        animation-delay: -${Math.random() * 12}s; 
    `;
    
    sakuraContainer.appendChild(petal);
}


// --- 2. Xử lý sự kiện chuyển trang khi nhấn nút ---
document.getElementById('nextPageBtn').addEventListener('click', () => {
    // Lệnh chuyển trang ngay lập tức
    window.location.href = 'quatang.html'; 
});