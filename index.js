import QRCode from 'https://cdn.skypack.dev/qrcode';

function generateQR() {
    const urlInput = document.getElementById('url-input');
    const url = urlInput.value;
    const qrOutput = document.getElementById('qr-output');
    
    QRCode.toCanvas(url, { width: 200 })
        .then(canvas => {
            qrOutput.innerHTML = ''; // Pulire il contenuto precedente
            qrOutput.appendChild(canvas);

            // Creare un Blob con il contenuto del file url.txt
            const blob = new Blob([url], { type: 'text/plain;charset=utf-8' });

            // Creare un link per il download del Blob come file url.txt
            const link = document.getElementById('download-link');
            link.href = URL.createObjectURL(blob);
            link.download = 'url.txt';
            link.style.display = 'block';
        })
        .catch(error => console.error(error));
}

window.generateQR = generateQR;
