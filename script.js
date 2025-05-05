let slideIndex = 2;
carousel(slideIndex);

function tambahHalaman(n) {
    carousel(slideIndex += n)
}

function tampilkanHalman(n) {
    carousel(slideIndex = n)
}

function carousel(n) {
    let card1 = document.getElementById('card1');
    let card2 = document.getElementById('card2');
    let card3 = document.getElementById('card3');

    let courseName = document.getElementById('courseName');

    if (n > 3) { slideIndex = 1 }
    if (n < 1) { slideIndex = 3 }

    console.log(slideIndex)
    var parent = card3.parentNode;

    if (slideIndex == 1) {
        parent.insertBefore(card1, parent.children[1])
        parent.insertBefore(card2, parent.children[2])
        parent.insertBefore(card3, parent.children[0])
        card1.setAttribute("style", "height: 55vh; width: 20vw; opacity: 1;")
        card2.setAttribute("style", "height: calc(55vh / 1.6); width: calc(20vw / 1.6); opacity: 0.5;")
        card3.setAttribute("style", "height: calc(55vh / 1.6); width: calc(20vw / 1.6); opacity: 0.5;")
        courseName.innerHTML = "Rasio Perbandingan | 1 Video"
    } else if (slideIndex == 2) {
        parent.insertBefore(card2, parent.children[1])
        parent.insertBefore(card3, parent.children[2])
        parent.insertBefore(card1, parent.children[0])
        card1.setAttribute("style", "height: calc(55vh / 1.6); width: calc(20vw / 1.6); opacity: 0.5;")
        card3.setAttribute("style", "height: calc(55vh / 1.6); width: calc(20vw / 1.6); opacity: 0.5;")
        card2.setAttribute("style", "height: 55vh; width: 20vw; opacity: 1;")
        courseName.innerHTML = "Titik dan Lingkaran | 1 Video"
    } else if (slideIndex == 3) {
        parent.insertBefore(card3, parent.children[1])
        parent.insertBefore(card1, parent.children[2])
        parent.insertBefore(card2, parent.children[0])
        card1.setAttribute("style", "height: calc(55vh / 1.6); width: calc(20vw / 1.6); opacity: 0.5;")
        card2.setAttribute("style", "height: calc(55vh / 1.6); width: calc(20vw / 1.6); opacity: 0.5;")
        card3.setAttribute("style", "height: 55vh; width: 20vw; opacity: 1;")
        courseName.innerHTML = "Banding Pangkat | 1 Video"
    }
}