const $span_header_home = document.querySelector('#header_home');
const $to_main_btn = document.querySelector('#to_main_btn');

$span_header_home.addEventListener('click', function() {
    location.href='../index.html';
});
$to_main_btn.addEventListener('click', function() {
    location.href='../index.html#project_section';
});

