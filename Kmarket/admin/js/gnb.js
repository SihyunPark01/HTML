$(function(){

    var category = $('#gnb > li > a');

    category.click(function(e){
        e.preventDefault();
       
        var isVisible = $(this).next().is(':visible'); /*this : 내가 클릭한 a태그 / next() : ol태그 */

        if(isVisible){
            //서브메뉴가 보여지는 상태면 -> 닫기
            $(this).next().slideUp();
        }else{
            //서브메뉴가 안보여지는 상태면 -> 열기
            $(this).next().slideDown();
        }
    });
});