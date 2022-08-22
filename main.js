// $(document).ready(function(){

//     $('.fa-bars').click(function(){
//         $(this).toggleClass('fa-times');
//         $('nav').toggleClass('nav-toggle');

//     });
//     $(window).on('scroll load',function(){
//         $('.fa-bars').removeClass('fa-times');
//         $('nav').removeClass('nav-toggle');
//     });

// // $('.project').magnificPopup({
// //     delegate:'a',
// //     type:'image',
// //     gasllery:{
// //         enabled:true
// //     }
// // });
// });
$(window).ready(function(){
    $('.fa-bars').click(function(){
        $(this).toggleClass('fa-times');
        $('nav').toggleClass('nav-toggle');
    });
    $(window).on('scroll load',function(){
        $('.fa-bars').removeClass('fa-times');
        $('nav').removeClass('nav-toggle');
    });

});