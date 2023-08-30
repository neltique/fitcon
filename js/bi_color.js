$(() => {
    let prevColrId = "bi_color_03";

    $("#bi .bi_inner .bi_content .bi_colors .bi_color").click((target) => {
        let targetId = $(target.currentTarget).attr("id");
        let nextColorId = targetId;

        if (nextColorId != prevColrId) {
            $("#" + nextColorId).animate({
                width: "+=120px",

            });

            $("#" + prevColrId).animate({
                width: "-=120px",
            });


            $("#" + nextColorId).children("h4.cmyk, h4.rgb").css({ "display": "block" });
            $("#" + nextColorId).children("h4.hexCode").css({
                "color": "#f1f3f4"
            });
            $("#" + nextColorId).children("h4.hexCode").animate({
                "font-size": "32px",
                "line-height": "100%",
            });

            $("#" + prevColrId).children("h4.cmyk, h4.rgb").css({ "display": "none" });
            $("#" + prevColrId).children("h4.hexCode").css({
                "color": "#4e505b"
            });
            $("#" + prevColrId).children("h4.hexCode").animate({
                "font-size": "24px",
                "line-height": "100%",
            });
            prevColrId = nextColorId;
        }
    });
})


