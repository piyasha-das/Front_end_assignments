$(document).ready(function(){
    $('#search').on("click",function(e){
        $('#text').show();
        $('.close').show();
        e.preventDefault();
    })
    $('.close').click(function(){
        $('#text').hide();
        $('.close').hide();
    })
    $('#section1').click(function(){
        $('#logolist1').show();
        $('#logolist2').hide();
        $('#logolist3').hide();
        $('#logolist4').hide();
        $('#logolist5').hide();
        $('#logolist6').hide();
        $('#logolist7').hide();
        $('#logolist8').hide();
    })
    $('#section2').click(function(){
        $('#logolist1').hide();
        $('#logolist2').show();
        $('#logolist3').hide();
        $('#logolist4').hide();
        $('#logolist5').hide();
        $('#logolist6').hide();
        $('#logolist7').hide();
        $('#logolist8').hide();
    })
    $('#section3').click(function(){
        $('#logolist1').hide();
        $('#logolist2').hide();
        $('#logolist3').show();
        $('#logolist4').hide();
        $('#logolist5').hide();
        $('#logolist6').hide();
        $('#logolist7').hide();
        $('#logolist8').hide();
    })
    $('#section4').click(function(){
        $('#logolist1').hide();
        $('#logolist2').hide();
        $('#logolist3').hide();
        $('#logolist4').show();
        $('#logolist5').hide();
        $('#logolist6').hide();
        $('#logolist7').hide();
        $('#logolist8').hide();
    })
    $('#section5').click(function(){
        $('#logolist1').hide();
        $('#logolist2').hide();
        $('#logolist3').hide();
        $('#logolist4').hide();
        $('#logolist5').show();
        $('#logolist6').hide();
        $('#logolist7').hide();
        $('#logolist8').hide();
    })
    $('#section6').click(function(){
        $('#logolist1').hide();
        $('#logolist2').hide();
        $('#logolist3').hide();
        $('#logolist4').hide();
        $('#logolist5').hide();
        $('#logolist6').show();
        $('#logolist7').hide();
        $('#logolist8').hide();
    })
    $('#section7').click(function(){
        $('#logolist1').hide();
        $('#logolist2').hide();
        $('#logolist3').hide();
        $('#logolist4').hide();
        $('#logolist5').hide();
        $('#logolist6').hide();
        $('#logolist7').show(); 
        $('#logolist8').hide();  
    })
    $('#section8').click(function(){
        $('#logolist1').hide();
        $('#logolist2').hide();
        $('#logolist3').hide();
        $('#logolist4').hide();
        $('#logolist5').hide();
        $('#logolist6').hide();
        $('#logolist7').hide();
        $('#logolist8').show(); 
    })
    $('.main1').mouseenter(function(){
        $('.view11').hide();
        $('.view12').show();
    })
    $('.main1').mouseleave(function(){
        $('.view11').show();
        $('.view12').hide();
    })


    $('.main2').mouseenter(function(){
        $('.view21').hide();
        $('.view22').show();
    })
    $('.main2').mouseleave(function(){
        $('.view21').show();
        $('.view22').hide();
    })


    $('.main3').mouseenter(function(){
        $('.view31').hide();
        $('.view32').show();
    })
    $('.main3').mouseleave(function(){
        $('.view31').show();
        $('.view32').hide();
    })


    $('.main4').mouseenter(function(){
        $('.view41').hide();
        $('.view42').show();
    })
    $('.main4').mouseleave(function(){
        $('.view41').show();
        $('.view42').hide();
    })

    $('.main5').mouseenter(function(){
        $('.view51').hide();
        $('.view52').show();
    })
    $('.main5').mouseleave(function(){
        $('.view51').show();
        $('.view52').hide();
    })

    $('.main6').mouseenter(function(){
        $('.view61').hide();
        $('.view62').show();
    })
    $('.main6').mouseleave(function(){
        $('.view61').show();
        $('.view62').hide();
    })
});