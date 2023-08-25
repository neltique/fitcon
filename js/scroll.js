
$(window).scroll(function () {
    let height = $(window).scrollTop();

    if (height < 5800) {//아이콘이 나타나길 원하는 높이를 설정하세요
        $('#kakao_side').fadeIn();//나타날 아이콘 클래스 수정!
        $('#instagram_side').fadeIn();//나타날 아이콘 클래스 수정!
        $('#f_kakao').fadeOut();//나타날 아이콘 클래스 수정!
        $('#f_instagram').fadeOut();//나타날 아이콘 클래스 수정!

    } else {
        $('#kakao_side').fadeOut();//나타날 아이콘 클래스 수정!
        $('#instagram_side').fadeOut();//나타날 아이콘 클래스 수정!
        $('#f_kakao').fadeIn();//나타날 아이콘 클래스 수정!
        $('#f_instagram').fadeIn();//나타날 아이콘 클래스 수정!
    }
});