const birthdayQuiz = {};

birthdayQuiz.feelingsChange = () => {
    $('input[name=feelings]').on('change', function() {
        console.log('change?');
        const snackValue = $('input[name=snack]:checked').val();
        console.log(snackValue)
        if (snackValue !== undefined) {
            console.log('got one');
            const feelingValue = $("input[name=feelings]:checked").val();
            birthdayQuiz.updateResult(feelingValue);
        }
    })
}

birthdayQuiz.snackChange = () => {
    $('input[name=snack]').on('change', function() {
        const feelingValue = $('input[name=feelings]:checked').val();
        if (feelingValue !== undefined) {
            birthdayQuiz.updateResult(feelingValue);
        }
    })
}

birthdayQuiz.updateResult = (feeling) => {
    const qrCodes = {
      elated: "./assets/qr-code-elated.png",
      mellow: "./assets/qr-code-mellow.png",
      cheerless: "./assets/qr-code-four.png",
    };
    const links = {
      elated:
        "https://open.spotify.com/playlist/4gm5xevvIyd3iDn5EC4aut?si=sM4SfztPQ6S4aG4tzCzdXA",
      cheerless:
        "https://open.spotify.com/playlist/1gg6oSc5Huwlbn85JRVVvj?si=lVRINPRWTr2Nz7HJoVNXPw",
      mellow:
        "https://open.spotify.com/playlist/4FCn4ncipEkuen1CIwSBSD?si=BegfhQa1TIW_V8eCSpZoQA",
    };
    const image = qrCodes[feeling]
    $('.results').html(
        `<h2>Scan this QR Code!</h2>
        <div class="img-container"><img src="${image}"/></div>
        <a href=${links[feeling]}>Or click here!</a>
        `
    )
}
birthdayQuiz.init = () => {
    birthdayQuiz.feelingsChange();
    birthdayQuiz.snackChange();
}
$(function() {
    birthdayQuiz.init();
})