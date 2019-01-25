
var pdata;
var data;
var cobs;
function init(){
  data=document.querySelector("script#data").innerHTML;
  pdata=JSON.parse(data);
 var ele=document.getElementById("main");
  ele.innerHTML=pdata.home.title+"   "+pdata.home.content;
 cobs=document.querySelectorAll("[href='#']");
 for(var i=0;i<cobs.length;i++){
  cobs[i].addEventListener('click',func);
 }
}
function func(){
 
 if(this.id=="about")
 {
  var ele=document.getElementById("main");
  ele.innerHTML=pdata.about.title+pdata.about.content;
 }
 else if(this.id=="contact")
 {
  var ele=document.getElementById("main");
  ele.innerHTML=pdata.contact.title+pdata.contact.content;
 }
 else if(this.id=="recent")
 {
  var ele=document.getElementById("main");
  ele.innerHTML=pdata.recent.title+"<br>"+pdata.recent.newsArray[0].title+"<br>"+pdata.recent.newsArray[0].news+"<br>"+pdata.recent.newsArray[1].title+"<br>"+pdata.recent.newsArray[1].news;
 }
}