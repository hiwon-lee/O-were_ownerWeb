$('#introBtn').click(function() {
    if($(this).hasClass("btn-secondary")) {
        $(this).removeClass("btn-secondary").addClass("btn-primary").text('수정하기');
        $('#intro').removeAttr("disabled");
    } else {
        $(this).removeClass("btn-primary").addClass("btn-secondary").text('변경하기');
        $('#intro').attr("disabled","disabled");
    }
});

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

//가격표 수정
const addPriceTagBtn = document.getElementById("addPriceTag");
const priceList = document.getElementById("tagList");

const listArr = [];

addPriceTagBtn.addEventListener("click", handleToDoSubmit);

function handleToDoSubmit() {
    
    const tr = document.createElement("tr");
    tr.id = Date.now();
    tr.innerHTML = '<td><select class="form-select" ><option selected value="">커트</option><option>펌</option><option>매직</option><option>염색</option><option>기타</option></select></td><td><input class="form-control" type="text"></td><td ><input class="form-control" type="text" onkeyup="inputNumberFormat(this)"></td><td><button type="button" onclick="deletePriceTag('+tr.id+')" class="btn-close"></button></td>'
    priceList.appendChild(tr);


}

function deletePriceTag(trID) {
    
    const tr = document.getElementById(trID);
    console.log(tr);


    tr.remove();
    
}