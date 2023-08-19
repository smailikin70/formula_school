const scaleLeftPart = document.querySelectorAll(".scale__left-part");
const scaleRightPart = document.querySelectorAll(".scale__right-part");

function scale(list1, list2) {
    for (let i = 0; i < list1.length; i++) {
        let count1 = list1[i].innerHTML;
        let count2 = list2[i].innerHTML;
        let resultLength1 = count1 * 40;
        let resultLength2 = count2 * 40;
        while(resultLength1 > 150 || resultLength2 > 150) {
            if(resultLength1 > 60) {
                resultLength1 = resultLength1 / 2;
            }
            if(resultLength2 > 60) {
                resultLength2 = resultLength2 / 2;
            }
        }
        list1[i].style.width = resultLength1 + "px";
        list2[i].style.width = resultLength2 + "px";
    }
}

scale(scaleLeftPart, scaleRightPart)

