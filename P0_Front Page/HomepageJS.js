//Onload functions
$(document).ready(function(){
    //add colored section 1
    //$('.col-md-6.column.section6').parent().addClass('coloredSection1H');
    AOS.init();

    $("#MPOuter").css("background-image", "url('https://higherlogicdownload.s3.amazonaws.com/NCS4/9c6c4d55-e531-4334-a8e4-aa15c3ebd848/UploadedImages/Created%20Graphics/Backgrounds/NCS4_Website_lower_bg.jpg')");
    $("#MPOuter").css("background-size","cover");
    //
    // background-image: url('https://higherlogicdownload.s3.amazonaws.com/NCS4/9c6c4d55-e531-4334-a8e4-a…48/UploadedImages/Created%20Graphics/Backgrounds/NCS4_Website_lower_bg.jpg'); background-size: cover;
});

//Functionality to change color of header on scroll
// $(window).scroll(function() {
//     if ($(document).scrollTop() > ($(window).height()-50)) {
//       $('#NAV').addClass('changeColorH');
//     } else if($(document).scrollTop() <= ($(window).height()-50)){
//       $('#NAV').removeClass('changeColorH');
//     }
// });



//anchor link
$(document).on('click', 'a.anchorLink', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top
    }, 500);
    return false;
});
