document.getElementById('Change-Profile-Picture').addEventListener('click', function() {
    document.getElementById('file-input').click();
});

document.getElementById('file-input').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            document.getElementById('Profile-Picture-Image').src = e.target.result;
        };
        reader.readAsDataURL(file);
    }
});

