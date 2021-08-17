//var hide_empty_list=true; //uncomment this line to hide empty selection lists
var disable_empty_list=true; //uncomment this line to disable empty selection lists

var onclickaction="frame" //set to "alert" or "goto". Former is for debugging purposes, to tell you the value of the final selected list that will be used as the destination URL. Set to "goto" when below configuration is all set up as desired.

var newwindow=0 //Open links in new window or not? 1=yes, 0=no.

/////DEFINE YOUR MENU LISTS and ITEMS below/////////////////

addListGroup("chainedmenu", "First-Select");

addOption("First-Select", "Rapor Türü Seçiniz", "", 1); //HEADER OPTION
addList("First-Select", "Finans", "", "Webmaster");
addList("First-Select", "Muhasebe", "", "News");
addList("First-Select", "Muhasebe-Finans", "", "Cars");

addOption("Webmaster", "Rapor Seçiniz", "", 1); //HEADER OPTION
addList("Webmaster", "Dönemsel Bakiye Listesi", "", "Webmaster-JavaScript");
addList("Webmaster", "Aidat Makbuzları Detaylı Liste", "", "Webmaster-PHP");
addList("Webmaster", "Tahsilat Makbuzları", "", "Webmaster-THS"); //END OF THIS NODE

addOption("Webmaster-JavaScript", "Karşılaştırılacak Rapor", "", 1); //HEADER OPTION
addOption("Webmaster-JavaScript", "Tarih Aralıklı Borç Listesi", "tariharalikliborc.html");
addOption("Webmaster-JavaScript", "Aidat Makbuzları Detaylı Liste", "dblaidatmakbuz.html");
addOption("Webmaster-JavaScript", "Tahsilat Makbuzları", "tahsilatmakbuz.html");

addOption("Webmaster-PHP", "Karşılaştırılacak Rapor", "", 1); //HEADER OPTION
addOption("Webmaster-PHP", "Dönemsel Bakiye Listesi", "aidatmakdonemsel.html");
addOption("Webmaster-PHP", "Tarih Aralıklı Borç Listesi", "aidatmaktarih.html");

addOption("Webmaster-THS", "Karşılaştırılacak Rapor", "", 1); //HEADER OPTION
addOption("Webmaster-THS", "Dönemsel Bakiye Listesi", "tahsilatdonemsel.html");
addOption("Webmaster-THS", "Tarih Aralıklı Borç Listesi", "tahsilattariharalik.html");

addOption("News", "Rapor Seçiniz", "", 1); //HEADER OPTION
addList("News", "Mizan", "", "News-General");
addList("News", "Standart Muavin Dökümü", "", "News-test");
addList("News", "Ayrıntılı Bilanço", "", "News-Tech");
addList("News", "Gelir Tablosu", "", "News-Test2");
addList("News", "Gelir-Gider Muavini", "", "News-Test3");

addOption("News-General", "Karşılaştırılacak Rapor", "", 1); //HEADER OPTION
addOption("News-General", "Ayrıntılı Bilanço", "mizanbilanco.html");
addOption("News-General", "Standart Muavin Dökümü", "mizanstandart.html");
addOption("News-General", "Gelir Tablosu", "mizangelirtablosu.html");
addOption("News-General", "Gelir Gider Muavini", "mizangidermuavini.html");

addOption("News-test", "Karşılaştırılacak Rapor", "", 1); //HEADER OPTION
addOption("News-test", "Mizan", "standartmizan.html");
addOption("News-test", "Gelir Tablosu", "standart-gelirgidertab.html");
addOption("News-test", "Gelir-Gider Muavini", "standart-gelirgidermuavini.html");
addOption("News-test", "Ayrıntılı Bilanço", "standartbilanco.html");

addOption("News-Tech", "Karşılaştırılacak Rapor", "", 1); //HEADER OPTION
addOption("News-Tech", "Mizan", "bilancomizan.html");
addOption("News-Tech", "Standart Muavin Dökümü", "bilancostandart.html");

addOption("News-Test2", "Karşılaştırılacak Rapor", "", 1); //HEADER OPTION
addOption("News-Test2", "Mizan", "gelirtablosumizan.html");
addOption("News-Test2", "Standart Muavin Dökümü", "gelirtabstandart.html");
addOption("News-Test2", "Gelir-Gider Muavini", "gelirtablosugelirgidermuav.html");

addOption("News-Test3", "Karşılaştırılacak Rapor", "", 1); //HEADER OPTION
addOption("News-Test3", "Mizan", "gidermuavinimizan.html");
addOption("News-Test3", "Standart Muavin Dökümü", "gelirgidermuavini-standart.html");
addOption("News-Test3", "Gelir Tablosu", "gidermuav-gelirtab.html");


addOption("Cars", "Rapor Seçiniz", "", 1); //HEADER OPTION
addList("Cars", "Mizan (10'lu Hesaplar)", "", "Cars-Regular");
addList("Cars", "Mizan (120'li Hesaplar)", "", "Cars-Sports");
addList("Cars", "Mizan (320'li Hesaplar)", "", "Cars-320");
addList("Cars", "Mizan (335'li Hesaplar)", "", "Cars-335");
addList("Cars", "Mizan (6'lı Hesaplar)", "", "Cars-10");
addList("Cars", "Mizan (7'li Hesaplar)", "", "Cars-7");
addList("Cars", "Ayrıntılı Bilanço", "", "Cars-8");

addOption("Cars-Regular", "Karşılaştırılacak Rapor", "", 1); //HEADER OPTION
addOption("Cars-Regular", "Kasa Ekstresi", "10.html");


addOption("Cars-Sports", "Karşılaştırılacak Rapor", "", 1); //HEADER OPTION
addOption("Cars-Sports", "Dönemsel Bakiye Listesi", "120.html");

addOption("Cars-320", "Karşılaştırılacak Rapor", "", 1); //HEADER OPTION
addOption("Cars-320", "Cari Hesap Listesi", "320.html");

addOption("Cars-335", "Karşılaştırılacak Rapor", "", 1); //HEADER OPTION
addOption("Cars-335", "Personel Ekstresi", "325.html");

addOption("Cars-10", "Karşılaştırılacak Rapor", "", 1); //HEADER OPTION
addOption("Cars-10", "Özet Gelir-Gider Tablosu", "6.html");

addOption("Cars-7", "Karşılaştırılacak Rapor", "", 1); //HEADER OPTION
addOption("Cars-7", "Gider Raporu", "7.html");

addOption("Cars-8", "Karşılaştırılacak Rapor", "", 1); //HEADER OPTION
addOption("Cars-8", "Denetim Tablosu (120)", "ayrintilibilanco120.html");
addOption("Cars-8", "Kasa Ekstresi (10)", "ayrintilibilanco10.html");
