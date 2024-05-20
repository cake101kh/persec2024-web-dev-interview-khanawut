function hexToRGB(code : string){
    if(code.length != 3 && code.length != 4 && code.length != 6 && code.length != 7){
        return 'Input incorrect format';
    }

    var cutSharp: string;
    var code6: string;

    //===== ตัดเครื่องหมาย #
    if(code[0] == '#') cutSharp = code.substring(1);
    else cutSharp = code;

    //===== ทำให้เป็นรูปแบบ 6 ตัวอักษร
    if(cutSharp.length == 3) code6 = cutSharp[0]+cutSharp[0]+cutSharp[1]+cutSharp[1]+cutSharp[2]+cutSharp[2];
    else code6 = cutSharp;

    //==== แบ่งออกเป็น 3 ชุด
    var codeIn3part = code6.match(/.{2}/g);

    return codeIn3part ? {
        r: parseInt(codeIn3part[0], 16),
        g: parseInt(codeIn3part[1], 16),
        b: parseInt(codeIn3part[2], 16),
    } : null;
}

console.log(hexToRGB('FF'));              //Input incorrect format
console.log(hexToRGB('#123'));            //{ r: 17, g: 34, b: 51 }
console.log(hexToRGB('#15ffFf'));         //{ r: 21, g: 255, b: 255 }
console.log(hexToRGB('15ffFf'));          //{ r: 21, g: 255, b: 255 }
console.log(hexToRGB('#FF9933'));         //{ r: 255, g: 153, b: 51 }
console.log(hexToRGB('#ff9933'));         //{ r: 255, g: 153, b: 51 }
console.log(hexToRGB('#FFF'));            //{ r: 255, g: 255, b: 255 }
console.log(hexToRGB('#000'));            //{ r: 0, g: 0, b: 0 }

