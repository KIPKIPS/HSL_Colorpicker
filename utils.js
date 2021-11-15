"use strict";
(async function() {
    function Utils() {

    }
    Utils.prototype = {
        hsvDisSquare: function(h1, h2) {
            let x1 = r * h1.v * h1.s * Math.cos(h1.h / 180 * Math.PI);
            let y1 = r * h1.v * h1.s * Math.sin(h1.h / 180 * Math.PI);
            let z1 = h * (1 - h1.v);
            let x2 = r * h2.v * h2.s * Math.cos(h2.h / 180 * Math.PI);
            let y2 = r * h2.v * h2.s * Math.sin(h2.h / 180 * Math.PI);
            let z2 = h * (1 - h2.v);
            return (x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2) + (z1 - z2) * (z1 - z2);
        },
        labDisSquare: function(r1, g1, b1, r2, g2, b2) {
            let l = 2126007 * (r1 - r2) + 7151947 * (g1 - g2) + 722046 * (b1 - b2);
            let a = 3258962 * (r1 - r2) - 4992596 * (g1 - g2) + 1733409 * (b1 - b2);
            let b = 1218128 * (r1 - r2) + 3785610 * (g1 - g2) - 5003738 * (b1 - b2);
            return (l * l + a * a + b * b) / (255 * 255) / Math.pow(10, 14);
        },
        rgbDisSquare: function(c1, c2) {
            return (c1.r - c2.r) * (c1.r - c2.r) + (c1.g - c2.g) * (c1.g - c2.g) + (c1.b - c2.b) * (c1.b - c2.b);
        },
        randomHexColor: function() {
            let index, strHex = "#";
            for (let i = 0; i < 6; i++) {
                index = Math.round(Math.random() * 15);
                strHex += arrHex[index];
            }
            return strHex;
        },
        //色库
        colorlibrary: [
            // [ColorTheme.Neon]
            [
                [0xFF0075, 0x172774, 0x77D970, 0xEEEEEE],
                [0x233E8B, 0x1EAE98, 0xA9F1DF, 0xFFFFC7],
                [0xFEFFDE, 0xDDFFBC, 0x91C788, 0x52734D],
                [0xF6F6F6, 0xC7FFD8, 0x98DED9, 0x161D6F],
                [0x252525, 0x6930C3, 0x64DFDF, 0x80FFDB],
                [0x222831, 0x393E46, 0xFFD369, 0xEEEEEE],
                [0xEEEEEE, 0x393E46, 0x76EAD7, 0xC4FB6D],
                [0xB6EB7A, 0xF7F7EE, 0xFB7813, 0x17706E],
                [0xEEEEEE, 0x32E0C4, 0x393E46, 0x222831],
                [0x08FFC8, 0xFFF7F7, 0xDADADA, 0x204969],
            ],
            // [ColorTheme.Light] 
            [
                [0xFAF3F3, 0xE1E5EA, 0xA7BBC7, 0xDA7F8F],
                [0xF8EDE3, 0xBDD2B6, 0xA2B29F, 0x798777],
                [0xDDDDDD, 0xF9F3F3, 0xF7D9D9, 0xF25287],
                [0xF4F9F9, 0xCCF2F4, 0xA4EBF3, 0xAAAAAA],
                [0xF6F6F6, 0xC7FFD8, 0x98DED9, 0x161D6F],
                [0xFF9292, 0xFFB4B4, 0xFFDCDC, 0xFFE8E8],
                [0xFF577F, 0xFF884B, 0xFFC764, 0xCDFFFC],
                [0xFCF8EC, 0xD0E8F2, 0x79A3B1, 0x456268],
                [0x63B7AF, 0xABF0E9, 0xD4F3EF, 0xEE8572],
                [0xBEEBE9, 0xFFFDF9, 0xFFE3ED, 0x8AC6D1],
                [0xFCF8E8, 0xECDFC8, 0xECB390, 0xDF7861],
                [0xF65C78, 0xFFD271, 0xFFF3AF, 0xC3F584],
                [0xD77FA1, 0xE6B2C6, 0xFEF6FB, 0xD6E5FA],
                [0xFF8BA7, 0xFFC6C7, 0xFAEEE7, 0xC3F0CA],
                [0xF9F9F9, 0xF6ECBF, 0xCAADDE, 0xC886E5],
                [0xFF8080, 0xFFBA92, 0xE0F5B9, 0xC6F1D6],
                [0xFCF9EC, 0xB0F4E6, 0x67EACA, 0x12D3CF],
                [0xFAF9F9, 0xADD2C9, 0x5EA3A3, 0x488B8F],
            ],
            // [ColorTheme.Dark]
            [
                [0x171717, 0x444444, 0xDA0037, 0xEDEDED],
                [0xDDDDDD, 0x222831, 0x30475E, 0xF05454],
                [0x382933, 0x3B5249, 0x519872, 0xA4B494],
                [0xC6DE41, 0x2D6E7E, 0x153B44, 0x071C21],
                [0x1A1A1B, 0x333F44, 0x37AA9C, 0x94F3E4],
                [0x27323A, 0x435055, 0x29A19C, 0xA3F7BF],
                [0x393E46, 0x00ADB5, 0xB8E1DD, 0x044A42],
                [0x0A91AB, 0xB8E1DD, 0x00ADB5, 0xD6C5F0],
                [0xE9B5D2, 0xC94E4E, 0x582233, 0x5C5470],
                [0xFF5722, 0x00ADB5, 0xD72323, 0x37AA9C],
                [0x17B794, 0xFE9797, 0xFF7844, 0xBE3144],
                [0x77ABB7, 0x044343, 0x46466E, 0xBDBDD7],
                [0xC6DE41, 0x2D6E7E, 0xF6E9E9, 0x4ECCA3],
            ],
            // [ColorTheme.Cold]
            [
                [0xD4ECDD, 0x345B63, 0x152D35, 0x112031],
                [0x7FC8A9, 0xD5EEBB, 0x5F7A61, 0x444941],
                [0xFAF3F3, 0xE1E5EA, 0xA7BBC7, 0xDA7F8F],
                [0xFFC93C, 0xDBF6E9, 0x9DDFD3, 0x31326F],
                [0xCCFFBD, 0x7ECA9C, 0x40394A, 0x1C1427],
                [0xF4F9F9, 0xCCF2F4, 0xA4EBF3, 0xAAAAAA],
                [0xF6F5F5, 0xD3E0EA, 0x1687A7, 0x276678],
                [0xF7F7E8, 0xC7CFB7, 0x9DAD7F, 0x557174],
                [0xF4F4F2, 0xE8E8E8, 0xBBBFCA, 0x495464],
                [0x1C2B2D, 0x1F6F8B, 0x99A8B2, 0xE6D5B8],
            ],
            // [ColorTheme.Winter]
            [
                [0x766161, 0x87A7B3, 0xCDC7BE, 0xE1F1DD],
                [0x393E46, 0x00ADB5, 0xAAD8D3, 0xEEEEEE],
                [0x02475E, 0x687980, 0xF3BDA1, 0xFEFECC],
                [0x325288, 0xF4EEE8, 0xF5CEBE, 0x114E60],
                [0xF3F4ED, 0x536162, 0x424642, 0xC06014],
                [0xF6F5F5, 0xD3E0EA, 0x1687A7, 0x276678],
                [0x7C9473, 0xCFDAC8, 0xE8EAE6, 0xCDD0CB],
                [0x495464, 0xBBBFCA, 0xE8E8E8, 0xF4F4F2],
                [0x1C2B2D, 0x1F6F8B, 0x99A8B2, 0xE6D5B8],
                [0x625261, 0xA6A6A4, 0xE8E8E8, 0x89BEB3],
            ],
            //HighContrastRatioDark
            [
                [0x000000, 0xEEEEEE, 0xA6F6F1, 0xFA26A0],
                [0xFFD5E5, 0xffffff, 0xFF5D6C, 0xF35588],
                [0xECFCFF, 0x5EDFFF, 0x3E64FF, 0x272121],
                [0x61F2F5, 0xE0E0E0, 0x723881, 0x204969],
                [0x51EAEA, 0xFFFDE1, 0xFF9D76, 0xFB3569],
                [0xF7F7F8, 0x4EEAF6, 0xC82586, 0x291F71],
            ],
            //HighContrastRatioLight
            [
                [0xD83A56, 0xFFEAC9, 0x66DE93, 0xFFD369],
                [0x3DB2FF, 0xFFEDDA, 0xFFB830, 0xFF2442],
                [0xF3F1F5, 0xF0D9FF, 0xBFA2DB, 0x7F7C82],
                [0x00EAD3, 0xFFF5B7, 0xFF449F, 0x005F99],
                [0xF8F5F1, 0xE9896A, 0x387C6D, 0x343F56],
                [0xF4F9F9, 0xF1D1D0, 0xFBACCC, 0xF875AA],
                [0xDC143C, 0xE6E6FA, 0x00BFFF, 0xffffff],
            ]
        ],
        colorMatchGroup: function(type) {
            type = parseInt(type || this.randomColorTheme());
            // let c = this.colorlibrary[type][parseInt(this.randomRange(0, this.colorlibrary[type].length))];
            // console.log(`%c color1 %s`, 'color: #' + this.to16(c[0]));
            // console.log(`%c color2 %s`, 'color: #' + this.to16(c[1]));
            // console.log(`%c color3 %s`, 'color: #' + this.to16(c[2]));
            // console.log(`%c color4 %s`, 'color: #' + this.to16(c[3]));
            return this.colorlibrary[type][parseInt(this.randomRange(0, this.colorlibrary[type].length))];
        },
        colorMatch: function(cmg, index) {
            return cmg[index % cmg.length];
        },
        randomColorTheme: function() {
            return parseInt(this.randomRange(0, this.colorlibrary.length));
        },
        randomRange: function(t, i) {
            return i == undefined ? (Math.random() * t) : (Math.random() * (i - t) + t);
        },
        randompm: function() {
            return this.randomRange(-1, 1) > 0 ? 1 : -1;
        },
        //10进制转16
        to16: function(num) {
            return num.toString(16);
        },
        to10: function(hex) {
            return Number('0x' + hex);
        },
        clamp: function(value, x, y) {
            return (x != null & y != null) ? ((value >= x && value <= y) ? value : (value < x ? x : y)) : ((value >= 0 && value <= x) ? value : (value < 0 ? 0 : x))
        },
        clamp01: function(value) {
            return (value >= 0 && value <= 1) ? value : (value < 0 ? 0 : 1);
        },
        //设备环境
        checkDeviceType: function(userAgent) {
            return { isMobile: userAgent.toLowerCase().match(/(ipod|ipad|iphone|android|coolpad|mmp|smartphone|midp|wap|xoom|symbian|j2me|blackberry|wince)/i) != null, isIOS: !!userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/) };
        },
        isMobile: function(userAgent) {
            return userAgent.toLowerCase().match(/(ipod|ipad|iphone|android|coolpad|mmp|smartphone|midp|wap|xoom|symbian|j2me|blackberry|wince)/i) != null
        },
        isIOS: function(userAgent) {
            return !!userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
        },
        lerp(v, t, p) { //插值为了平滑些
            return (v != t) ? (v + (t - v) * p) : t;
        }
    };
    window.Utils = new Utils();
    // [0x0087ff, 0xff5559, 0xffdf30, 0x35dc61]
})();