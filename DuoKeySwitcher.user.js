// ==UserScript==
// @name         DuoKeySwitcher
// @namespace    duolingo
// @version      0.3.6
// @description  The script provide you ability to type right symbols in answer box without switching keyboard layout. Based on the works of Lifeshade (aka HeadwayCourse) and ilnicki
// @author       wisamasd
// @include      https://www.duolingo.com/*
// @require      http://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js
// @updateURL    https://bitbucket.org/wisamasd/duokeyswitcher/raw/master/DuoKeySwitcher.meta.js
// @downloadURL  https://bitbucket.org/wisamasd/duokeyswitcher/raw/master/DuoKeySwitcher.user.js
// @grant        none
// ==/UserScript==

$du = {
    textinput: '._3WbPm',
    nextOrPrev:"_27uC9",
    checkBox: "_1kVxU"
};

$chars = {
    keyswitcher_settings: {
        autochange: true,
        indicator_displayed: false
    },
    toolTipCheckBox: {
        en: "Keyboard layout changing",
        ru: "Автоматическая смена раскладки",
        uk: "Автоматична зміна розкладки",
        de: "Automatisch Sprache wechseln"
    },
    char: function(value, shiftValue, altValue, altShiftValue) {
        if(typeof value === "object" && value !== null) {
            this.value = value.val;
            this.shiftValue = value.shift;
            this.altValue = value.alt;
            this.altShiftValue = value.altShift;
        }
        else {
            this.value =  value;
            this.shiftValue = shiftValue;
            this.altValue = altValue;
            this.altShiftValue = altShiftValue;
        }
    },
    charmap: function(charMap, parentMap) {
        this.charMap = charMap;
        this.parentMap = parentMap;
        this.getChar = function(params) {
            if(params.ctrlKey) {
                return null;
            }

            var keyChar = this.charMap[params.keyCode];

            if(keyChar === undefined) {
                if(this.parentMap !== undefined) {
                    return this.parentMap.getChar(params);
                }
            }
            else {
                var char;

                if(params.altKey && params.shiftKey) {
                    char = keyChar.altShiftValue;
                }
                else if(params.altKey) {
                    char = keyChar.altValue;
                }
                else if(params.shiftKey) {
                    char = keyChar.shiftValue;
                }
                else {
                    char = keyChar.value;
                }

                if(char === undefined) {
                    if(this.parentMap !== undefined) {
                        return this.parentMap.getChar(params);
                    }
                }
                else {
                    return char;
                }
            }
        };
    },
    charmaps: {},
    addCharmap: function(mapCode, charMap, parentCode) {
        $chars.charmaps[mapCode] = new $chars.charmap(charMap, $chars.charmaps[parentCode]);
    },
    checkCharmap: function(mapCode) {
        return mapCode !== undefined && $chars.charmaps[mapCode] !== undefined;
    },
    checkUiLang: function(uiCode) {
        return uiCode !== undefined && $chars.toolTipCheckBox[uiCode] !== undefined;
    },
    getLocalizedChar: function(params, mapCode) {
        return $chars.charmaps[mapCode].getChar(params);
    }
};

$chars.addCharmap("en", {
    192: new $chars.char('`', '~'),
    49: new $chars.char('1', '!'),
    50: new $chars.char('2', '@'),
    51: new $chars.char('3', '#'),
    52: new $chars.char('4', '$'),
    53: new $chars.char('5', '%'),
    54: new $chars.char('6', '^'),
    55: new $chars.char('7', '&'),
    56: new $chars.char('8', '*'),
    57: new $chars.char('9', '('),
    48: new $chars.char('0', ')'),
    189: new $chars.char('-', '_'),
    187: new $chars.char('=', '+'),
    81: new $chars.char('q', 'Q'),
    87: new $chars.char('w', 'W'),
    69: new $chars.char('e', 'E'),
    82: new $chars.char('r', 'R'),
    84: new $chars.char('t', 'T'),
    89: new $chars.char('y', 'Y'),
    85: new $chars.char('u', 'U'),
    73: new $chars.char('i', 'I'),
    79: new $chars.char('o', 'O'),
    80: new $chars.char('p', 'P'),
    219: new $chars.char('[', '{'),
    221: new $chars.char(']', '}'),
    226: new $chars.char('\\', '|'),
    65: new $chars.char('a', 'A'),
    83: new $chars.char('s', 'S'),
    68: new $chars.char('d', 'D'),
    70: new $chars.char('f', 'F'),
    71: new $chars.char('g', 'G'),
    72: new $chars.char('h', 'H'),
    74: new $chars.char('j', 'J'),
    75: new $chars.char('k', 'K'),
    76: new $chars.char('l', 'L'),
    186: new $chars.char(';', ':'),
    222: new $chars.char('\'', '"'),
    220: new $chars.char('\\', '|'),
    90: new $chars.char('z', 'Z'),
    88: new $chars.char('x', 'X'),
    67: new $chars.char('c', 'C'),
    86: new $chars.char('v', 'V'),
    66: new $chars.char('b', 'B'),
    78: new $chars.char('n', 'N'),
    77: new $chars.char('m', 'M'),
    188: new $chars.char(',', '<'),
    190: new $chars.char('.', '>'),
    191: new $chars.char('/', '?')
});
$chars.addCharmap("de", {
    192: new $chars.char(null, '°'),
    50: new $chars.char({shift: '"', alt: '²'}),
    51: new $chars.char({shift: '§', alt: '³'}),
    54: new $chars.char({shift: '&'}),
    55: new $chars.char({shift: '/', alt: '{'}),
    56: new $chars.char({shift: '(', alt: '['}),
    57: new $chars.char({shift: ')', alt: ']'}),
    48: new $chars.char({shift: '=', alt: '}'}),
    189: new $chars.char('ß', '?', '\\'),
    187: new $chars.char(null, null),
    81: new $chars.char({alt: '@'}),
    69: new $chars.char({alt: '€'}),
    89: new $chars.char('z', 'Z'),
    219: new $chars.char('ü', 'Ü'),
    221: new $chars.char('+', '*', '~'),
    226: new $chars.char('<', '>', '|'),
    186: new $chars.char('ö', 'Ö'),
    222: new $chars.char('ä', 'Ä'),
    220: new $chars.char('#', '\''),
    90: new $chars.char('y', 'Y'),
    77: new $chars.char({alt: 'µ'}),
    188: new $chars.char({shift: ';'}),
    190: new $chars.char({shift: ':'}),
    191: new $chars.char('-', '_')
}, "en");
$chars.addCharmap("ru", {
    192: new $chars.char('ё', 'Ё'),
    50: new $chars.char({shift: '"'}),
    51: new $chars.char({shift:  '№'}),
    52: new $chars.char({shift: ';'}),
    54: new $chars.char({shift: ':'}),
    55: new $chars.char({shift:  '?'}),
    81: new $chars.char('й', 'Й'),
    87: new $chars.char('ц', 'Ц'),
    69: new $chars.char('у', 'У'),
    82: new $chars.char('к', 'К'),
    84: new $chars.char('е', 'Е'),
    89: new $chars.char('н', 'Н'),
    85: new $chars.char('г', 'Г'),
    73: new $chars.char('ш', 'Ш'),
    79: new $chars.char('щ', 'Щ'),
    80: new $chars.char('з', 'З'),
    219: new $chars.char('х', 'Х'),
    221: new $chars.char('ъ', 'Ъ'),
    226: new $chars.char('\\', '/'),
    65: new $chars.char('ф', 'Ф'),
    83: new $chars.char('ы', 'Ы'),
    68: new $chars.char('в', 'В'),
    70: new $chars.char('а', 'А'),
    71: new $chars.char('п', 'П'),
    72: new $chars.char('р', 'Р'),
    74: new $chars.char('о', 'О'),
    75: new $chars.char('л', 'Л'),
    76: new $chars.char('д', 'Д'),
    186: new $chars.char('ж', 'Ж'),
    222: new $chars.char('э', 'Э'),
    220: new $chars.char('\\', '/'),
    90: new $chars.char('я', 'Я'),
    88: new $chars.char('ч', 'Ч'),
    67: new $chars.char('с', 'С'),
    86: new $chars.char('м', 'М'),
    66: new $chars.char('и', 'И'),
    78: new $chars.char('т', 'Т'),
    77: new $chars.char('ь', 'Ь'),
    188: new $chars.char('б', 'Б'),
    190: new $chars.char('ю', 'Ю'),
    191: new $chars.char('.', ',')
}, "en");
$chars.addCharmap("uk", {
    192: new $chars.char('\'', '₴'),
    85: new $chars.char('г', 'Г', 'ґ', 'Ґ'),
    221: new $chars.char('ї', 'Ї'),
    226: new $chars.char('ґ', 'Ґ'),
    83: new $chars.char('і', 'І'),
    222: new $chars.char('є', 'Є')
}, "ru");

wg5 = {
    uiLanguage : "",
    lang: "",
    setOnCLick: false,
    textareaFocused: false,
    clickOrEnter: function(){
        $chars.keyswitcher_settings.indicator_displayed = false;
        wg5.setOnCLick = false;
    },
    showIndicaorLanguage: function(t){
        if (!$chars.keyswitcher_settings.indicator_displayed) {
            $chars.keyswitcher_settings.indicator_displayed = true;
            t.parent().append("\x3Cdiv id=\x22dt-keyboard_layout\x22 data-toggle=\x22tooltip\x22 title=\x22" +$chars.toolTipCheckBox[wg5.uiLanguage] +"\x22 data-placement=\x22bottom\x22 align=\x22left\x22\x3E\x3Cinput type=\x22checkbox\x22 tabindex=\x222\x22 class=\x22" + $du.checkBox + "\x22 checked=\x22checked\x22/\x3E\x3Clabel\x3E" + " \x26#8594; " + wg5.lang + "\x3C/label\x3E\x3C/div\x3E");
            if(!$chars.keyswitcher_settings.autochange){
                $('#dt-keyboard_layout :checkbox').removeAttr('checked');
            }
        }
    },
    getLanguageFromUrlLessons: function(t){
        wg5.lang = t.attr("lang");
        if (wg5.lang === undefined || wg5.lang === '') {
            wg5.lang = document.location.pathname.match(/skill\/\S\S\//)[0].split('/')[1];
            if(wg5.lang === null){
                return true;
            }
        }
    },
    setOnCLickToButtons: function(){
        if(!wg5.setOnCLick){
            var buttonsElement = document.getElementsByClassName($du.nextOrPrev);
            buttonsElement[0].onclick = wg5.clickOrEnter;
            buttonsElement[1].onclick = wg5.clickOrEnter;
            wg5.setOnCLick = true;
        }
    },
    w343: function() {
        $(document).on("keydown", function(e) {
            if(window.location.href.indexOf('duolingo.com/skill') == -1) return true;

            if ($($du.textinput).length === 0) return false;

            if ($($du.textinput).is(':focus')){
                 $($du.textinput).focus();
            }

            wg5.getLanguageFromUrlLessons($($du.textinput));

            if(!$chars.checkCharmap(wg5.lang)){
                return true;
            }

            wg5.showIndicaorLanguage($($du.textinput));
            wg5.setOnCLickToButtons();

            if(e.keyCode == 13){
                if($($du.textinput).val() === "" || $($du.textinput).val() === undefined ){
                    return false;
                }
                else{
                    document.getElementsByClassName($du.nextOrPrev)[0].onclick();
                    return true;
                }
            }

            if (!$chars.keyswitcher_settings.autochange || e.altKey || e.ctrlKey){
                return true;
            }

            var localizedChar = $chars.getLocalizedChar(e, wg5.lang);
            if (e.key === undefined || localizedChar === undefined) {
                return true;
            }

            var txt = $($du.textinput).val();
            var selStart = $($du.textinput).prop('selectionStart');
            var selEnd = $($du.textinput).prop('selectionEnd');
            if (selStart === undefined) {
                selStart = selEnd = txt.length;
            }

            var v = txt.slice(0, selStart) + localizedChar + txt.slice(selEnd);

            $($du.textinput).focus();
            $($du.textinput).val(v);
            $($du.textinput).attr("value", v);
            $($du.textinput)[0].selectionStart = $($du.textinput)[0].selectionEnd = selStart + 1;
            $($du.textinput).blur();
            $($du.textinput).focus();
            e.preventDefault();

            return true;
        });
        $(document).on("change", "#dt-keyboard_layout :checkbox", function() {
            $chars.keyswitcher_settings.autochange = $($du.textinput).prop("checked");
        });
    },
    main: function() {

        if (window.duo === undefined) {
            return false;
        }

        if($chars.checkUiLang(duo.uiLanguage)){
            wg5.uiLanguage = duo.uiLanguage;
        }
        else{
            wg5.uiLanguage="en";
        }

        wg5.w343();
        return true;
    }
};
$( document ).ready(function() {
    wg5.main();
});