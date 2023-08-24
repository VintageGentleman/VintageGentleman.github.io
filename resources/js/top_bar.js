const $div_phone_cover = document.querySelector('#phone_cover');
const $div_phone_inner = document.querySelector('#phone_inner');
const $div_email_cover = document.querySelector('#email_cover');
const $div_email_inner = document.querySelector('#email_inner');

let phone_div_click=0;
document.querySelector('#phone_cover_wrapper').addEventListener('click', function() {
    if(phone_div_click === 0) {
        $div_phone_cover.style.display = "none"
        $div_phone_inner.style.display = "block"
        phone_div_click++;
    } else {
        $div_phone_cover.style.display = "block"
        $div_phone_inner.style.display = "none"
        phone_div_click=0;
    }
});

let email_div_click=0;
document.querySelector('#email_cover_wrapper').addEventListener('click', function() {
    if(email_div_click === 0) {
        $div_email_cover.style.display = "none"
        $div_email_inner.style.display = "block"
        email_div_click++;
    } else {
        $div_email_cover.style.display = "block"
        $div_email_inner.style.display = "none"
        email_div_click=0;
    }
});