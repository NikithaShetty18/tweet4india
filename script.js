

function tweetLink() {
   var baseUrl = 'https://twitter.com/intent/tweet?text=';
   var content = document.getElementById("content").value;
   var encodedContent = baseUrl+encodeURIComponent(document.getElementById("content").value);

   copyStringToClipboard(encodedContent);

if(document.getElementById("content").value){
      var x = document.getElementById("demo");
       x.style.display = "block";
   

   }else{
    x.style.display = "none";
   }
}
   
 

 function copyStringToClipboard (str) {

   var el = document.createElement('textarea');
   el.value = str;
   el.setAttribute('readonly', '');
   // el.style = {position: 'absolute', left: '-9999px'};
   document.body.appendChild(el);
    if (navigator.userAgent.match(/ipad|ipod|iphone/i)) {

      // save current contentEditable/readOnly status
      var editable = el.contentEditable;
      var readOnly = el.readOnly;

      // convert to editable with readonly to stop iOS keyboard opening
      el.contentEditable = true;
      el.readOnly = true;

      // create a selectable range
      var range = document.createRange();
      range.selectNodeContents(el);

      // select the range
      var selection = window.getSelection();
      selection.removeAllRanges();
      selection.addRange(range);
      el.setSelectionRange(0, 999999);

      // restore contentEditable/readOnly to original state
      el.contentEditable = editable;
      el.readOnly = readOnly;
}
else {
      el.select();
}

   document.execCommand('copy')
   document.body.removeChild(el);

  
   
}

