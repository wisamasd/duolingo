// ==UserScript==
// @name         DuoKeySwitcher
// @namespace    duolingo
// @version      0.3.0
// @description  The script provide you ability to type right symbols in answer box without switching keyboard layout. Based on the works of Lifeshade (aka HeadwayCourse) and ilnicki
// @author       wisamasd 
// @include      https://www.duolingo.com/*
// @require      http://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js
// @updateURL    https://raw.githubusercontent.com/wisamasd/duolingo/master/DuoKeySwitcher.meta.js
// @downloadURL  https://raw.githubusercontent.com/wisamasd/duolingo/master/DuoKeySwitcher.user.js
// @grant        none
// ==/UserScript==
var _0x4443=["\x2E\x76\x76\x5A\x53\x74","\x5F\x32\x37\x75\x43\x39","\x5F\x31\x6B\x56\x78\x55","\x4B\x65\x79\x62\x6F\x61\x72\x64\x20\x6C\x61\x79\x6F\x75\x74\x20\x63\x68\x61\x6E\x67\x69\x6E\x67","\u0410\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u0430\u044F\x20\u0441\u043C\u0435\u043D\u0430\x20\u0440\u0430\u0441\u043A\u043B\u0430\u0434\u043A\u0438","\u0410\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u043D\u0430\x20\u0437\u043C\u0456\u043D\u0430\x20\u0440\u043E\u0437\u043A\u043B\u0430\u0434\u043A\u0438","\x41\x75\x74\x6F\x6D\x61\x74\x69\x73\x63\x68\x20\x53\x70\x72\x61\x63\x68\x65\x20\x77\x65\x63\x68\x73\x65\x6C\x6E","\x6F\x62\x6A\x65\x63\x74","\x76\x61\x6C\x75\x65","\x76\x61\x6C","\x73\x68\x69\x66\x74\x56\x61\x6C\x75\x65","\x73\x68\x69\x66\x74","\x61\x6C\x74\x56\x61\x6C\x75\x65","\x61\x6C\x74","\x61\x6C\x74\x53\x68\x69\x66\x74\x56\x61\x6C\x75\x65","\x61\x6C\x74\x53\x68\x69\x66\x74","\x63\x68\x61\x72\x4D\x61\x70","\x70\x61\x72\x65\x6E\x74\x4D\x61\x70","\x67\x65\x74\x43\x68\x61\x72","\x63\x74\x72\x6C\x4B\x65\x79","\x6B\x65\x79\x43\x6F\x64\x65","\x61\x6C\x74\x4B\x65\x79","\x73\x68\x69\x66\x74\x4B\x65\x79","\x63\x68\x61\x72\x6D\x61\x70\x73","\x63\x68\x61\x72\x6D\x61\x70","\x74\x6F\x6F\x6C\x54\x69\x70\x43\x68\x65\x63\x6B\x42\x6F\x78","\x65\x6E","\x60","\x7E","\x63\x68\x61\x72","\x31","\x21","\x32","\x40","\x33","\x23","\x34","\x24","\x35","\x25","\x36","\x5E","\x37","\x26","\x38","\x2A","\x39","\x28","\x30","\x29","\x2D","\x5F","\x3D","\x2B","\x71","\x51","\x77","\x57","\x65","\x45","\x72","\x52","\x74","\x54","\x79","\x59","\x75","\x55","\x69","\x49","\x6F","\x4F","\x70","\x50","\x5B","\x7B","\x5D","\x7D","\x5C","\x7C","\x61","\x41","\x73","\x53","\x64","\x44","\x66","\x46","\x67","\x47","\x68","\x48","\x6A","\x4A","\x6B","\x4B","\x6C","\x4C","\x3B","\x3A","\x27","\x22","\x7A","\x5A","\x78","\x58","\x63","\x43","\x76","\x56","\x62","\x42","\x6E","\x4E","\x6D","\x4D","\x2C","\x3C","\x2E","\x3E","\x2F","\x3F","\x61\x64\x64\x43\x68\x61\x72\x6D\x61\x70","\x64\x65","\xB0","\xB2","\xA7","\xB3","\xDF","\u20AC","\xFC","\xDC","\xF6","\xD6","\xE4","\xC4","\xB5","\x72\x75","\u0451","\u0401","\u2116","\u0439","\u0419","\u0446","\u0426","\u0443","\u0423","\u043A","\u041A","\u0435","\u0415","\u043D","\u041D","\u0433","\u0413","\u0448","\u0428","\u0449","\u0429","\u0437","\u0417","\u0445","\u0425","\u044A","\u042A","\u0444","\u0424","\u044B","\u042B","\u0432","\u0412","\u0430","\u0410","\u043F","\u041F","\u0440","\u0420","\u043E","\u041E","\u043B","\u041B","\u0434","\u0414","\u0436","\u0416","\u044D","\u042D","\u044F","\u042F","\u0447","\u0427","\u0441","\u0421","\u043C","\u041C","\u0438","\u0418","\u0442","\u0422","\u044C","\u042C","\u0431","\u0411","\u044E","\u042E","\x75\x6B","\u20B4","\u0491","\u0490","\u0457","\u0407","\u0456","\u0406","\u0454","\u0404","","\x69\x6E\x64\x69\x63\x61\x74\x6F\x72\x5F\x64\x69\x73\x70\x6C\x61\x79\x65\x64","\x6B\x65\x79\x73\x77\x69\x74\x63\x68\x65\x72\x5F\x73\x65\x74\x74\x69\x6E\x67\x73","\x73\x65\x74\x4F\x6E\x43\x4C\x69\x63\x6B","\x3C\x64\x69\x76\x20\x69\x64\x3D\x22\x64\x74\x2D\x6B\x65\x79\x62\x6F\x61\x72\x64\x5F\x6C\x61\x79\x6F\x75\x74\x22\x20\x64\x61\x74\x61\x2D\x74\x6F\x67\x67\x6C\x65\x3D\x22\x74\x6F\x6F\x6C\x74\x69\x70\x22\x20\x74\x69\x74\x6C\x65\x3D\x22","\x75\x69\x4C\x61\x6E\x67\x75\x61\x67\x65","\x22\x20\x64\x61\x74\x61\x2D\x70\x6C\x61\x63\x65\x6D\x65\x6E\x74\x3D\x22\x62\x6F\x74\x74\x6F\x6D\x22\x20\x61\x6C\x69\x67\x6E\x3D\x22\x6C\x65\x66\x74\x22\x3E\x3C\x69\x6E\x70\x75\x74\x20\x74\x79\x70\x65\x3D\x22\x63\x68\x65\x63\x6B\x62\x6F\x78\x22\x20\x74\x61\x62\x69\x6E\x64\x65\x78\x3D\x22\x32\x22\x20\x63\x6C\x61\x73\x73\x3D\x22","\x63\x68\x65\x63\x6B\x42\x6F\x78","\x22\x20\x63\x68\x65\x63\x6B\x65\x64\x3D\x22\x63\x68\x65\x63\x6B\x65\x64\x22\x2F\x3E\x3C\x6C\x61\x62\x65\x6C\x3E","\x20\x26\x23\x38\x35\x39\x34\x3B\x20","\x6C\x61\x6E\x67","\x3C\x2F\x6C\x61\x62\x65\x6C\x3E\x3C\x2F\x64\x69\x76\x3E","\x61\x70\x70\x65\x6E\x64","\x70\x61\x72\x65\x6E\x74","\x61\x75\x74\x6F\x63\x68\x61\x6E\x67\x65","\x63\x68\x65\x63\x6B\x65\x64","\x72\x65\x6D\x6F\x76\x65\x41\x74\x74\x72","\x23\x64\x74\x2D\x6B\x65\x79\x62\x6F\x61\x72\x64\x5F\x6C\x61\x79\x6F\x75\x74\x20\x3A\x63\x68\x65\x63\x6B\x62\x6F\x78","\x61\x74\x74\x72","\x73\x70\x6C\x69\x74","\x6D\x61\x74\x63\x68","\x70\x61\x74\x68\x6E\x61\x6D\x65","\x6C\x6F\x63\x61\x74\x69\x6F\x6E","\x6E\x65\x78\x74\x4F\x72\x50\x72\x65\x76","\x67\x65\x74\x45\x6C\x65\x6D\x65\x6E\x74\x73\x42\x79\x43\x6C\x61\x73\x73\x4E\x61\x6D\x65","\x6F\x6E\x63\x6C\x69\x63\x6B","\x63\x6C\x69\x63\x6B\x4F\x72\x45\x6E\x74\x65\x72","\x6B\x65\x79\x64\x6F\x77\x6E","\x74\x65\x78\x74\x69\x6E\x70\x75\x74","\x67\x65\x74\x4C\x61\x6E\x67\x75\x61\x67\x65\x46\x72\x6F\x6D\x55\x72\x6C\x4C\x65\x73\x73\x6F\x6E\x73","\x63\x68\x65\x63\x6B\x43\x68\x61\x72\x6D\x61\x70","\x73\x68\x6F\x77\x49\x6E\x64\x69\x63\x61\x6F\x72\x4C\x61\x6E\x67\x75\x61\x67\x65","\x73\x65\x74\x4F\x6E\x43\x4C\x69\x63\x6B\x54\x6F\x42\x75\x74\x74\x6F\x6E\x73","\x67\x65\x74\x4C\x6F\x63\x61\x6C\x69\x7A\x65\x64\x43\x68\x61\x72","\x6B\x65\x79","\x73\x65\x6C\x65\x63\x74\x69\x6F\x6E\x53\x74\x61\x72\x74","\x70\x72\x6F\x70","\x73\x65\x6C\x65\x63\x74\x69\x6F\x6E\x45\x6E\x64","\x6C\x65\x6E\x67\x74\x68","\x73\x6C\x69\x63\x65","\x70\x72\x65\x76\x65\x6E\x74\x44\x65\x66\x61\x75\x6C\x74","\x66\x6F\x63\x75\x73","\x62\x6C\x75\x72","\x74\x61\x72\x67\x65\x74","\x6F\x6E","\x63\x68\x61\x6E\x67\x65","\x64\x75\x6F","\x63\x68\x65\x63\x6B\x55\x69\x4C\x61\x6E\x67","\x77\x33\x34\x33","\x6D\x61\x69\x6E"];$du= {textinput:_0x4443[0],nextOrPrev:_0x4443[1],checkBox:_0x4443[2]};$chars= {keyswitcher_settings:{autochange:true,indicator_displayed:false},toolTipCheckBox:{en:_0x4443[3],ru:_0x4443[4],uk:_0x4443[5],de:_0x4443[6]},char:function(_0xc007x1,_0xc007x2,_0xc007x3,_0xc007x4){if( typeof _0xc007x1=== _0x4443[7]&& _0xc007x1!== null){this[_0x4443[8]]= _0xc007x1[_0x4443[9]];this[_0x4443[10]]= _0xc007x1[_0x4443[11]];this[_0x4443[12]]= _0xc007x1[_0x4443[13]];this[_0x4443[14]]= _0xc007x1[_0x4443[15]]}else {this[_0x4443[8]]= _0xc007x1;this[_0x4443[10]]= _0xc007x2;this[_0x4443[12]]= _0xc007x3;this[_0x4443[14]]= _0xc007x4}},charmap:function(_0xc007x5,_0xc007x6){this[_0x4443[16]]= _0xc007x5;this[_0x4443[17]]= _0xc007x6;this[_0x4443[18]]= function(_0xc007x7){if(_0xc007x7[_0x4443[19]]){return null};var _0xc007x8=this[_0x4443[16]][_0xc007x7[_0x4443[20]]];if(_0xc007x8=== undefined){if(this[_0x4443[17]]!== undefined){return this[_0x4443[17]][_0x4443[18]](_0xc007x7)}}else {var _0xc007x9;if(_0xc007x7[_0x4443[21]]&& _0xc007x7[_0x4443[22]]){_0xc007x9= _0xc007x8[_0x4443[14]]}else {if(_0xc007x7[_0x4443[21]]){_0xc007x9= _0xc007x8[_0x4443[12]]}else {if(_0xc007x7[_0x4443[22]]){_0xc007x9= _0xc007x8[_0x4443[10]]}else {_0xc007x9= _0xc007x8[_0x4443[8]]}}};if(_0xc007x9=== undefined){if(this[_0x4443[17]]!== undefined){return this[_0x4443[17]][_0x4443[18]](_0xc007x7)}}else {return _0xc007x9}}}},charmaps:{},addCharmap:function(_0xc007xa,_0xc007x5,_0xc007xb){$chars[_0x4443[23]][_0xc007xa]=  new $chars[_0x4443[24]](_0xc007x5,$chars[_0x4443[23]][_0xc007xb])},checkCharmap:function(_0xc007xa){return _0xc007xa!== undefined&& $chars[_0x4443[23]][_0xc007xa]!== undefined},checkUiLang:function(_0xc007xc){return _0xc007xc!== undefined&& $chars[_0x4443[25]][_0xc007xc]!== undefined},getLocalizedChar:function(_0xc007x7,_0xc007xa){return $chars[_0x4443[23]][_0xc007xa][_0x4443[18]](_0xc007x7)}};$chars[_0x4443[122]](_0x4443[26],{192: new $chars[_0x4443[29]](_0x4443[27],_0x4443[28]),49: new $chars[_0x4443[29]](_0x4443[30],_0x4443[31]),50: new $chars[_0x4443[29]](_0x4443[32],_0x4443[33]),51: new $chars[_0x4443[29]](_0x4443[34],_0x4443[35]),52: new $chars[_0x4443[29]](_0x4443[36],_0x4443[37]),53: new $chars[_0x4443[29]](_0x4443[38],_0x4443[39]),54: new $chars[_0x4443[29]](_0x4443[40],_0x4443[41]),55: new $chars[_0x4443[29]](_0x4443[42],_0x4443[43]),56: new $chars[_0x4443[29]](_0x4443[44],_0x4443[45]),57: new $chars[_0x4443[29]](_0x4443[46],_0x4443[47]),48: new $chars[_0x4443[29]](_0x4443[48],_0x4443[49]),189: new $chars[_0x4443[29]](_0x4443[50],_0x4443[51]),187: new $chars[_0x4443[29]](_0x4443[52],_0x4443[53]),81: new $chars[_0x4443[29]](_0x4443[54],_0x4443[55]),87: new $chars[_0x4443[29]](_0x4443[56],_0x4443[57]),69: new $chars[_0x4443[29]](_0x4443[58],_0x4443[59]),82: new $chars[_0x4443[29]](_0x4443[60],_0x4443[61]),84: new $chars[_0x4443[29]](_0x4443[62],_0x4443[63]),89: new $chars[_0x4443[29]](_0x4443[64],_0x4443[65]),85: new $chars[_0x4443[29]](_0x4443[66],_0x4443[67]),73: new $chars[_0x4443[29]](_0x4443[68],_0x4443[69]),79: new $chars[_0x4443[29]](_0x4443[70],_0x4443[71]),80: new $chars[_0x4443[29]](_0x4443[72],_0x4443[73]),219: new $chars[_0x4443[29]](_0x4443[74],_0x4443[75]),221: new $chars[_0x4443[29]](_0x4443[76],_0x4443[77]),226: new $chars[_0x4443[29]](_0x4443[78],_0x4443[79]),65: new $chars[_0x4443[29]](_0x4443[80],_0x4443[81]),83: new $chars[_0x4443[29]](_0x4443[82],_0x4443[83]),68: new $chars[_0x4443[29]](_0x4443[84],_0x4443[85]),70: new $chars[_0x4443[29]](_0x4443[86],_0x4443[87]),71: new $chars[_0x4443[29]](_0x4443[88],_0x4443[89]),72: new $chars[_0x4443[29]](_0x4443[90],_0x4443[91]),74: new $chars[_0x4443[29]](_0x4443[92],_0x4443[93]),75: new $chars[_0x4443[29]](_0x4443[94],_0x4443[95]),76: new $chars[_0x4443[29]](_0x4443[96],_0x4443[97]),186: new $chars[_0x4443[29]](_0x4443[98],_0x4443[99]),222: new $chars[_0x4443[29]](_0x4443[100],_0x4443[101]),220: new $chars[_0x4443[29]](_0x4443[78],_0x4443[79]),90: new $chars[_0x4443[29]](_0x4443[102],_0x4443[103]),88: new $chars[_0x4443[29]](_0x4443[104],_0x4443[105]),67: new $chars[_0x4443[29]](_0x4443[106],_0x4443[107]),86: new $chars[_0x4443[29]](_0x4443[108],_0x4443[109]),66: new $chars[_0x4443[29]](_0x4443[110],_0x4443[111]),78: new $chars[_0x4443[29]](_0x4443[112],_0x4443[113]),77: new $chars[_0x4443[29]](_0x4443[114],_0x4443[115]),188: new $chars[_0x4443[29]](_0x4443[116],_0x4443[117]),190: new $chars[_0x4443[29]](_0x4443[118],_0x4443[119]),191: new $chars[_0x4443[29]](_0x4443[120],_0x4443[121])});$chars[_0x4443[122]](_0x4443[123],{192: new $chars[_0x4443[29]](null,_0x4443[124]),50: new $chars[_0x4443[29]]({shift:_0x4443[101],alt:_0x4443[125]}),51: new $chars[_0x4443[29]]({shift:_0x4443[126],alt:_0x4443[127]}),54: new $chars[_0x4443[29]]({shift:_0x4443[43]}),55: new $chars[_0x4443[29]]({shift:_0x4443[120],alt:_0x4443[75]}),56: new $chars[_0x4443[29]]({shift:_0x4443[47],alt:_0x4443[74]}),57: new $chars[_0x4443[29]]({shift:_0x4443[49],alt:_0x4443[76]}),48: new $chars[_0x4443[29]]({shift:_0x4443[52],alt:_0x4443[77]}),189: new $chars[_0x4443[29]](_0x4443[128],_0x4443[121],_0x4443[78]),187: new $chars[_0x4443[29]](null,null),81: new $chars[_0x4443[29]]({alt:_0x4443[33]}),69: new $chars[_0x4443[29]]({alt:_0x4443[129]}),89: new $chars[_0x4443[29]](_0x4443[102],_0x4443[103]),219: new $chars[_0x4443[29]](_0x4443[130],_0x4443[131]),221: new $chars[_0x4443[29]](_0x4443[53],_0x4443[45],_0x4443[28]),226: new $chars[_0x4443[29]](_0x4443[117],_0x4443[119],_0x4443[79]),186: new $chars[_0x4443[29]](_0x4443[132],_0x4443[133]),222: new $chars[_0x4443[29]](_0x4443[134],_0x4443[135]),220: new $chars[_0x4443[29]](_0x4443[35],_0x4443[100]),90: new $chars[_0x4443[29]](_0x4443[64],_0x4443[65]),77: new $chars[_0x4443[29]]({alt:_0x4443[136]}),188: new $chars[_0x4443[29]]({shift:_0x4443[98]}),190: new $chars[_0x4443[29]]({shift:_0x4443[99]}),191: new $chars[_0x4443[29]](_0x4443[50],_0x4443[51])},_0x4443[26]);$chars[_0x4443[122]](_0x4443[137],{192: new $chars[_0x4443[29]](_0x4443[138],_0x4443[139]),50: new $chars[_0x4443[29]]({shift:_0x4443[101]}),51: new $chars[_0x4443[29]]({shift:_0x4443[140]}),52: new $chars[_0x4443[29]]({shift:_0x4443[98]}),54: new $chars[_0x4443[29]]({shift:_0x4443[99]}),55: new $chars[_0x4443[29]]({shift:_0x4443[121]}),81: new $chars[_0x4443[29]](_0x4443[141],_0x4443[142]),87: new $chars[_0x4443[29]](_0x4443[143],_0x4443[144]),69: new $chars[_0x4443[29]](_0x4443[145],_0x4443[146]),82: new $chars[_0x4443[29]](_0x4443[147],_0x4443[148]),84: new $chars[_0x4443[29]](_0x4443[149],_0x4443[150]),89: new $chars[_0x4443[29]](_0x4443[151],_0x4443[152]),85: new $chars[_0x4443[29]](_0x4443[153],_0x4443[154]),73: new $chars[_0x4443[29]](_0x4443[155],_0x4443[156]),79: new $chars[_0x4443[29]](_0x4443[157],_0x4443[158]),80: new $chars[_0x4443[29]](_0x4443[159],_0x4443[160]),219: new $chars[_0x4443[29]](_0x4443[161],_0x4443[162]),221: new $chars[_0x4443[29]](_0x4443[163],_0x4443[164]),226: new $chars[_0x4443[29]](_0x4443[78],_0x4443[120]),65: new $chars[_0x4443[29]](_0x4443[165],_0x4443[166]),83: new $chars[_0x4443[29]](_0x4443[167],_0x4443[168]),68: new $chars[_0x4443[29]](_0x4443[169],_0x4443[170]),70: new $chars[_0x4443[29]](_0x4443[171],_0x4443[172]),71: new $chars[_0x4443[29]](_0x4443[173],_0x4443[174]),72: new $chars[_0x4443[29]](_0x4443[175],_0x4443[176]),74: new $chars[_0x4443[29]](_0x4443[177],_0x4443[178]),75: new $chars[_0x4443[29]](_0x4443[179],_0x4443[180]),76: new $chars[_0x4443[29]](_0x4443[181],_0x4443[182]),186: new $chars[_0x4443[29]](_0x4443[183],_0x4443[184]),222: new $chars[_0x4443[29]](_0x4443[185],_0x4443[186]),220: new $chars[_0x4443[29]](_0x4443[78],_0x4443[120]),90: new $chars[_0x4443[29]](_0x4443[187],_0x4443[188]),88: new $chars[_0x4443[29]](_0x4443[189],_0x4443[190]),67: new $chars[_0x4443[29]](_0x4443[191],_0x4443[192]),86: new $chars[_0x4443[29]](_0x4443[193],_0x4443[194]),66: new $chars[_0x4443[29]](_0x4443[195],_0x4443[196]),78: new $chars[_0x4443[29]](_0x4443[197],_0x4443[198]),77: new $chars[_0x4443[29]](_0x4443[199],_0x4443[200]),188: new $chars[_0x4443[29]](_0x4443[201],_0x4443[202]),190: new $chars[_0x4443[29]](_0x4443[203],_0x4443[204]),191: new $chars[_0x4443[29]](_0x4443[118],_0x4443[116])},_0x4443[26]);$chars[_0x4443[122]](_0x4443[205],{192: new $chars[_0x4443[29]](_0x4443[100],_0x4443[206]),85: new $chars[_0x4443[29]](_0x4443[153],_0x4443[154],_0x4443[207],_0x4443[208]),221: new $chars[_0x4443[29]](_0x4443[209],_0x4443[210]),226: new $chars[_0x4443[29]](_0x4443[207],_0x4443[208]),83: new $chars[_0x4443[29]](_0x4443[211],_0x4443[212]),222: new $chars[_0x4443[29]](_0x4443[213],_0x4443[214])},_0x4443[137]);wg5= {uiLanguage:_0x4443[215],lang:_0x4443[215],setOnCLick:false,clickOrEnter:function(){$chars[_0x4443[217]][_0x4443[216]]= false;wg5[_0x4443[218]]= false},showIndicaorLanguage:function(_0xc007xd){if(!$chars[_0x4443[217]][_0x4443[216]]){$chars[_0x4443[217]][_0x4443[216]]= true;_0xc007xd[_0x4443[228]]()[_0x4443[227]](_0x4443[219]+ $chars[_0x4443[25]][wg5[_0x4443[220]]]+ _0x4443[221]+ $du[_0x4443[222]]+ _0x4443[223]+ _0x4443[224]+ wg5[_0x4443[225]]+ _0x4443[226]);if(!$chars[_0x4443[217]][_0x4443[229]]){$(_0x4443[232])[_0x4443[231]](_0x4443[230])}}},getLanguageFromUrlLessons:function(_0xc007xd){wg5[_0x4443[225]]= _0xc007xd[_0x4443[233]](_0x4443[225]);if(wg5[_0x4443[225]]=== undefined|| wg5[_0x4443[225]]=== _0x4443[215]){wg5[_0x4443[225]]= document[_0x4443[237]][_0x4443[236]][_0x4443[235]](/skill\/\S\S\//)[0][_0x4443[234]](_0x4443[120])[1];if(wg5[_0x4443[225]]=== null){return true}}},setOnCLickToButtons:function(){if(!wg5[_0x4443[218]]){var _0xc007xe=document[_0x4443[239]]($du[_0x4443[238]]);_0xc007xe[0][_0x4443[240]]= wg5[_0x4443[241]];_0xc007xe[1][_0x4443[240]]= wg5[_0x4443[241]];wg5[_0x4443[218]]= true}},w343:function(){$(document)[_0x4443[259]](_0x4443[242],$du[_0x4443[243]],function(_0xc007xf){wg5[_0x4443[244]]($(this));if(!$chars[_0x4443[245]](wg5[_0x4443[225]])){return true};wg5[_0x4443[246]]($(this));wg5[_0x4443[247]]();if(_0xc007xf[_0x4443[20]]== 13){document[_0x4443[239]]($du[_0x4443[238]])[0][_0x4443[240]]();return true};if(!$chars[_0x4443[217]][_0x4443[229]]|| _0xc007xf[_0x4443[21]] || _0xc007xf[_0x4443[19]]){return true};var _0xc007x10=$chars[_0x4443[248]](_0xc007xf,wg5[_0x4443[225]]);if(_0xc007xf[_0x4443[249]]=== undefined|| _0xc007x10=== undefined){return true};var _0xc007x11=$(this)[_0x4443[9]]();var _0xc007x12=$(this)[_0x4443[251]](_0x4443[250]);var _0xc007x13=$(this)[_0x4443[251]](_0x4443[252]);if(_0xc007x12=== undefined){_0xc007x12= _0xc007x13= _0xc007x11[_0x4443[253]]};$(this)[_0x4443[9]](_0xc007x11[_0x4443[254]](0,_0xc007x12)+ _0xc007x10+ _0xc007x11[_0x4443[254]](_0xc007x13));$(this)[_0x4443[251]][_0x4443[250]]= $(this)[_0x4443[251]][_0x4443[252]]= _0xc007x12+ 1;_0xc007xf[_0x4443[255]]();return $(_0xc007xf[_0x4443[258]])[_0x4443[257]]()[_0x4443[256]]()});$(document)[_0x4443[259]](_0x4443[260],_0x4443[232],function(){$chars[_0x4443[217]][_0x4443[229]]= $(this)[_0x4443[251]](_0x4443[230])})},main:function(){if(window[_0x4443[261]]=== undefined){return false};if($chars[_0x4443[262]](duo[_0x4443[220]])){wg5[_0x4443[220]]= duo[_0x4443[220]]}else {wg5[_0x4443[220]]= _0x4443[26]};wg5[_0x4443[263]]();return true}};wg5[_0x4443[264]]()
