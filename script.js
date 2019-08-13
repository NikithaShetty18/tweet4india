

function tweetLink() {
		var baseUrl = 'https://twitter.com/intent/tweet?text=';
		var content = document.getElementById("content").value;
		var encodedContent = baseUrl+encodeURIComponent(document.getElementById("content").value);
		alert("Link Copied");
		copyStringToClipboard(encodedContent);



	}

function copyStringToClipboard (str) {

   var el = document.createElement('textarea');
   el.value = str;
   el.setAttribute('readonly', '');
   // el.style = {position: 'absolute', left: '-9999px'};
   document.body.appendChild(el);
   el.select();
   document.execCommand('copy');
   document.body.removeChild(el);
}
     


