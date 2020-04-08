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
 var text = document.createTextNode("Click to " + enable_disable_ls + " Insta Download");
 enable_disable.appendChild(text);
 downloadbox.appendChild(enable_disable);
}

if(enabled_insta_download == 'Enable') {

  var img_array = [];
  var download_btn_array = [];
  var last_num;
  var fetch = 0;
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
  var text = document.createTextNode("Click to " + enable_disable_ls + " Insta Download");
  enable_disable.appendChild(text);
  downloadbox.appendChild(enable_disable);
  var htag = document.createElement('h3');
  var text = document.createTextNode("Click Image to Download");
  htag.appendChild(text);
  downloadbox.appendChild(htag);
  var htag2 = document.createElement('h5');
  var text2 = document.createTextNode("Fetching Image......");
  htag2.appendChild(text2);
  htag2.style.color = 'black';
  var br = document.createElement("br");
  htag.appendChild(br);
  htag.appendChild(br);
  downloadbox.appendChild(htag2);

  window.onload = function() {
    myVar = setInterval(function() {
      if(fetch == 0) {
        downloadbox.removeChild(htag2);
        fetch = 1;
      }

      var tagsArr = document.querySelectorAll('article > div');
      var tagsArr2 = document.querySelectorAll('article');
      for (var i = 0, len = tagsArr2.length; i < len; i++) {
  // console.log(tagsArr2[i]);
  var headertag = tagsArr2[i].getElementsByTagName('header');
  var img_div = tagsArr2[i].getElementsByTagName('img');
   if(img_div.length > 0) {
       //tagsArr[i].removeChild('.download-btn');
       // console.log(headertag[0]);
       for(var j = 0; j < img_div.length; j++) {
         var parent = img_div[j].parentElement.nodeName;
         console.log(img_div[j].parentElement.nodeName);
          if(img_div[j].src != '' && ! in_array(img_div[j].src, download_btn_array)) {
            download_btn_array.push(img_div[j].src)
            var aTag = document.createElement('a');
            aTag.setAttribute('href', '#!');
            aTag.setAttribute('class', 'imgdownload');
            aTag.setAttribute('data-name', img_div[j].getAttribute('alt') + '.jpg');
            aTag.setAttribute('data-image', img_div[j].src);
            aTag.onclick = function(e) {
              e.preventDefault();
              forceDownload(this);
            }
            var downloadText = 'Download ' + img_div[j].getAttribute('alt') + '      ';
            var t = document.createTextNode(downloadText);
            aTag.appendChild(t);
            var br = document.createElement("br");
            aTag.appendChild(br);
            aTag.style.marginBottom = "10px";
            aTag.style.overflow = "hidden";
            aTag.style.whiteSpace = "nowrap";
            tagsArr2[i].appendChild(aTag);
          //console.log(img_div[j].src);
        }
    }
  }

   // getElementsByClassName('imgdownload').onclick = function() {
   //   forceDownload(this);
   // }

 }
 var tagsArr = document.querySelectorAll('article > div');
 var tagsArr2 = document.querySelectorAll('article');
 for (var i = 0, len = tagsArr.length; i < len; i++) {
  var img_div = tagsArr[i].getElementsByTagName('img');
  if(img_div.length > 0) {
       //tagsArr[i].removeChild('.download-btn');
       // console.log(img_div)
       for(var j = 0; j < img_div.length; j++) {
        if(img_div[j].src != '' && ! in_array(img_div[j].src, img_array)) {
          img_array.push(img_div[j].src)
          var aTag = document.createElement('a');
          aTag.setAttribute('href','#!');
          aTag.setAttribute('data-name', img_div[j].getAttribute('alt') + '.jpg');
          aTag.setAttribute('data-image', img_div[j].src);
          aTag.setAttribute('class','download-btn');
          tagsArr[i].appendChild(aTag);
          aTag.onclick = function() {
            forceDownload(this);
          }
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

function forceDownload(link){
  var url = link.getAttribute("data-image");
  var fileName = link.getAttribute("data-name");
  console.log(fileName);
  var xhr = new XMLHttpRequest();
  xhr.open("GET", url, true);
  xhr.responseType = "blob";
  xhr.onload = function(){
    var urlCreator = window.URL || window.webkitURL;
    var imageUrl = urlCreator.createObjectURL(this.response);
    var tag = document.createElement('a');
    tag.href = imageUrl;
    tag.download = fileName;
    document.body.appendChild(tag);
    tag.click();
    document.body.removeChild(tag);
  }
  xhr.send();
}