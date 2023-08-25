function changeTrainerImg(id) {
    let currImg = document.getElementById("currTrainerImg");
    // 현재 이미지소스위치 속성값을 가져온다.
    // 다음 이미지와 비교를 하기 위해서
    const currSrc = currImg.getAttribute("src");
    const nextSrc = "./images/" + id + ".png";


    // 현재 경로와 다음 경로가 다르면 데이터 바꾼다.
    if (currSrc != nextSrc) {
        fadeIn(currImg, nextSrc);
        changeTrainerText(id);
    }
}






const data = [["제이스", "./images/t_name_01.png", "<span class=en>FitCon CEO</span><br>국제 트레이너 &amp; 스포츠 영양코치"],
["리사", "./images/t_name_02.png", "<span class= en>FitCon</span> 온라인 <span=en>PT</span> 대표강사<br>생활체육지도자 2급 보유<br>필라테스 <span=en>MAT</span>, <span=en>PROPS</span> 자격증 보유"], ["마이클", "./images/t_name_03.png", "<span class=en>Fitcon</span> 온라인 <span class=en>PT</span> 대표강사<br>미국스포츠의학회(<span class=en>NASM</span>) 마스터트레이너<br>생활체육지도 2급 보유"]];

function changeTrainerText(id) {
    let name_en = document.getElementById("t_curr_name_en");

    let curr_Num = parseInt(id[id.length - 1] - 1);

    // 내용 채우기
    // 1. 이름
    // 2. 영어 이름 이미지 소스 변경
    // 3. 인물의 내역 변경을 타이핑 하는 애니메이션으로
    // 4. 버튼의 이름 변경
    // 5. 버튼의 href 바꿔야 함 -> 아직안함


    let name = new Typed('#t_curr_name', {
        strings: [data[curr_Num][0]],
        typeSpeed: 5,
        showCursor: false,
    });

    name_en.src = data[curr_Num][1];


    let t_curr_text = new Typed('#t_curr_text', {
        strings: [data[curr_Num][2]],
        typeSpeed: 5,
        showCursor: false,
    });


    let btn_name = new Typed('#t_more_curr_name', {
        strings: [data[curr_Num][0]],
        typeSpeed: 5,
        showCursor: false,
    });
}



function fadeIn(target, src) {
    var level = 0;
    var inTimer = null;
    inTimer = setInterval(function () {
        level = fadeInAction(target, level, inTimer, src);
    }, 50);
}
function fadeInAction(target, level, inTimer, src) {
    level = level + 0.1;
    changeOpacity(target, level, src);
    if (level > 1) clearInterval(inTimer);
    return level;
}
function fadeOut(target) {
    var level = 1;
    var outTimer = null;
    outTimer = setInterval(function () {
        level = fadeOutAction(target, level, outTimer);
    }, 50);
}
function fadeOutAction(target, level, outTimer) {
    level = level - 0.1;
    changeOpacity(target, level);
    if (level < 0) {
        clearInterval(outTimer);
    }
    return level;
}
function changeOpacity(target, level, src) {
    let obj = target;
    obj.style.opacity = level;
    obj.style.MozOpacity = level;
    obj.style.KhtmlOpacity = level;
    obj.style.MsFilter = "'progid: DXImageTransform.Microsoft.Alpha(Opacity=" + (level * 100) + ")'";
    obj.style.filter = "alpha(opacity=" + (level * 100) + ");";
    obj.src = src
}