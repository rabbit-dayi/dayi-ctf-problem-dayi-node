var http = require("http");
var url = require("url");

function start(route) {
  var str1="<!DOCTYPE html>\n<h1>你好! owo</h1>";
  str1+="\n<br><h2>owo你好呀！";
  str1+="诶！什么被什么吃掉啦？<br>\n"
  str1+="当然是被兔兔吃掉啦！<br>\n"
  str1+="给你看一只兔兔！<br></h2>\n"
  str1+="<img src=\"https://pic.icee.top/ctf/maybe_the_flag_in_the_index/79910740_p0_master1200.webp\">"
  return str1
}
exports.start = start;