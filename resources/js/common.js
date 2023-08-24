const $span_header_home = document.querySelector('#header_home');
const $to_main_btn = document.querySelector('#to_main_btn');

$span_header_home.addEventListener('click', function() {
    location.href='../index.html';
});
$to_main_btn.addEventListener('click', function() {
    location.href='../index.html#project_section';
});

/**
 * upbutton에 대한 동작 규정, 스크롤 Y 500 이상일 때 보여지게 하고
 * 클릭할 경우 scrollTop을 0로 만듦.
 */
const $button_upbutton = document.querySelector('#upbutton');

window.addEventListener('scroll', function() {
    let scroll = document.documentElement.scrollTop;
    if(scroll >= 500) {
        $button_upbutton.style.display = "block";
    } else {
        $button_upbutton.style.display = "none";
    }
})

$button_upbutton.addEventListener('click', function() {
    window.scrollTo({top: 0, behavior:'instant'});
});