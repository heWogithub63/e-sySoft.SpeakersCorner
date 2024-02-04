//create the request form html
   const fpPromise = import('https://openfpcdn.io/fingerprintjs/v3')
    .then(FingerprintJS => FingerprintJS.load())
   var div_1 = document.createElement("div");
       div_1.id = 'custominput1';
       div_1.style.overflow = 'auto';
       div_1.style.overflowX = 'hidden';
   
   var tbl = document.createElement("table");
   
   var tab0 = document.createElement("table0");
   var tab0_1 = document.createElement("table0");
   var tabl = document.createElement("table1");
   
   var saveBtn = document.createElement('img');
   var tImg = document.createElement("img");
   var qrImg = document.createElement("img");
   var textEditor;
   var caller;
   var lenguages =  ["Abkhaz",
		"Afar",
		"Afrikaans",
		"Aja-Gbe",
		"Akan",
		"Albanian",
		"Amharic",
		"Anii",
		"Arabic",
		"Armenian",
		"Assamese",
		"Aymara",
		"Azerbaijani",
		"Balanta",
		"Bambara",
		"Bariba",
		"Basque",
		"Bassari",
		"Bedik",
		"Belarusian",
		"Bengali",
		"Berber",
		"Biali",
		"Bislama",
		"Boko",
		"Bomu",
		"Bosnian",
		"Bozo",
		"Buduma",
		"Bulgarian",
		"Burmese",
		"Cantonese",
		"Catalan",
		"Chinese, Mandarin",
		"Chichewa",
		"Chirbawe (Sena)",
		"Corsican ",
		"Croatian",
		"Czech",
		"Dagaare",
		"Dagbani",
		"Danish",
		"Dari",
		"Dendi",
		"Dhivehi",
		"Dioula",
		"Dogon",
		"Dutch",
		"Dzongkha",
		"English",
		"Estonian",
		"Ewe-Gbe",
		"Faroese",
		"Fijian",
		"Filipino",
		"Finnish",
		"Fon-Gbe",
		"Foodo",
		"Formosan",
		"French",
		"Fula",
		"Ga",
		"Gàidhlig",
		"Gbe",
		"Gen-Gbe",
		"Georgian",
		"German",
		"Gonja",
		"Greek",
		"Guaraní",
		"Gujarati",
		"Haitian Creole",
		"Hakka",
		"Hassaniya",
		"Hausa",
		"Hebrew",
		"Hindi",
		"Hiri Motu",
		"Hungarian",
		"Igbo",
		"Icelandic",
		"Indonesian",
		"Irish",
		"Italian",
		"Official language in",
		"Japanese",
		"Javanese",
		"Jola",
		"Kabye",
		"Kalanga",
		"Kannada",
		"Kanuri",
		"Kasem",
		"Kazakh",
		"Khmer",
		"Kinyarwanda",
		"Kirundi",
		"Koisan (Tshuwau)",
		"Korean",
		"Korean Sign Language",
		"Kpelle",
		"Kurdish",
		"Kyrgyz",
		"Lao",
		"Latin",
		"Latvian",
		"Lithuanian",
		"Lukpa",
		"Luxembourgish",
		"Macedonian",
		"Malagasy",
		"Malay",
		"Malinke",
		"Maltese",
		"Mamara",
		"Manding (Mandinka, Malinke)",
		"Mandinka",
		"Mandjak",
		"Mankanya",
		"Manx Gaelic",
		"Māori",
		"Marshallese",
		"Mbelime",
		"Mongolian",
		"Montenegrin",
		"Mossi",
		"Nambya",
		"Nateni",
		"Ndau",
		"Ndebele (Northern)",
		"Ndebele (Southern)",
		"Nepali",
		"New Zealand Sign Language",
		"Noon",
		"Northern Sotho",
		"Norwegian",
		"Nzema",
		"Oniyan",
		"Oromo",
		"Ossetian",
		"Palauan",
		"Papiamento",
		"Pashto",
		"Persian",
		"Polish",
		"Portuguese",
		"Punjabi",
		"Quechua",
		"Romanian",
		"Romansh",
		"Russian",
		"Safen",
		"Sena",
		"Serbian",
		"Serer",
		"Shona",
		"Sinhala",
		"Slovak",
		"Slovene",
		"Somali",
		"Songhay-Zarma",
		"Soninke",
		"Sotho",
		"Spanish",
		"Susu",
		"Swahili",
		"Swati",
		"Swedish",
		"Syenara",
		"Taiwan Sign Language",
		"Taiwanese Hokkien",
		"Tajik",
		"Tagalog",
		"Tamasheq",
		"Tamil",
		"Tammari",
		"Tasawaq",
		"Tebu",
		"Telugu",
		"Tetum",
		"Thai",
		"Tigrinya",
		"Tok Pisin",
		"Toma",
		"Tonga",
		"Tsonga",
		"Tswana",
		"Turkish",
		"Turkmen",
		"Ukrainian",
		"Urdu",
		"Uzbek",
		"Venda",
		"Vietnamese",
		"Waama",
		"Waci-Gbe",
		"Wamey",
		"Welsh",
		"Wolof",
		"Xhosa",
		"Xwela-Gbe",
		"Yobe",
		"Yom",
		"Yoruba",
		"Zimbabwean"];
   var selectedLenuage = "";

   var listCell = new Array();
   var txArea = new Array();
   var arrChoosed = [];


function speeker() {
   var listRow = new Array();
   var row = document.createElement("tr");
   var row1 = document.createElement("tr");

   var row2 = document.createElement("tr");
   var row3 = document.createElement("tr");
   var row4 = document.createElement("tr");

   var cellText = document.createTextNode("Lenguage");
   var cell = document.createElement("td2");
       cell.appendChild(cellText);
   var cell1 = document.createElement("td3");

   row2.appendChild(cell);
   row3.appendChild(div_1);
   row4.appendChild(createImg('./Animation/empty.png',40,40));

   tab0.appendChild(row4);
   tab0.appendChild(row2);
   tab0.appendChild(row3);

   cell1.appendChild(tab0);
  
   
   for(var i=0;i<lenguages.length;i++) {
       listRow[i] = document.createElement("tr");
       var listCell = createScrollList(i,lenguages[i]);
       listRow[i].appendChild(listCell);
       tbl.appendChild(listRow[i]);
   }
   div_1.appendChild(tbl);

   var form1 = document.getElementById('form1');
   row.appendChild(createImg('./Pictures/empty1.png',40,40));
   row.appendChild(createTxArea(0,'write','custominput',false,5000,40,20));
   row.appendChild(createImg('./Animation/speeker.gif', 140, 140));
   row.appendChild(createEditField('width:100px; border:0px solid #7f7f7f', 'userCount', ' Comments 0'));
   row.appendChild(createTxArea(1,'read','custominput',true,5000,40,20));

   row1.appendChild(createButton('./Pictures/saveBtn_closed.png'));
   row1.appendChild(createImg('./Pictures/speeker_writing.png', 80, 80));
   row1.appendChild(cell1);
   row1.appendChild(createImg('./Pictures/speeker_reading.png', 80, 80));
   row1.appendChild(createImg('./Animation/empty.png',40,40));
   
   tabl.appendChild(row);
   tabl.appendChild(row1);
   

   form1.appendChild(tabl); // appends <table> into <form1>
   
}

function createImg(path,height,width) {
    
    if(path.includes('speeker')) {
       var cell = document.createElement("td1");
       var oImg = document.createElement("img");
       oImg.setAttribute('src', path);
       oImg.setAttribute('name', 'oImg');
       oImg.setAttribute('height', height);
       oImg.setAttribute('width', width);
       cell.appendChild(oImg);
    }
    if(path.includes('empty')) {
       var cell = document.createElement("td2");
       tImg.setAttribute('src', path);
       tImg.setAttribute('name', 'oImg');
       tImg.setAttribute('height', height);
       tImg.setAttribute('width', width);
       cell.appendChild(tImg);
    }
    if(path.includes('QR_Code')) {
       var cell = document.createElement("td3");
       var qrImg = document.createElement("img");
       qrImg.setAttribute('src', path);
       qrImg.setAttribute('name', 'qrImg');
       qrImg.setAttribute('height', height);
       qrImg.setAttribute('width', width);
       qrImg.addEventListener('click', (event) => {


       });
       cell.appendChild(qrImg);
    }
    
  return cell;
}

function createScrollList(nr,name) {
    
   listCell[nr] = document.createElement("td");
   listCell[nr].class = 'custominput1';
   listCell[nr].id = nr;
   listCell[nr].name = lenguages[nr];
   listCell[nr].style.color = 'black';
   listCell[nr].addEventListener('click', (event) => {
       
       for(var i = 0;i<listCell.length;i++)
           listCell[i].style.color = 'black';
       listCell[event.target.id].style.color = 'blue';

       txArea[0].value = '';
       txArea[1].value = '';
       tImg.src = './Animation/timer_black.gif';
       caller = "request";
       var visId = getFingerPrint(listCell[event.target.id].name);
   });

   var txItem = document.createTextNode(name);
   txItem.id = lenguages[nr];
   txItem.wrap = 'true';
   
   listCell[nr].appendChild(txItem);

  return listCell[nr];
}

function createTxArea(nr,name,style,mode,maxLen,col,row) {
    var cell = document.createElement("td1");
    txArea[nr] = document.createElement('textarea');
    txArea[nr].name = name;
    txArea[nr].value = ' ';
    if(name == 'read') {
       txArea[nr].value = 'To get comments in your lenguage\nYou have to select One';
    } else {
       txArea[nr].value = 'Write comments in what kind of language ?\nPlease select One';
    }
    txArea[nr].maxLength = maxLen;
    txArea[nr].cols = col;
    txArea[nr].rows = row;
    txArea[nr].className = "speekersWriter";
    txArea[nr].class = 'custominput';
    txArea[nr].id = style;
    txArea[nr].disabled = mode;
    txArea[nr].setAttribute("spell", false);
    txArea[nr].setAttribute("wrap", true);

   
    while (cell.childNodes.length >0) {
        cell.removeChild(cell.childNodes[0]);
    }
    

    cell.appendChild(txArea[nr]);
    
   return cell;
}

function createButton(path) {
        
   var cell = document.createElement("td4");
	saveBtn.src = path;
    saveBtn.class = "SaveButton";
    saveBtn.id = "save";
    saveBtn.width = '42';
    saveBtn.height = '24';

    saveBtn.addEventListener('click', (event) => {

        if(event.target.src.includes('closed') && (txArea[0].value !== undefined && txArea[0].value !== null &&
                         txArea[0].value !== '' && !(txArea[0].value.includes("Write comments in what"))) ) {
             event.target.src = event.target.src.replace('closed','open');
             tImg.src = './Animation/timer_black.gif';
             for(var i = 0;i<listCell.length;i++)
                 if(listCell[i].style.color == 'blue')
                      selectedLenguage = listCell[i].name;
             caller = 'deploy';

             var visId = getFingerPrint(selectedLenguage);
        } else {
             event.target.src = event.target.src.replace('open','closed')
             tImg.src = './Animation/empty.png';
        }

    })
    cell.appendChild(saveBtn);

  return cell;
}

function createEditField (style, name, value) {
    var cell = document.createElement("td2");
    textEditor = document.createElement('input');

	textEditor.type = "text";
	textEditor.name = name;
	textEditor.value = value;
    textEditor.setAttribute('style', style);
	textEditor.id = name;
    textEditor.setAttribute('readonly',true);

    cell.appendChild(textEditor);

    return cell;
}

function getActualDate() {
    var today = new Date();
    var dd = +(String(today.getDate()).padStart(2, '0'));
    var mm = +(String(today.getMonth() +1).padStart(2, '0'));
    var yyyy = +(today.getFullYear());

    yyyy = String(yyyy);
    if(mm < 10) mm = "0"+String(mm);
    else mm = String(mm);
    if(dd < 10) dd = "0"+String(dd);
    else dd = String(dd);

   return yyyy+mm+dd;
}

function calcDeleteDate() {
   var today = new Date();
   var dd = +(String(today.getDate()).padStart(2, '0')) +7;
   var mm = +(String(today.getMonth() +1).padStart(2, '0'));
   var yyyy = +(today.getFullYear());

   var monthdays = 30;

   if((mm <= 7 && ((""+(mm/2)).includes(".5"))) ||
       (mm > 7 && ((""+(mm/2)).includes(".0"))))
      monthdays = 31;
   if(mm === 2)
      monthdays = 28;
   
   if(dd > monthdays) {
      dd = dd - monthdays;
      mm = mm +1;
         if(mm > 12) {
            mm = mm -12;
            yyyy = yyyy +1;
         }
   }
   yyyy = String(yyyy);
   if(mm < 10) mm = "0"+String(mm);
   else mm = String(mm);
   if(dd < 10) dd = "0"+String(dd);
   else dd = String(dd);

  return yyyy+mm+dd;
}

async function getFingerPrint(selectedLenguage) {
    var visId;
    arrChoosed[0] = caller;

    fpPromise
    .then(fp => fp.get())
    .then(result => {
      // This is the visitor identifier:
      const visitorId = result.visitorId
      visId = visitorId;
    })
    arrChoosed[1] = visId;

    if(caller == 'request') {
       arrChoosed[2] = selectedLenguage;
       arrChoosed[3] = getActualDate();

    } else if(caller == 'deploy') {
       arrChoosed[2] = selectedLenguage;
       arrChoosed[3] = calcDeleteDate();
       arrChoosed[4] = txArea[0].value;
    }

       httpPost('https://speekerdbconnector.onrender.com/SpeekersCorner',arrChoosed);
}


async function httpPost(url, data) {
    event.preventDefault();
    var result;
	  await fetch(url, {
	    method: "POST",
	    headers: {
	      "Content-Type": "application/json"
	    },
            body: JSON.stringify(data)
	    })
	    .then(res => {
		    if (res.status>=200 && res.status <300) {
		      return res.json()
		    }else{
		      throw new Error();
		    }
	    })
	    .then(data=> {result = data.body;
	                   console.log(data)
	                  }
		          )

	    .catch(err=>console.log('fetch() failed'));

        if(result.includes('commentsCount: ')) {
           textEditor.value = "Comments " + (Number((textEditor.value).substring((textEditor.value).lastIndexOf(" ")+1)) +1);
           if((txArea[1].value).includes("Unfortunatly, with the choosed leng") ||
              (txArea[1].value).includes("To get comments in your lenguage")) {
                 txArea[1].value = "";
              }

           txArea[1].value = txArea[1].value +"\n------------>------>------------>------>\n"+ txArea[0].value;

        } else {

           var list = result.split("------------>");
           if(list.length > 1) {
              textEditor.value = "Comments " + (list.length -1);
              for(var i=0;i<list.length;i++) {
                 list[i] = "\n------------>------>------------>------>\n" +list[i];
                 txArea[1].value = txArea[1].value +list[i];
                 }
           } else {
                textEditor.value = "Comments 0";
                txArea[1].value = "Unfortunatly, with the choosed lenguage,\nthere is no comment avaliable";
           }

        }

    saveBtn.src = saveBtn.src.replace('open','closed');
    tImg.src = './Animation/empty.png';

}