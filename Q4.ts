function autoComplete(search: string, items: string[], maxResult: number){
    var searchResult : string[] = [];
    var tmpItems : any[] = [];

    //==== แปลงตัวอักษรให้เป็นพิมพ์เล็ก และ set default ตัวแปร tmpItems
    search = search.toLocaleLowerCase();
    items.forEach(x => {
        tmpItems.push({ txt: x.toLocaleLowerCase(), show: x, isHave: false, rank: 9999});
    })

    //==== ทำการ loop ค้นหา เริ่มจากหน้าสุด
    tmpItems.forEach(x => {
        for(let i=0; i<x.txt.length; i++){
            if(i+search.length <= x.txt.length){
                if(x.txt.substring(i, i+search.length).includes(search)){
                    x.isHave = true;
                    x.rank = i;
                    return;
                }
            }
        }
    })

    //==== เลือกเฉพาะคำที่มีข้อความที่ต้องการค้นหา และเอาไปโชว์ตามจำนวนที่ต้องการ
    var isHave = tmpItems.filter(x => x.isHave == true);
    if(isHave.length > 0){
        var sort = isHave.sort((a, b) => a.rank - b.rank);
        sort.forEach(x => {
            if(maxResult > 0){
                searchResult.push(x.show);
                maxResult--;
            }
        })
    }

    return searchResult;
}

console.log(autoComplete('in', ['Cat', 'dog', 'NoNe', 'NAND'], 10));                     //[]
console.log(autoComplete('th', ['Mother', 'Think', 'Worthy', 'Apple', 'Android'], 2));   //[ 'Think', 'Mother' ]
console.log(autoComplete('e', ['am@zing', 'Efficient', 'ADmire', 'Creative', 'friendly', 'meaningful'], 30));   //[ 'Efficient', 'meaningful', 'Creative', 'friendly', 'ADmire' ]