class ReverseEncoder {

    encode(str: string, isUpper: boolean = false) : string{
        if(!isUpper) str = str.toLowerCase();        //ทำให้เป็นพิมพ์เล็กทั้งหมด
        var tmpCode : number[] = [];
        var codeToTxt : string = '';
        var result = '';
        //==== แปลง string ให้เป็นรหัส ascii และสลับให้ a=z, b=y, c=x, ..., x=c, y=b, z=a
        for(let i=0; i<str.length; i++){
            var num = str.charCodeAt(i);
            if(num > 96 && num < 123) tmpCode.push(219-num);
            else if(isUpper && num > 64 && num < 91) tmpCode.push(155-num);
            else tmpCode.push(num);
        }

        //==== สลับตำแหน่งจากหลังมาหน้า แล้วแปลงกลับเป็นตัวอักษร
        for(let i=(tmpCode.length-1); i>=0; i--){
            codeToTxt += String.fromCharCode(tmpCode[i]);
        }

        //==== แยกคำออกจากกันด้วยช่องว่าง
        var splitSpace = codeToTxt.split(' ');

        //==== เอาคำมาเรียงจากหลังมาหน้า
        //==== และในแต่ละคำ เอาตัวอักษรมาเรียงจากหลังมาหน้า
        for(let i=0; i<splitSpace.length; i++){
            for(let j=splitSpace[i].length-1; j>=0; j--){
                result += splitSpace[i][j];
            }
            if(i<splitSpace.length-1) result += ' ';
        }

        return result;
    }

    decode(str: string, isUpper: boolean = false){
        if(!isUpper) str = str.toLowerCase();        //ทำให้เป็นพิมพ์เล็กทั้งหมด
        var txtToCode : number[] = [];
        var result = '';
        var txtRev = '';

        //==== แยกคำออกจากกันด้วยช่องว่าง
        var splitSpace = str.split(' ');

        //==== เอาแต่ละคำมาเรียงตัวอักษรจากหลังไปหน้า
        for(let i=0; i<splitSpace.length; i++){
            for(let j=splitSpace[i].length-1; j>=0; j--){
                txtRev += splitSpace[i][j];
            }
            if(i<splitSpace.length-1) txtRev += ' ';
        }

        //==== เอาตัวอักษรมาแปลงเป็นรหัส ascii โดยเรียงจากหลังมาหน้า
        for(let i=txtRev.length-1; i>=0; i--){
            txtToCode.push(txtRev.charCodeAt(i))
        }

        //==== แปลงจาก a=z, b=y, c=x, ..., x=c, y=b, z=a
        for(let i=0; i<txtToCode.length; i++){
            var num = 219-txtToCode[i];
            var num2 = 155-txtToCode[i];
            if(num > 96 && num < 123) result += String.fromCharCode(num);
            else if(isUpper && num2 > 64 && num2 < 91) result += String.fromCharCode(num2);
            else result += String.fromCharCode(txtToCode[i]);
        }

        return result;
    }
}

//* ### จากโจทย์ถ้าค่า input มาเป็นพิมพ์เล็กทั้งหมด จะ decode ออกเป็นพิมพ์ใหญ่ไม่ได้ เพราะไม่มีอะไรให้ตรวจสอบ ### */
var reEn :ReverseEncoder = new ReverseEncoder();
console.log(reEn.encode('aBcD'));                           //zyxw
console.log(reEn.encode('ZyxW'));                           //abcd
console.log(reEn.encode('Hello world'));                    //dliow svool
console.log(reEn.encode('Hello WORLD', true));              //DLIOW Svool
console.log(reEn.encode('this is test'));                   //gvhg rh gsrh
console.log(reEn.encode('this is test from the mars'));     //nzih gsv uiln gvhg rh gsrh
console.log(reEn.decode('zyxw'));                           //abcd
console.log(reEn.decode('abcd'));                           //zyxw
console.log(reEn.decode('dliow svool'));                    //hello world
console.log(reEn.decode('DLIOW Svool', true));              //Hello WORLD
console.log(reEn.decode('gvhg rh gsrh'));                   //this is test
console.log(reEn.decode('nzih gsv uiln gvhg rh gsrh'));     //this is test from the mars
