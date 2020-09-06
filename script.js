const birthdayQuiz = {};

birthdayQuiz.feelingsChange = () => {
    $('input[name=feelings]').on('change', function() {
        console.log('change?');
        const snackValue = $('input[name=snack]:checked').val();
        console.log(snackValue)
        if (snackValue !== undefined) {
            console.log('got one');
            birthdayQuiz.updateResult();
        }
    })
}

birthdayQuiz.snackChange = () => {
    $('input[name=snack]').on('change', function() {
        const feelingValue = $('input[name=feelings]:checked').val();
        if (feelingValue !== undefined) {
            birthdayQuiz.updateResult();
        }
    })
}

birthdayQuiz.updateResult = () => {
    const qrCodes = ['./assets/qr-code.png', './assets/qr-code-two.png'];
    const randomIndex = Math.floor(Math.random() * qrCodes.length);
    $('.results').html(
        `<h2>Try this playlist!</h2>
        <div class="img-container"><img src="${qrCodes[randomIndex]}" /></div>
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