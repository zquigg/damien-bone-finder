document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.Badge-Button');

    for (let i = 0; i < buttons.length; i++) {
        const img = buttons[i].querySelector('.Button-Image');
        if (img.getAttribute('data-collected') === 'false') {
            buttons[i].disabled = true;
        }
    }


    /* TEST CODE TEST CODE TEST CODE WILL DELETE LATER*/

    const testButton = document.getElementById('but');
    let counter = 0;

    testButton.addEventListener('click', () => {
        counter++
        if (counter > 1) {
            counter = 0;
        }

        if (counter == 0) {
            for (let i = 0; i < buttons.length; i++) {
                const img = buttons[i].querySelector('.Button-Image');
                img.setAttribute('data-collected', 'false');
            }
        }

        if (counter == 1) {
            for (let i = 0; i < buttons.length; i++) {
                const img = buttons[i].querySelector('.Button-Image');
                img.setAttribute('data-collected', 'true');
            }
        }

        buttons.forEach(button => {
            button.disabled = !button.disabled;
        });

    });

    /***************************************************/
});







function campusCenterRedirect () {
    window.location.href = "Campus-Center.html"
}

function centerFountainRedirect () {
    window.location.href = "Center-Fountain.html"
}

function colinsCircleRedirect () {
    window.location.href = "Colins-Circle.html"
}

function entranceFountainRedirect () {
    window.location.href = "Entrance-Fountain.html"
}

function parkerPondRedirect () {
    window.location.href = "Parker-Pond.html"
}

function universityLibraryRedirect () {
    window.location.href = "University-Library.html"
}

