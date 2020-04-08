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
  var storyimg_array = [];
  var storydownload_btn_array = [];
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

  window.onload = function() {myVar = setInterval(function() {
    if(fetch == 0) {
      downloadbox.removeChild(htag2);
      fetch = 1;
    }

    var tagsArr = document.querySelectorAll('article > div');
    var tagsArr2 = document.querySelectorAll('article');
    var tagsArr3 = document.querySelectorAll('section > div > div> section');


      //Story Download
      for (var i = 0, len = tagsArr3.length; i < len; i++) {
        var img_div = tagsArr3[i].getElementsByTagName('img');
        var video_div = tagsArr3[i].getElementsByTagName('video');
        if(img_div.length > 0) {
          for(var j = 0; j < img_div.length; j++) {
            var imgName = (img_div[j].getAttribute('alt') != null) ? img_div[j].getAttribute('alt') : 'image' + j;
            var aTag = document.createElement('a');
            if(img_div[j].src != '' && ! in_array(img_div[j].src, storyimg_array)) {
              storyimg_array.push(img_div[j].src);

              var aTag = document.createElement('a');
              aTag.setAttribute('href', '#!');
              aTag.setAttribute('class', 'imgdownload');
              aTag.setAttribute('data-name', imgName + '.jpg');
              aTag.setAttribute('data-image', img_div[j].src);
              aTag.onclick = function(e) {
                e.preventDefault();
                forceDownload(this);
              }
              var downloadText = 'Download ' + imgName + '      ';
              var t = document.createTextNode(downloadText);
              aTag.appendChild(t);
              var br = document.createElement("br");
              aTag.appendChild(br);
              aTag.style.marginBottom = "10px";
              aTag.style.overflow = "hidden";
              aTag.style.marginLeft = "auto";
              aTag.style.marginRight = "auto";
              aTag.style.width = "95%";
              aTag.style.whiteSpace = "nowrap";
              aTag.style.textOverflow = "ellipsis";
              aTag.style.top = "0";
              aTag.style.left = "0";
              aTag.style.position = "left";
              aTag.style.color = "#FFF";
              tagsArr3[i].appendChild(aTag);

              var aTag = document.createElement('a');
              aTag.setAttribute('href','#!');
              aTag.setAttribute('data-name', imgName + '.jpg');
              aTag.setAttribute('data-image', img_div[j].src);
              aTag.setAttribute('class','download-btn');
              tagsArr3[i].appendChild(aTag);
              aTag.onclick = function() {
                forceDownload(this);
              }
              var imgtag = document.createElement('img');
              imgtag.setAttribute('src',img_div[j].src);
              imgtag.setAttribute('height', '150px');
              aTag.appendChild(imgtag);
              aTag.style.padding = "15px";
              aTag.style.borderBottom = "1px solid #CCC";
              aTag.style.marginBottom = "15px;";
              downloadbox.appendChild(aTag);
            }
          }

          if(video_div.length > 0) {
            for(var j = 0; j < video_div.length; j++) {
              var source = video_div[i].getElementsByTagName('source');
              if(source[j].src != '' && ! in_array(source[0].src, storydownload_btn_array)) {
                storydownload_btn_array.push(source[j].src);

                var aTag = document.createElement('a');
                aTag.setAttribute('href', '#!');
                aTag.setAttribute('class', 'imgdownload');
                aTag.setAttribute('data-name', imgName + '.jpg');
                aTag.setAttribute('data-image', source[j].src);
                aTag.onclick = function(e) {
                  e.preventDefault();
                  forceDownload(this);
                }
                var downloadText = 'Download ' + imgName + '      ';
                var t = document.createTextNode(downloadText);
                aTag.appendChild(t);
                var br = document.createElement("br");
                aTag.appendChild(br);
                aTag.style.marginBottom = "10px";
                aTag.style.overflow = "hidden";
                aTag.style.marginLeft = "auto";
                aTag.style.marginRight = "auto";
                aTag.style.width = "95%";
                aTag.style.whiteSpace = "nowrap";
                aTag.style.textOverflow = "ellipsis";
                aTag.style.top = "0";
                aTag.style.left = "0";
                aTag.style.position = "left";
                aTag.style.color = "#FFF";
                tagsArr3[i].appendChild(aTag);

                var aTag = document.createElement('a');
                aTag.setAttribute('href','#!');
                aTag.setAttribute('data-name', imgName + '.mp4');
                aTag.setAttribute('data-image', source[j].src);
                aTag.setAttribute('class','download-btn');
                aTag.onclick = function(e) {
                  e.preventDefault();
                  forceDownload(this);
                }
                var vidtag = document.createElement('video');
                vidtag.setAttribute('src',source[j].src);
                vidtag.setAttribute('controls', true)
                vidtag.setAttribute('height', '150px');
                aTag.appendChild(vidtag);
                var br = document.createElement("br");
                htag.appendChild(br);
                var ptag = document.createElement('p');
                var t = document.createTextNode("Download Video");
                ptag.appendChild(t);
                aTag.appendChild(ptag);
                aTag.style.padding = "15px";
                aTag.style.borderBottom = "1px solid #CCC";
                aTag.style.marginBottom = "15px;";
                downloadbox.appendChild(aTag);
              }
            }
          }
        }
      }

      //Post and Video Download
      for (var i = 0, len = tagsArr2.length; i < len; i++) {
        var headertag = tagsArr2[i].getElementsByTagName('header');
        var img_div = tagsArr2[i].getElementsByTagName('img');
        var video_div = tagsArr2[i].getElementsByTagName('video');
        if(img_div.length > 0) {
          for(var j = 0; j < img_div.length; j++) {
            var parent = img_div[j].parentElement.nodeName;
            var imgName = (img_div[j].getAttribute('alt') != null) ? img_div[j].getAttribute('alt') : 'image' + j;
            if(img_div[j].src != '' && ! in_array(img_div[j].src, download_btn_array)) {
              download_btn_array.push(img_div[j].src);
              var aTag = document.createElement('a');
              aTag.setAttribute('href', '#!');
              aTag.setAttribute('class', 'imgdownload');
              aTag.setAttribute('data-name', imgName + '.jpg');
              aTag.setAttribute('data-image', img_div[j].src);
              aTag.onclick = function(e) {
                e.preventDefault();
                forceDownload(this);
              }
              var downloadText = 'Download ' + imgName + '      ';
              var t = document.createTextNode(downloadText);
              aTag.appendChild(t);
              var br = document.createElement("br");
              aTag.appendChild(br);
              aTag.style.marginBottom = "10px";
              aTag.style.overflow = "hidden";
              aTag.style.marginLeft = "auto";
              aTag.style.marginRight = "auto";
              aTag.style.width = "95%";
              aTag.style.whiteSpace = "nowrap";
              aTag.style.textOverflow = "ellipsis"
              tagsArr2[i].appendChild(aTag);


              var aTag = document.createElement('a');
              aTag.setAttribute('href','#!');
              aTag.setAttribute('data-name', imgName + '.jpg');
              aTag.setAttribute('data-image', img_div[j].src);
              aTag.setAttribute('class','download-btn');
              aTag.onclick = function() {
                forceDownload(this);
              }
              var imgtag = document.createElement('img');
              imgtag.setAttribute('src',img_div[j].src);
              imgtag.setAttribute('height', '150px');
              aTag.appendChild(imgtag);
              aTag.style.padding = "15px";
              aTag.style.borderBottom = "1px solid #CCC";
              aTag.style.marginBottom = "15px;";
              downloadbox.appendChild(aTag);
            }
          }
        }

        if(video_div.length > 0) {
          for(var j = 0; j < video_div.length; j++) {
            var parent = video_div[j].parentElement.nodeName;
            var imgName = (video_div[j].getAttribute('alt') != null) ? video_div[j].getAttribute('alt') : 'video' + j;
            if(video_div[j].src != '' && ! in_array(video_div[j].src, download_btn_array)) {
              download_btn_array.push(video_div[j].src)
              var aTag = document.createElement('a');
              aTag.setAttribute('href', '#!');
              aTag.setAttribute('class', 'videodownload');
              aTag.setAttribute('data-name', imgName + '.mp4');
              aTag.setAttribute('data-image', video_div[j].src);
              aTag.onclick = function(e) {
                e.preventDefault();
                forceDownload(this);
              }
              var downloadText = 'Download ' + imgName + '      ';
              var t = document.createTextNode(downloadText);
              aTag.appendChild(t);
              var br = document.createElement("br");
              aTag.appendChild(br);
              aTag.style.marginBottom = "10px";
              aTag.style.overflow = "hidden";
              aTag.style.marginLeft = "auto";
              aTag.style.marginRight = "auto";
              aTag.style.width = "95%";
              aTag.style.whiteSpace = "nowrap";
              aTag.style.textOverflow = "ellipsis"
              tagsArr2[i].appendChild(aTag);


              var aTag = document.createElement('a');
              aTag.setAttribute('href','#!');
              aTag.setAttribute('data-name', imgName + '.mp4');
              aTag.setAttribute('data-image', video_div[j].src);
              aTag.setAttribute('class','download-btn');
              aTag.onclick = function(e) {
                e.preventDefault();
                forceDownload(this);
              }
              var vidtag = document.createElement('video');
              vidtag.setAttribute('src',video_div[j].src);
              vidtag.setAttribute('controls', true)
              vidtag.setAttribute('height', '150px');
              aTag.appendChild(vidtag);
              var br = document.createElement("br");
              htag.appendChild(br);
              var ptag = document.createElement('a');
              var t = document.createTextNode("Download Video");
              ptag.appendChild(t);
              aTag.appendChild(ptag);
              aTag.style.padding = "15px";
              aTag.style.borderBottom = "1px solid #CCC";
              aTag.style.marginBottom = "15px;";
              downloadbox.appendChild(aTag);
            }
          }
        }

      }


    }, 3000);
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
  if(fileName == null) {fileName = 'instaImage';}
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