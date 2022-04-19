
var http = require("http");
var ser_owo = require("./owo");
var ctime=require("./ctime");




http.createServer(function (request, response) {
  str_fake_redirect="<script type=\"text/javascript\">\nwindow.location=\"./owo\";</script>";
  res=response
  console.log("["+ctime.getnowtime()+"]"+"REV GET:"+request.url);

  res.setHeader('Content-Type', 'text/html;charset=utf-8');
  //res.setHeader('Content-Type', 'text/palin; charset=utf-8');
  var str = request.url;
  if(str=="/"){
    response.writeHead(301, {'Location': './owo.php'});
    var str=str_fake_redirect+"\nMaybe in the index ?Not in my here! \n";
    response.end(str);
    return ;
  }
  if(str=="/index.html"){
    response.end(str_fake_redirect);
    return;
  }
  if(str=="/index.php"){
    response.writeHead(301, {'Location': './owo.php'});
    var str=str_fake_redirect+"\nOppos,flag maybe in here?<br>\n";
    str+="Maybe this server is php? owo?\n"
    str+="Did the hits.php file is really exist?"
    response.end(str);
    return ;
  }
  if(str=="/index"){
    response.writeHead(301, {'Location': './owo.php'});
    var str2=str_fake_redirect+"\nowo\n";
        str2+="maybe..but,why not go index.php?\n"
        str2+="OK OK !\n"
        str2+="What server am I? What is the suffix of my startup file?\n"
        str2+="If you find my suffix,add 'index' and access it!"
    response.end(str2)
    return;
  }
  if(str=="/flag.php"){
    response.end("笑死了");
    return;
  }
  if(str=="/flag"){
    response.writeHead(301, {'Location': './owo.php'});
    response.end(str_fake_redirect+'\nNo way\n');
    return;
  }
  if(str=="/owo.php"){
    response.end(ser_owo.start(request.url))
    return
  }
  if(str=="/hits.php"){
    response.writeHead(301, {'Location': './owo.php'});
    response.end("NO PHP !More hit in somewhere!")
    return;
  }
  if(str=="/hits.html"){
    response.end("Nodejs is amazing!")
    return;
  }
  if(str=="/index.js"){
    response.writeHead(301, {'Location': './owo.php'});
    response.end("NICE WORK! http://dl.icee.top/ctf/bb644a4f-38ba-e1b8-f580-18e26e93ea31/nice.zip")
    return;
  }
  response.writeHead(301, {'Location': './owo.php'});
  response.end(str_fake_redirect+'Maybe in the index ?Not in my here!\n');
}).listen(8801);

// 终端打印如下信息
console.log('Server running at http://127.0.0.1:8801/');
console.log("8801");