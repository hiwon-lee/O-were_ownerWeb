function correctionStorageTable(state) {
    $('td[name=_correction_]').toggleClass('d-none');
    $('div[name=_correction_]').toggleClass('d-none');

    const stoarageField =  $('fieldset#storageTable');
    state == true ? stoarageField.prop( "disabled", null ) : stoarageField.prop( "disabled", true);
    console.log(state);

    switch (state) {
        case 3 : //cancel
            console.log('cancel');
            break;
        case 2 : //save
            console.log('save');

            // <div class="alert alert-success d-flex align-items-center" role="alert">
            //     <svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Success:"><use xlink:href="#check-circle-fill"/></svg>
            //     <div>
            //         An example success alert with an icon
            //     </div>
            // </div>
            break;
        
    }
    // case:
}
function canceledCorrection() {

}

// const arrnon = $('.d-none');

// console.log(arrnon);
// $.each(arrnon, function() {
//     $(this).removeClass('d-none');
// })

//----------------------------------------------------------------------------
// 전체선택 및 해제 기능은..
let checkedarr =[];
$('input[name=_selected_all_]').on('change', function(){
    $('input[name=_selected_]').prop('checked', this.checked);

    checkedarr =  $('input[name=_selected_]:checked').serializeArray().map(function(item) { return item.value });
    console.log(checkedarr);
});
$('input[name=_selected_]').on('change', function(){
    console.log($(this).is( ":checked" )==false)
    if($(this).is( ":checked" )==false) {
        $('input[name=_selected_all_]').prop('checked', false);
    }
      

    checkedarr =  $('input[name=_selected_]:checked').serializeArray().map(function(item) { return item.value });
    console.log(checkedarr);});
 
  
  
  //----------------------------------------------------------------------------
  // 선택한 Checkbox 값을 가져오는 방법은...
  
//   var arr = $('input[name=_selected_]:checked').serializeArray().map(function(item) { return item.value });
//   console
  
  //var str = $('input[name=_selected_]:checked').serialize(); // 이건 QueryString 방식으로 