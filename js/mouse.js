(function () {

    const cursor = document.querySelector('.cursor');
    const time = document.querySelector('.hours');
    const hour_text = document.querySelectorAll('.hours span');

    const editCursor = e => {
        const { clientX: x, clientY: y } = e;
        cursor.style.left = x + 'px';
        cursor.style.top = y + 'px';
    };

    hour_text.forEach(b => b.addEventListener('mousemove', () => {
        cursor.style.transform = 'scale(3,3)'; // or any x and y value
    }));
    hour_text.forEach(b => b.addEventListener('mouseleave', () => {
        cursor.style.transform = 'scale(1,1)'; // or any x and y value
    }));

    time.addEventListener('mouseover', () => { cursor.style.display = "block"; })
    time.addEventListener('mousemove', editCursor);
    time.addEventListener('mouseleave', () => {
        cursor.style.display = "none";
    });

})();

// const items = document.querySelectorAll(".offline_area ul li");

// let bbBoxWidth = items[0].getBoundingClientRect().width;

// function move() {

//     let l = 0;

//     setInterval(function () {
//         items.forEach((e) => {
//             e.style.left = l + "px";
//             l++;
//         });
//     }, 50);


// };


document.addEventListener("DOMContentLoaded", function () {
    move();
});

// 클래스 offline_area의 ul의 li를 이동한다.
window.onload = function () {
    var bannerLeft = 0;
    var first = 1;
    var last;
    var imgCnt = 0;
    var $img = $(".banner_wraper img");
    var $first;
    var $last;


    // items.forEach((e) => {
    //     console.log(e.getBoundingClientRect().width);

    //     e.style.left = -600 + "px";

    //     console.log("끝나고");
    //     console.log(e.getBoundingClientRect().right);


    // });



    // if (imgCnt > 9) {                //배너 9개 이상이면 이동시킴



    //     last = imgCnt;

    //     setInterval(function () {
    //         $img.each(function () {
    //             $(this).css("left", $(this).position().left - 1); // 1px씩 왼쪽으로 이동
    //         });
    //         $first = $("#banner" + first);
    //         $last = $("#banner" + last);
    //         if ($first.position().left < -200) {    // 제일 앞에 배너 제일 뒤로 옮김
    //             $first.css("left", $last.position().left + $last.width() + 5);
    //             first++;
    //             last++;
    //             if (last > imgCnt) { last = 1; }
    //             if (first > imgCnt) { first = 1; }
    //         }
    //     }, 50);   //여기 값을 조정하면 속도를 조정할 수 있다.(위에 1px 이동하는 부분도 조정하면 

    //     //깔끔하게 변경가능하다           

    // }

};
