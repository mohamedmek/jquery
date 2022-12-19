$(() => {
    var images = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg", "8.jpg"],
        count = 0,
        mySlider = setInterval(() => {
            $(".task1 img")
                .fadeOut(500, function (e) {
                    $(this).attr("src", `imgs/${images[count === images.length ? (count = 0) : count]}`);
                })
                .fadeIn(1000);
            count++;
        }, 1000);

    $(".task1 .stop").on("click", (e) => {
        clearInterval(mySlider);
    });

    
});

$(".task2 img").on("click", function (e) {
    $(this).next().slideToggle();
});