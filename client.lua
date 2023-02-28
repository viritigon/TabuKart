gui = false --Tüm olayın açılıp kapanması
kartsayi = #Kartlar/6
randomkartlar = {1,2,3,4,5,6}
RegisterCommand("Tabu", function() if gui then gui=false SendNUIMessage({gui = gui;randomkartlar = randomkartlar;}); else gui=true SendNUIMessage({gui = gui;randomkartlar = randomkartlar;}); end end, false)

function mixcards()
    function randomkart1() kart1 = math.random(0,kartsayi) end
    function randomkart2() kart2 = math.random(0,kartsayi) if(kart1 == kart2) then randomkart2() end end
    function randomkart3() kart3 = math.random(0,kartsayi) if(kart1 == kart3 or kart2 == kart3) then randomkart3() end end
    function randomkart4() kart4 = math.random(0,kartsayi) if(kart1 == kart4 or kart2 == kart4 or kart3 == kart4) then randomkart4() end end
    function randomkart5() kart5 = math.random(0,kartsayi) if(kart1 == kart5 or kart2 == kart5 or kart3 == kart5 or kart4 == kart5) then randomkart5() end end
    function randomkart6() kart6 = math.random(0,kartsayi) if(kart1 == kart6 or kart2 == kart6 or kart3 == kart6 or kart4 == kart6 or kart5 == kart6) then randomkart6() end end
    randomkart1()
    randomkart2()
    randomkart3()
    randomkart4()
    randomkart5()
    randomkart6()        
    randomkartlar[0] = kart1
    randomkartlar[1] = kart2
    randomkartlar[2] = kart3
    randomkartlar[3] = kart4
    randomkartlar[4] = kart5
    randomkartlar[5] = kart6      
end

RegisterNUICallback("mix", function() mixcards() end)  
RegisterNUICallback("close", function() if gui then gui = false end end)  

Citizen.CreateThread(function() while true do Citizen.Wait(0)
    
SendNUIMessage({Kartlar = Kartlar; kartsayi = kartsayi; gui = gui; randomkartlar = randomkartlar;});

    if (gui) then SetNuiFocus(true,true) else SetNuiFocus(false,false) end end end, false)
