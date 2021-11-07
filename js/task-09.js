function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function Switch(obj) {
            var div = document.getRandomHexColor(obj);
            if(div.style.backgroundColor === "#6DFC93"){
                div.style.backgroundColor = "#27D956";
            }else{
                div.style.backgroundColor = "#6DFC93";
            }

        }