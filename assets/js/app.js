window.onload = function() {

    /* VARIABLES GLOBALES*/

    var sendButton = document.getElementsByName("send")[0];
    var thinkInput = document.getElementsByName("message")[0];
    var timeLine = document.getElementsByName("timeline")[0];
    var boxMessage = document.getElementById('bartuit');
    var showChar = document.getElementById('showChar');

/* FUNCION PARA CREAR Y "POSTEAR" UN TUIT */

    sendButton.onclick = function() {
        if (thinkInput.value == "") {
            sendButton.disabled = false;
            sendButton.style.backgroundColor = 'turquoise';
            
            
        } else{
            var tuitDiv = document.createElement("div");
            var nameSpan = document.createElement("span");
            var dateSpan = document.createElement("span");
            var tuitP = document.createElement("p");
            var hr = document.createElement('hr')
            tuitDiv.appendChild(nameSpan);
            tuitDiv.appendChild(dateSpan);
            tuitDiv.appendChild(tuitP);
            tuitDiv.appendChild(hr);
            tuitDiv.className = "tuit"
            nameSpan.textContent = "Nienna";
            dateSpan.textContent = moment().format("MMM Do YY, H:mm:ss");
            dateSpan.id ='date';
            nameSpan.id ='name';
            tuitP.id = 'tuitP';
            
            tuitP.textContent = thinkInput.value;
            sendButton.disabled = false;
            
            timeLine.insertBefore(tuitDiv, timeLine.children[0]);
            thinkInput.value = '';           
        } 
    }

/* FUNCIÓN PARA MOSTRAR CARACTERES Y DESABILITAR BOTON*/

    thinkInput.onkeyup =function(){
               
        var max = 140;
        var total = '';
        var rest = thinkInput.value.length;
        total = max-rest;
       
        showChar.value=total;

        if(total < 0){
            sendButton.disabled = true;
            showChar.style.color='red';
            sendButton.style.backgroundColor = 'turquoise';
        }
        if (total>=0){
            sendButton.disabled = false;
            showChar.style.color='teal';
            sendButton.style.backgroundColor= 'teal';

        }  if (total<=20 && total >10){
            sendButton.disabled = false;
            showChar.style.color='turquoise';
            sendButton.style.backgroundColor= 'teal';
        }
        if (total<=10 && total >=0){
            sendButton.disabled = false;
            showChar.style.color='orange';
            sendButton.style.backgroundColor= 'teal';
        }
    }

/* FUNCIÓN PARA AJUSTAR TEXTO EN TEXTAREA */

    var textarea = document.getElementById("message");
    var heightLimit = 200; /* Maximum height: 200px */
    
    textarea.oninput = function() {
     textarea.style.height = ""; /* Reset the height*/
     textarea.style.height = Math.min(textarea.scrollHeight, heightLimit) + "px";
    }
}
