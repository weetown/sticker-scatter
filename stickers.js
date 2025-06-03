let stickers = [
        'sticker1.png', 
        'sticker2.png',
        'sticker3.png',
        /*etc....*/
    ];

    const container = document.getElementById('sticker-container'); /*Change this if you want to put the stickers in a different element*/

    stickers.forEach(stickerUrl => {
        const img = document.createElement('img');
        img.src = stickerUrl;
        img.className = 'sticker';
        img.onload = () => {
            const x = Math.random() * (container.clientWidth - img.width);
            const y = Math.random() * (container.clientHeight - img.height);
            const rotation = `${Math.random() * 60 - 30}deg`;
            img.style.left = `${x}px`;
            img.style.top = `${y}px`;
            img.style.setProperty('--rotation', rotation);
        };

        container.appendChild(img);
    });
