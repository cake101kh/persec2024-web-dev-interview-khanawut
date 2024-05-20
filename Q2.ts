function sortText(txtArr: string[]){
    if(txtArr.length <= 0){
        return 'Data Not Found';
    }

    //==== loop เทียบตัวอักษร ถ้าเป็นตัวอักษรทั้งคู่ให้เทียบกันเลย
    //==== ถ้าเป็นตัวเลขให้ไล่หาตัวเลขให้ครบ แล้วค่อยเทียบกัน
    var sortResult : string[] = [];
    sortResult = txtArr.sort((a, b) => {
        var res = 0;
        for(let i=0; i<a.length; i++){
            if(isNaN(+a[i]) || isNaN(+b[i])){
                if(a[i] < b[i]) return -1;
                else if(a[i] > b[i]) return 1;
            }
            else{
                var isNumA = '';
                var isNumB = '';
                
                if(!isNaN(+b[i])){
                    for(let j=i; j<a.length; j++){
                        if(!isNaN(+a[j])){
                            isNumA += a[j];
                        }
                    }

                    for(let j=i; j<b.length; j++){
                        if(!isNaN(+b[j])){
                            isNumB += b[j];
                        }
                    }

                    return Number(isNumA) - Number(isNumB);
                }
            }
        }
        return res;
    })
    
    return sortResult;
}

console.log(sortText(['C','BB','A']));                          //[ 'A', 'BB', 'C' ]
console.log(sortText(['C','BB','']));                           //[ 'BB', 'C', '' ]
console.log(sortText(['B','A2', 'b', 'A10']));                  //[ 'A2', 'A10', 'B', 'b' ]
console.log(sortText(['TH19', 'SG20' , 'TH2']));                //[ 'SG20', 'TH2', 'TH19' ]
console.log(sortText(['TH10', 'TH3Netflix' , 'TH1', 'TH7']));   //[ 'TH1', 'TH3Netflix', 'TH7', 'TH10' ]