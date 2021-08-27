const videoElement = document.getElementById('video');
const button = document.getElementById('button');

// Prompt the user to select a media stream, and pass to video element
async function selectMediaStream() {
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia()
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () => {
            videoElement.play();
        }
    }
    catch(error){

    }
}
button.addEventListener('click', async () => {
    // Disable Button
    button.disabled = true;
    // Start Picture in picture
    await videoElement.requestPictureInPicture();
    // Reset the button
    button.disabled = false
})


// On Load
selectMediaStream()

