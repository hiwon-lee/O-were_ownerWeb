function addStorageRow() {
    const tr = document.createElement("tr");
    tr.id = Date.now();
    tr.innerHTML = '<td><select class="form-select" ><option selected value="">커트</option><option>펌</option><option>매직</option><option>염색</option><option>기타</option></select></td><td><input class="form-control" type="text"></td><td ><input class="form-control" type="text" onkeyup="inputNumberFormat(this)"></td><td><button type="button" onclick="deleteTrList('+tr.id+')" class="btn-close"></button></td>'
    priceList.appendChild(tr);
}

let storageListHuge = [];
const emptyMsg = document.getElementById('emptyMsg');

function addStorageRowhugeVer() {
    const hugeTable = document.getElementById('storageHugeTable');
    const tr = document.createElement("tr");
    let idx = storageListHuge.length;
   
    console.log(idx);
    console.log(event);
    tr.id = Date.now();
    tr.innerHTML = '<td> <select class="" aria-label="Default select"> <option selected>선택</option> <option value="시세이도">시세이도</option> <option value="로레알">로레알</option> <option value="소망">소망</option> <option value="아이몬프로페셔널">아이몬프로페셔널</option> <option value="아이몬프로페셔널"> </option> </select></td><td> <input type="text"></td><td> <input type="date"></td><td> <input type="number" onkeyup="inputNumberFormat(this)"></td><td><input type="number" min="0" maxlength="3"></td><td><input type="number" min="0" size="40"></td><td> <div class="isExist"> <input class="form-check-input" type="radio" name="isExist'+tr.id+'" id="exist" checked > <label class="form-check-label" for="exist"> X </label> <input class="form-check-input" type="radio" name="isExist'+tr.id+'" id="nonExist"> <label class="form-check-label" for="nonExist"> O </label> </div></td><td><button type="button" onclick="deleteTrList('+tr.id+')" class="btn-close"></button></td>'
    storageListHuge.push(tr);
    console.log(storageListHuge);
    hugeTable.appendChild(tr);

    idx = storageListHuge.length;
    console.log(idx);
    isneedNotice(idx);

}

function deleteTrList(trID) {
    
    const tr = document.getElementById(trID);
    // console.log(storageListHuge.findIndex(item => item.id == trID));
    let index = storageListHuge.findIndex(item => item.id == trID);

    

    storageListHuge.splice(index, 1);

    isneedNotice(storageListHuge.length);
   


    tr.remove();
    
}
function isneedNotice(idx) {
    if(idx == 0) {
        // console.log('ii');
        emptyMsg.classList.remove('d-none');
    } else {
        if(emptyMsg.classList.contains('d-none') == false) {
            emptyMsg.classList.add('d-none');
        }
       
    }
}

// 가격에 comma
function inputNumberFormat(obj) {
    obj.value = comma(uncomma(obj.value));
}

function comma(str) {
    str = String(str);
    return str.replace(/(\d)(?=(?:\d{3})+(?!\d))/g, '$1,');
}

function uncomma(str) {
    str = String(str);
    return str.replace(/[^\d]+/g, '');
}