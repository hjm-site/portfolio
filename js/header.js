function initHeader() {
    /* PC/TABLET - 메뉴 hover 드롭 메뉴 */
    $('#projectMenu').hover(function() {
        $(this).parent().find('#projectMenuDrop').css('height', 'auto');
        $(this).parent().find('#projectMenuDrop').stop().slideDown(1);
    }, function() {
        $('#projectMenuDrop').stop().slideUp(1);
    });

    /* MOBILE - 햄버거 메뉴 */
    var menuBurger = document.querySelector('.burger .trigger');
    var burgerLine1 = document.querySelector('.burger .trigger .line1');
    var burgerLine2 = document.querySelector('.burger .trigger .line2');
    var burgerLine3 = document.querySelector('.burger .trigger .line3');
    var mobileMenu = document.querySelector('.mobile');
    var mobileBg = document.querySelector('.mobile_bg');
    menuBurger.addEventListener('click', () => {
        burgerLine1.classList.toggle('cross');
        burgerLine2.classList.toggle('out');
        burgerLine3.classList.toggle('cross');
        mobileMenu.classList.toggle('open');
        mobileBg.classList.toggle('set');
    });

    /* MOBILE - 메인 메뉴 클릭 서브 메뉴 */
    $('#header .box .mobile .mb_box .main').click(function() {
        $(this).next('.sub').stop().slideToggle(300);
        $(this).next('.sub').siblings('.sub').slideUp(300);
        $(this).children('.arrow').toggleClass('up');
        $(this).siblings('.main').children('.arrow').removeClass('up');
    });

    /* 안내 */
    /* 엘포트 */
    document.getElementById("lportWarning1").addEventListener("click", function() {
        alert("㈜엘포트\n준비 중입니다!");
    });
    document.getElementById("lportWarning2").addEventListener("click", function() {
        alert("㈜엘포트\n준비 중입니다!");
    });
    /* 비콘 */
    document.getElementById("viconWarning1").addEventListener("click", function() {
        alert("㈜비콘\n준비 중입니다!");
    });
    document.getElementById("viconWarning2").addEventListener("click", function() {
        alert("㈜비콘\n준비 중입니다!");
    });
    /* 이에스리조트클럽 */
    document.getElementById("esresortclubWarning1").addEventListener("click", function() {
        alert("㈜이에스리조트클럽\n준비 중입니다!");
    });
    document.getElementById("esresortclubWarning2").addEventListener("click", function() {
        alert("㈜이에스리조트클럽\n준비 중입니다!");
    });
}
