
    let toplujs = true;
    let table = []
    let code;
    let first = true;
    let Kartlar = []
    let randomkartlar = []   

    function collect(){
        if(toplujs == false){
            $(".cardone").css("animation-name", "cardoneslideback");$(".cardtwo").css("animation-name", "cardtwoslideback");$(".cardthree").css("animation-name", "cardthreeslideback");$(".cardfour").css("animation-name", "cardfourslideback");$(".cardfive").css("animation-name", "cardfiveslideback");$(".cardsix").css("animation-name", "cardsixslideback");
            
            setTimeout(function(){$(".cardone").hide();$(".cardtwo").hide();$(".cardthree").hide();$(".cardfour").hide();$(".cardfive").hide();$(".cardsix").hide();
                toplujs = true;
             }, 1000);}}

    function closegui(){$.post("https://Viri-TabuKart/close");}   

    function maincard(){
        if (toplujs == true) {
            $(".cardone").show();$(".cardtwo").show();$(".cardthree").show();$(".cardfour").show();$(".cardfive").show();$(".cardsix").show();
            $(".cardone").css("animation-name", "cardoneslide");$(".cardtwo").css("animation-name", "cardtwoslide");$(".cardthree").css("animation-name", "cardthreeslide");$(".cardfour").css("animation-name", "cardfourslide");$(".cardfive").css("animation-name", "cardfiveslide");$(".cardsix").css("animation-name", "cardsixslide");
            toplujs = false;            
        }}

    function sendcode() {
        var codeone =   $(".codeone").val()
        var codetwo =   $(".codetwo").val()  
        var codethree = $(".codethree").val()  
        var codefour =  $(".codefour").val()  
        var codefive =  $(".codefive").val()  
        var codesix =   $(".codesix").val()        
    
        $(".topone").html((Kartlar[codeone*6]));$(".bottomone").html((Kartlar[codeone*6+1]+"<br>"+Kartlar[codeone*6+2]+"<br>"+Kartlar[codeone*6+3]+"<br>"+Kartlar[codeone*6+4]+"<br>"+Kartlar[codeone*6+5]));
        $(".toptwo").html((Kartlar[codetwo*6]));$(".bottomtwo").html((Kartlar[codetwo*6+1]+"<br>"+Kartlar[codetwo*6+2]+"<br>"+Kartlar[codetwo*6+3]+"<br>"+Kartlar[codetwo*6+4]+"<br>"+Kartlar[codetwo*6+5]));
        $(".topthree").html((Kartlar[codethree*6]));$(".bottomthree").html((Kartlar[codethree*6+1]+"<br>"+Kartlar[codethree*6+2]+"<br>"+Kartlar[codethree*6+3]+"<br>"+Kartlar[codethree*6+4]+"<br>"+Kartlar[codethree*6+5]));
        $(".topfour").html((Kartlar[codefour*6]));$(".bottomfour").html((Kartlar[codefour*6+1]+"<br>"+Kartlar[codefour*6+2]+"<br>"+Kartlar[codefour*6+3]+"<br>"+Kartlar[codefour*6+4]+"<br>"+Kartlar[codefour*6+5]));
        $(".topfive").html((Kartlar[codefive*6]));$(".bottomfive").html((Kartlar[codefive*6+1]+"<br>"+Kartlar[codefive*6+2]+"<br>"+Kartlar[codefive*6+3]+"<br>"+Kartlar[codefive*6+4]+"<br>"+Kartlar[codefive*6+5]));
        $(".topsix").html((Kartlar[codesix*6]));$(".bottomsix").html((Kartlar[codesix*6+1]+"<br>"+Kartlar[codesix*6+2]+"<br>"+Kartlar[codesix*6+3]+"<br>"+Kartlar[codesix*6+4]+"<br>"+Kartlar[codesix*6+5]));     
        $(".maincard").html((codeone)+"-"+(codetwo)+"-"+(codethree)+"-"+(codefour)+"-"+(codefive)+"-"+(codesix));   
    }

    window.addEventListener('message', function (event) {
        if (event.data.gui) {$(".container").show();if(first){mixcards();first = false;console.log("Tabu Kartları (Viritigon)");$(".container").hide();$(".cardone").hide();$(".cardtwo").hide();$(".cardthree").hide();$(".cardfour").hide();$(".cardfive").hide();$(".cardsix").hide();}} else {$(".container").hide();}
        Kartlar = event.data.Kartlar;
        randomkartlar = event.data.randomkartlar;        
    });

    function mixcards(){ 
        if(toplujs)  {
            $.post("https://Viri-TabuKart/mix");     
            $(".topone").html((Kartlar[randomkartlar[0]*6]));$(".bottomone").html((Kartlar[randomkartlar[0]*6+1]+"<br>"+Kartlar[randomkartlar[0]*6+2]+"<br>"+Kartlar[randomkartlar[0]*6+3]+"<br>"+Kartlar[randomkartlar[0]*6+4]+"<br>"+Kartlar[randomkartlar[0]*6+5]));
            $(".toptwo").html((Kartlar[randomkartlar[1]*6]));$(".bottomtwo").html((Kartlar[randomkartlar[1]*6+1]+"<br>"+Kartlar[randomkartlar[1]*6+2]+"<br>"+Kartlar[randomkartlar[1]*6+3]+"<br>"+Kartlar[randomkartlar[1]*6+4]+"<br>"+Kartlar[randomkartlar[1]*6+5]));
            $(".topthree").html((Kartlar[randomkartlar[2]*6]));$(".bottomthree").html((Kartlar[randomkartlar[2]*6+1]+"<br>"+Kartlar[randomkartlar[2]*6+2]+"<br>"+Kartlar[randomkartlar[2]*6+3]+"<br>"+Kartlar[randomkartlar[2]*6+4]+"<br>"+Kartlar[randomkartlar[2]*6+5]));
            $(".topfour").html((Kartlar[randomkartlar[3]*6]));$(".bottomfour").html((Kartlar[randomkartlar[3]*6+1]+"<br>"+Kartlar[randomkartlar[3]*6+2]+"<br>"+Kartlar[randomkartlar[3]*6+3]+"<br>"+Kartlar[randomkartlar[3]*6+4]+"<br>"+Kartlar[randomkartlar[3]*6+5]));
            $(".topfive").html((Kartlar[randomkartlar[4]*6]));$(".bottomfive").html((Kartlar[randomkartlar[4]*6+1]+"<br>"+Kartlar[randomkartlar[4]*6+2]+"<br>"+Kartlar[randomkartlar[4]*6+3]+"<br>"+Kartlar[randomkartlar[4]*6+4]+"<br>"+Kartlar[randomkartlar[4]*6+5]));
            $(".topsix").html((Kartlar[randomkartlar[5]*6]));$(".bottomsix").html((Kartlar[randomkartlar[5]*6+1]+"<br>"+Kartlar[randomkartlar[5]*6+2]+"<br>"+Kartlar[randomkartlar[5]*6+3]+"<br>"+Kartlar[randomkartlar[5]*6+4]+"<br>"+Kartlar[randomkartlar[5]*6+5]));
            $(".maincard").html((randomkartlar[0])+"-"+(randomkartlar[1])+"-"+(randomkartlar[2])+"-"+(randomkartlar[3])+"-"+(randomkartlar[4])+"-"+(randomkartlar[5]));
        }}

    
    
    