window.addEventListener("load",function(){
  var feed = document.getElementById('newsfeed');
  var news = [].slice.call(feed.getElementsByTagName('a'));
  var html = '';
  for(var i = 0; i < 3; i++){
    for(var link in news){
      html += news[link].outerHTML + ' +++ ';
    }
  }
  feed.innerHTML = html;
  feed.style.animationDuration = feed.innerText.length  * 0.33 + "s";
  feed.classList.add("ready")
});
