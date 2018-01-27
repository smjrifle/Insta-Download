if(localStorage["enabled_insta_download"] != undefined) {
  var enabled_insta_download = localStorage["enabled_insta_download"];

  var enable_disable_ls = (enabled_insta_download == 'Enable') ? 'Disable' : 'Enable';
}
else {
  var enable_disable_ls = 'Disable';
  var enabled_insta_download = 'Enable';
}
console.log('Local storage: ' + enabled_insta_download);
console.log('Status' + enable_disable_ls);
if(enabled_insta_download == 'Disable') {
 var downloadbox = document.createElement('div');
 downloadbox.setAttribute('class','download-box');
 downloadbox.style.position = "fixed";
 downloadbox.style.top = 0;
 downloadbox.style.right = 0;
 downloadbox.style.background = "#FFF";
 downloadbox.style.width = "200px";
 downloadbox.style.padding = "5px";
 downloadbox.style.border = "1px solid #ccc";
 downloadbox.style.height = "50px";
 downloadbox.style.overflowY = 'scroll';
 downloadbox.style.maxHeight = "100%";
 downloadbox.style.color = "red";
 downloadbox.style.cursor = "pointer";
 document.body.appendChild(downloadbox);
 var enable_disable = document.createElement('a');
 enable_disable.setAttribute('id','edbtn');
 enable_disable.innerHTML = "Click to " + enable_disable_ls + " Insta download<br/><br/>";
 downloadbox.appendChild(enable_disable);
}
if(enabled_insta_download == 'Enable') {
  var img_array = [];
  var last_num;
  var downloadbox = document.createElement('div');
  downloadbox.setAttribute('class','download-box');
  downloadbox.style.position = "fixed";
  downloadbox.style.top = 0;
  downloadbox.style.right = 0;
  downloadbox.style.background = "#FFF";
  downloadbox.style.padding = "5px";
  downloadbox.style.border = "1px solid #ccc";
  downloadbox.style.width = "200px";
  downloadbox.style.height = "100%";
  downloadbox.style.overflowY = 'scroll';
  downloadbox.style.maxHeight = "100%";
  document.body.appendChild(downloadbox);
  var enable_disable = document.createElement('a');
  enable_disable.setAttribute('id','edbtn');
  downloadbox.style.color = "red";
  downloadbox.style.cursor = "pointer";
  enable_disable.innerHTML = "Click to " + enable_disable_ls + " Insta Download<br/><br/>";
  downloadbox.appendChild(enable_disable);
  var htag = document.createElement('h3');
  htag.innerHTML = "Click Image to Download<br/><br/>";
  downloadbox.appendChild(htag);
  window.onload = function() {
    myVar = setInterval(function() {
     var tagsArr = document.querySelectorAll('article > div');
     for (var i = 0, len = tagsArr.length; i < len; i++) {
      var img_div = tagsArr[i].getElementsByTagName('img');
      if(img_div.length > 0) {
       //tagsArr[i].removeChild('.download-btn');
       for(var j = 0; j < img_div.length; j++) {
        if(img_div[j].src != '' && ! in_array(img_div[j].src, img_array)) {
          img_array.push(img_div[j].src)
          var aTag = document.createElement('a');
          aTag.setAttribute('href',img_div[j].src);
          aTag.setAttribute('target',"_blank");
          aTag.setAttribute('download', 'img' + i + '.jpg');
          aTag.setAttribute('class','download-btn');
          tagsArr[i].appendChild(aTag);
          var imgtag = document.createElement('img');
          imgtag.setAttribute('src',img_div[j].src);
          imgtag.setAttribute('height', '150px');
          aTag.appendChild(imgtag);
          downloadbox.appendChild(aTag);
        }
      }
    }
  }
}, 5000);
  }
  
}
var edb = document.getElementById('edbtn');
edb.onclick = function() {enable_disable_fn(enable_disable_ls)};
function in_array(needle, haystack) {
  for(var i in haystack) {
    if(haystack[i] == needle) return true;
  }
  return false;
}

function enable_disable_fn(status) {
  console.log('Onclick' + status);
  localStorage["enabled_insta_download"] = status;
  location.reload();
}