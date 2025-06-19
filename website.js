// Get the body element
const body = document.body;

// Create the overlay element
const overlay = document.createElement('div');
overlay.style.position = 'fixed';
overlay.style.top = '0';
overlay.style.left = '0';
overlay.style.width = '100%';
overlay.style.height = '100%';
overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.7)'; // Semi-transparent black overlay
overlay.style.zIndex = '9998'; // Below the dialog, above everything else
overlay.style.backdropFilter = 'blur(5px)'; // Add a blur effect to the background
overlay.style.webkitBackdropFilter = 'blur(5px)'; // For Safari compatibility

// Create the dialog container (this will hold your banner image and buttons)
const dialogContainer = document.createElement('div');
dialogContainer.style.position = 'fixed';
dialogContainer.style.top = '50%';
dialogContainer.style.left = '50%';
dialogContainer.style.transform = 'translate(-50%, -50%)';
dialogContainer.style.zIndex = '9999'; // On top of the overlay
dialogContainer.style.backgroundColor = '#fff'; // White background for the dialog
dialogContainer.style.borderRadius = '8px';
dialogContainer.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.3)';
dialogContainer.style.overflow = 'hidden'; // Ensure image fits within container if rounded corners
dialogContainer.style.textAlign = 'center';
dialogContainer.style.maxWidth = '380px'; // **Adjusted: Medium size, slightly larger than compact**
dialogContainer.style.width = '90%'; // Responsive width
dialogContainer.style.display = 'flex';
dialogContainer.style.flexDirection = 'column'; // Arrange image and buttons vertically
dialogContainer.style.justifyContent = 'space-between'; // Push buttons to the bottom if content is smaller
dialogContainer.style.boxSizing = 'border-box'; // Include padding in width/height calculation

// --- Header with "Реклама" and Info Icon ---
const dialogHeader = document.createElement('div');
dialogHeader.style.display = 'flex';
dialogHeader.style.justifyContent = 'space-between';
dialogHeader.style.alignItems = 'center';
dialogHeader.style.padding = '10px 15px 0 15px'; // Padding for header
dialogHeader.style.color = '#5f6368'; // Google-like grey text
dialogHeader.style.fontSize = '12px';
dialogHeader.style.borderBottom = '1px solid #eee'; // Light separator
dialogHeader.style.paddingBottom = '10px'; // Padding below separator
dialogHeader.style.marginBottom = '0'; // No extra margin here as image will follow

const adLabel = document.createElement('span');
adLabel.textContent = 'Google Ads'; // "Advertisement"
dialogHeader.appendChild(adLabel);

const infoIcon = document.createElement('span');
infoIcon.innerHTML = '&#x24D8;'; // Circled i icon (U+24D8: CIRCLED LATIN SMALL LETTER I)
infoIcon.style.fontSize = '14px'; // Slightly larger for visibility
infoIcon.style.cursor = 'pointer';
infoIcon.style.color = '#5f6368';
infoIcon.style.padding = '2px'; // Make it easier to click
infoIcon.style.borderRadius = '50%';
infoIcon.onmouseover = () => infoIcon.style.backgroundColor = '#f0f0f0'; // Light hover effect
infoIcon.onmouseout = () => infoIcon.style.backgroundColor = 'transparent';
// You can add an actual functionality to this icon, e.g., showing a small tooltip or link to ad info
// infoIcon.onclick = () => alert('This is an advertisement.');
dialogHeader.appendChild(infoIcon);


// --- Banner Image ---
const bannerImage = document.createElement('img');
bannerImage.src = 'https://allpublicstorage.s3.amazonaws.com/95dff/orig_42a593ac1b74eb09469ca6373c61d874.jpg';
bannerImage.alt = 'Banner';
bannerImage.style.display = 'block'; // Remove extra space below image
bannerImage.style.maxWidth = '100%'; // Ensure image scales down if too wide
bannerImage.style.height = 'auto'; // Maintain aspect ratio
bannerImage.style.flexShrink = '0'; // Prevent image from shrinking if buttons take too much space
bannerImage.style.padding = '0 15px'; // Add horizontal padding to image itself to match header/footer
bannerImage.style.marginTop = '15px'; // Space from header
bannerImage.style.marginBottom = '15px'; // Space before buttons
bannerImage.style.cursor = 'pointer'; // Add cursor pointer to indicate it's clickable

// Add the click event listener to the banner image
bannerImage.onclick = (event) => {
    event.stopPropagation(); // Prevent overlay click from closing it
    window.open('https://fanday.net/img/casinos/777casino2.webp', '_blank'); // Your desired URL
    document.body.removeChild(overlay);
    document.body.removeChild(dialogContainer);
    document.body.style.overflow = ''; // Restore scrolling
};


// --- Action Buttons ---
const buttonContainer = document.createElement('div');
buttonContainer.style.display = 'flex';
buttonContainer.style.justifyContent = 'flex-end'; // Align buttons to the right
buttonContainer.style.gap = '10px'; // Restored slightly larger gap between buttons
buttonContainer.style.padding = '0 20px 20px 20px'; // **Adjusted: Padding for a balanced look**
buttonContainer.style.marginTop = '0'; // No top margin as padding handles spacing

// "Close" Button
const dismissButton = document.createElement('button');
dismissButton.textContent = 'Close'; // Changed from 'Dismiss'
dismissButton.style.backgroundColor = 'transparent';
dismissButton.style.color = '#1a73e8'; // Google blue text color
dismissButton.style.border = 'none';
dismissButton.style.padding = '10px 15px'; // **Adjusted: Slightly larger padding for buttons**
dismissButton.style.borderRadius = '4px';
dismissButton.style.cursor = 'pointer';
dismissButton.style.fontSize = '14px'; // **Adjusted: Slightly larger font size for buttons**
dismissButton.style.fontWeight = '500';
dismissButton.style.transition = 'background-color 0.2s ease';

dismissButton.onmouseover = () => dismissButton.style.backgroundColor = 'rgba(26, 115, 232, 0.04)'; // Light blue hover
dismissButton.onmouseout = () => dismissButton.style.backgroundColor = 'transparent';

dismissButton.onclick = () => {
    document.body.removeChild(overlay);
    document.body.removeChild(dialogContainer);
    document.body.style.overflow = ''; // Restore scrolling
};

// "Open" Button
const goToLinkButton = document.createElement('button');
goToLinkButton.textContent = 'Open'; // Changed from 'Proceed'
goToLinkButton.style.backgroundColor = '#1a73e8'; // Google blue background
goToLinkButton.style.color = '#fff';
goToLinkButton.style.border = 'none';
goToLinkButton.style.padding = '10px 15px'; // **Adjusted: Slightly larger padding for buttons**
goToLinkButton.style.borderRadius = '4px';
goToLinkButton.style.cursor = 'pointer';
goToLinkButton.style.fontSize = '14px'; // **Adjusted: Slightly larger font size for buttons**
goToLinkButton.style.fontWeight = '500';
goToLinkButton.style.transition = 'background-color 0.2s ease';

goToLinkButton.onmouseover = () => goToLinkButton.style.backgroundColor = '#1764cc'; // Darker blue hover
goToLinkButton.onmouseout = () => goToLinkButton.style.backgroundColor = '#1a73e8';

goToLinkButton.onclick = (event) => {
    event.stopPropagation(); // Prevent overlay click from closing it
    // Replace this with the actual URL your banner should lead to
    window.open('https://onlyfans.com/ioannared/c113', '_blank'); // Make sure this is your actual link!
    document.body.removeChild(overlay);
    document.body.removeChild(dialogContainer);
    document.body.style.overflow = ''; // Restore scrolling
};

// Append buttons to their container
buttonContainer.appendChild(dismissButton);
buttonContainer.appendChild(goToLinkButton);

// Append the header, banner image, and button container to the dialog container
dialogContainer.appendChild(dialogHeader);
dialogContainer.appendChild(bannerImage);
dialogContainer.appendChild(buttonContainer);

// --- Delay the appearance of the banner by 10 seconds ---
setTimeout(() => {
    // Check if the specific banner element exists
    const existingBanner = document.querySelector('.ns-x09mb-l-banner3-square.ns-x09mb-v-0');

    // Only show the new banner if the existing banner is NOT present
    if (!existingBanner) {
        // Append the overlay and dialog to the body
        body.appendChild(overlay);
        body.appendChild(dialogContainer);

        // Prevent scrolling on the underlying page
        body.style.overflow = 'hidden';
    }
}, 60000); // 60000 milliseconds = 60 seconds