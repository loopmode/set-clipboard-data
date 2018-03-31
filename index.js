const ERR_TIMEOUT = new Error('Timed out while waiting for copy event');
const ERR_CONTENT_MISMATCH = new Error('The applied clipboard data does not match the provided value');

export default function setClipboardData(data = '', { mime = 'text/plain', timeout = 60000 } = {}) {
    return new Promise((resolve, reject) => {
        const noResponseTimeout = window.setTimeout(() => reject(ERR_TIMEOUT, timeout);

        const handleCopy = (event) => {
            window.clearTimeout(noResponseTimeout);
            document.removeEventListener('copy', handleCopy);
            try {
                event.preventDefault();
                event.clipboardData.setData(mime, data);

                const clipboardContent = event.clipboardData.getData('text');
                if (clipboardContent === data) {
                    resolve(clipboardContent);
                } else {
                    reject(ERR_CONTENT_MISMATCH);
                }
            }
            catch(error) {
                reject(error);
            }
        }

        document.addEventListener('copy', handleCopy);
        document.execCommand('copy');
    });
}
