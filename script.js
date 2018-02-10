//Показ и скрытие элемента
function showHide(){
	var obj = document.getElementById("sidebar");

	//Если css-свойство display none, то:

	if (obj.style.display === "none") {
        //Показываем элемент
        obj.style.left = 300;
        obj.style.display = "block";
		var left = 300;
        var timer = setInterval(function() {
            if (obj.style.left === '0px') {
                clearInterval(timer);
                document.getElementById('burger').value='Hide Sidebar';
            } else {
                left -= 1;
                obj.style.left = left + 'px';
            }
        }, 1);
	} else {
        //Скрываем элемент
        var left = 0;
        var timer = setInterval(function() {
            if (obj.style.left === '300px') {
                clearInterval(timer);
                obj.style.display = "none";
                document.getElementById('burger').value='Show Sidebar';
            } else {
                left += 1;
                obj.style.left = left + 'px';
            }
        }, 1);
	}
}
        
//Функция изменения размера шрифта
function fontS(val){
    if (val > 24) {
        document.getElementById("fontSize").value = 24;
        val = 24;
    }

    if (val < 8) {
        document.getElementById("fontSize").value = 8;
        val = 8
    }
	document.getElementById("controledFont").style.fontSize=val+"px";
}	
        

//Функция удаления последнего p
function removeLastP() {
    var parent=document.getElementById("controledFont");
    var children=document.getElementsByTagName("p");
    parent.removeChild(children[children.length - 1]);
}

//Изменение цвета фона
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("colorPeak").addEventListener("change", function(){
        var section = document.getElementsByClassName("section");
        section[0].style.background = this.value;
    });
	
//Изменение шрифта
    var radio = document.getElementsByName("font-style");
    radio.forEach(function(item) {
        item.addEventListener("change", function(){
            document.body.style.fontFamily = this.value;
        });
    });
});
