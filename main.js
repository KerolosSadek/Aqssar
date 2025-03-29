// Function to handle the download button click event and redirect to the appropriate app store based on the device type
function handleAppDownload() {
    // Track the click event
    fbq('track', 'Downloads');

    // Device detection
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;

    if (/android/i.test(userAgent)) {
        window.location.href = 'https://play.google.com/store/apps/details?id=com.aqssar.aqssar';
    } else if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        window.location.href = 'https://itunes.apple.com/sa/app/أقصر-القراءة-أسهل/id1178137933?mt=8';
    } else {
        // Default fallback
        window.location.href = 'https://itunes.apple.com/sa/app/أقصر-القراءة-أسهل/id1178137933?mt=8';
    }
}