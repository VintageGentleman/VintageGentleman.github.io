const $span_header_home = document.querySelector('#header_home');

$span_header_home.addEventListener('click', function() {
    location.href='./portfolio_main.html';
});

const containers = document.querySelectorAll('.project_container');

containers.forEach(function(element) {
    element.addEventListener('click', function() {
        let project_num = element.dataset.id;
        location.href=`./project_detail/project${project_num}.html`;
    });
});

/** 스크롤 이동 기능 모아놓은 곳 */
const $main_content = document.querySelector('#main_content');
const $section_profile = document.querySelector('#profile_section');
const $section_stack = document.querySelector('#stack_section');
const $section_project = document.querySelector('#project_section');
const $section_career = document.querySelector('#career_section');

const $side_div_main = document.querySelector('#side_portfolio_main');
const $side_div_stack = document.querySelector('#side_portfolio_stack');
const $side_div_project = document.querySelector('#side_portfolio_project');
const $side_div_career = document.querySelector('#side_portfolio_career');

const $nav_divs = [$side_div_main, $side_div_stack, $side_div_project, $side_div_career];
/**
 * nav_div들 강조 class 제거해주는 함수
 * @param {*} nav_div 제외되는 div
 */
function nav_css_reset(nav_div) {
    $nav_divs.forEach(function(element) {
        if(element == nav_div) return;
        element.classList.remove('present_view') 
    });
}

window.addEventListener('scroll', () => { 
    let scroll = window.scrollY;
    if(scroll >= $section_career.offsetTop - 400) {
        nav_css_reset($side_div_career);
        $side_div_career.classList.add('present_view');
    } else if(scroll >= $section_project.offsetTop - 300) {
        nav_css_reset($side_div_project);
        $side_div_project.classList.add('present_view');
    } else if(scroll >= $section_stack.offsetTop - 400) {
        nav_css_reset($side_div_stack);
        $side_div_stack.classList.add('present_view');
    } else {
        nav_css_reset($side_div_main);
        $side_div_main.classList.add('present_view');
    }
});

/** 스크롤 이동 버튼 기능 */
$side_div_main.addEventListener('click', function() {
    window.scrollTo({top: 0, behavior:'smooth'});
});
$side_div_stack.addEventListener('click', function() {
    window.scrollTo({top: $section_stack.offsetTop - 100, behavior:'smooth'});
});
$side_div_project.addEventListener('click', function() {
    window.scrollTo({top: $section_project.offsetTop - 100, behavior:'smooth'});
});
$side_div_career.addEventListener('click', function() {
    window.scrollTo({top: $section_career.offsetTop - 300, behavior:'smooth'});
});
