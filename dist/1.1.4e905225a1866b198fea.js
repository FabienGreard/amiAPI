webpackJsonp([1],{305:function(n,e,A){var o=A(306);"string"==typeof o&&(o=[[n.id,o,""]]);A(303)(o,{});o.locals&&(n.exports=o.locals)},306:function(n,e,A){e=n.exports=A(301)(),e.push([n.id,"@font-face{font-family:Merriweather;src:url("+A(307)+");font-weight:400;font-style:normal}@font-face{font-family:Inconsolata;src:url("+A(302)+");font-weight:400;font-style:normal}html{background-color:#ffa066}html h1,html h2,html h3,html h4,html h5{font-family:Merriweather,serif;font-size:16px;font-size:1rem;color:#0f0}html button,html input,html p,html select{font-family:Inconsolata,monospace;font-size:16px;font-size:1rem;color:#0f0}.container{position:absolute;top:0;right:0;bottom:0;left:0;display:-webkit-box;display:-ms-flexbox;display:flex;padding:10px}.container #shell-container{margin:auto;background-color:#000;width:900px;height:500px;box-shadow:0 0 10px #000;display:-webkit-box;display:-ms-flexbox;display:flex;-moz-flex-direction:column;-ms-flex-direction:column;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column}.container #shell-container .header-shell{margin:auto;background-color:#fff;width:100%;height:35px;display:-webkit-box;display:-ms-flexbox;display:flex}.container #shell-container .header-shell .cli-img{margin:auto 5px;width:20px;height:20px}.container #shell-container .header-shell .shell-title{font-size:13px;font-size:.8125rem;margin:auto 0;color:#000}.container #shell-container .header-shell .minimize{margin:1px 1px 1px auto;width:35px;height:33px;display:-webkit-box;display:-ms-flexbox;display:flex}.container #shell-container .header-shell .minimize:hover{background-color:#dfdfdf;color:#fff}.container #shell-container .header-shell .minimize:after{content:'';-webkit-transform:rotate(90deg);transform:rotate(90deg);margin:auto;border:1px solid gray;height:10px}.container #shell-container .header-shell .minimize:hover:after{border-color:#000}.container #shell-container .header-shell .maximize{display:-webkit-box;display:-ms-flexbox;display:flex;margin:1px 0;width:35px;height:33px;content:\"-\"}.container #shell-container .header-shell .maximize:hover{background-color:#dfdfdf;color:#fff}.container #shell-container .header-shell .maximize:after{content:'';-webkit-transform:rotate(90deg);transform:rotate(90deg);margin:auto;border:1.5px solid gray;height:7.5px;width:7.5px}.container #shell-container .header-shell .maximize:hover:after{border-color:#000}.container #shell-container .header-shell .close{display:-webkit-box;display:-ms-flexbox;display:flex;margin:1px;width:35px;height:33px;content:\"-\"}.container #shell-container .header-shell .close:hover{background-color:red;color:#fff}.container #shell-container .header-shell .close:before{content:'';-webkit-transform:rotate(-135deg) translate(-50%);transform:rotate(-135deg) translate(-50%);margin:auto 0 auto auto;border:1px solid gray;height:11px}.container #shell-container .header-shell .close:hover:before{border-color:#fff}.container #shell-container .header-shell .close:after{content:'';-webkit-transform:rotate(135deg) translate(50%);transform:rotate(135deg) translate(50%);margin:auto auto auto 0;border:1px solid gray;height:11px}.container #shell-container .header-shell .close:hover:after{border-color:#fff}.container #shell-container .body-shell{margin:auto;overflow-y:scroll;height:470px;width:100%;line-height:0;display:-webkit-box;display:-ms-flexbox;display:flex;-moz-flex-direction:column;-ms-flex-direction:column;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column}.container #shell-container .body-shell .microsoft-label{margin:9px 0;font-size:14px;font-size:.875rem}.container #shell-container .body-shell .input{font-size:14px;font-size:.875rem;line-height:normal;position:relative}.container #shell-container .body-shell .input .ping{position:absolute;bottom:0;width:7px;height:4px;-webkit-animation:pong 1s infinite;animation:pong 1s infinite}.container #shell-container .body-shell .input .link{margin:auto 5px;color:#0f0}@-webkit-keyframes pong{0%{background-color:#dfdfdf}50%{background-color:#dfdfdf}51%{background-color:#000}}@keyframes pong{0%{background-color:#dfdfdf}50%{background-color:#dfdfdf}51%{background-color:#000}}","",{version:3,sources:["/./app/css/main.css"],names:[],mappings:"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",file:"main.css",sourcesContent:["@font-face {\n  font-family: 'Merriweather';\n  src: url(\"../fonts/Merriweather/Merriweather-Regular.ttf\");\n  font-weight: normal;\n  font-style: normal;\n}\n\n@font-face {\n  font-family: 'Inconsolata';\n  src: url(\"../fonts/Inconsolata/Inconsolata-Regular.ttf\");\n  font-weight: normal;\n  font-style: normal;\n}\n\n/*$facebook: #;\r\n$twitter: #1da1f2;\r\n$instagram: #;\r\n$linkedin: #;*/\nhtml {\n  background-color: #FFA066;\n}\n\nhtml h1, html h2, html h3, html h4, html h5 {\n  font-family: \"Merriweather\", serif;\n  font-size: 16px;\n  font-size: 1rem;\n  color: #00FF00;\n}\n\nhtml p, html input, html select, html button {\n  font-family: \"Inconsolata\", monospace;\n  font-size: 16px;\n  font-size: 1rem;\n  color: #00FF00;\n}\n\n.container {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  padding: 10px;\n}\n\n.container #shell-container {\n  margin: auto;\n  background-color: #000000;\n  width: 900px;\n  height: 500px;\n  box-shadow: 0 0 10px #000000;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -moz-flex-direction: column;\n  -ms-flex-direction: column;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n\n.container #shell-container .header-shell {\n  margin: auto;\n  background-color: white;\n  width: 100%;\n  height: 35px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n\n.container #shell-container .header-shell .cli-img {\n  margin: auto 5px;\n  width: 20px;\n  height: 20px;\n}\n\n.container #shell-container .header-shell .shell-title {\n  font-size: 13px;\n  font-size: 0.8125rem;\n  margin: auto 0;\n  color: #000000;\n}\n\n.container #shell-container .header-shell .minimize {\n  margin: 1px 1px 1px auto;\n  width: 35px;\n  height: 33px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n\n.container #shell-container .header-shell .minimize:hover {\n  background-color: #DFDFDF;\n  color: #FFFFFF;\n}\n\n.container #shell-container .header-shell .minimize:after {\n  content: '';\n  -webkit-transform: rotate(90deg);\n  transform: rotate(90deg);\n  margin: auto;\n  border: 1px solid gray;\n  height: 10px;\n}\n\n.container #shell-container .header-shell .minimize:hover:after {\n  border-color: #000000;\n}\n\n.container #shell-container .header-shell .maximize {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  margin: 1px 0;\n  width: 35px;\n  height: 33px;\n  content: \"-\";\n}\n\n.container #shell-container .header-shell .maximize:hover {\n  background-color: #DFDFDF;\n  color: #FFFFFF;\n}\n\n.container #shell-container .header-shell .maximize:after {\n  content: '';\n  -webkit-transform: rotate(90deg);\n  transform: rotate(90deg);\n  margin: auto;\n  border: 1.5px solid gray;\n  height: 7.5px;\n  width: 7.5px;\n}\n\n.container #shell-container .header-shell .maximize:hover:after {\n  border-color: #000000;\n}\n\n.container #shell-container .header-shell .close {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  margin: 1px;\n  width: 35px;\n  height: 33px;\n  content: \"-\";\n}\n\n.container #shell-container .header-shell .close:hover {\n  background-color: #FF0000;\n  color: #FFFFFF;\n}\n\n.container #shell-container .header-shell .close:before {\n  content: '';\n  -webkit-transform: rotate(-135deg) translate(-50%, 0%);\n  transform: rotate(-135deg) translate(-50%, 0%);\n  margin: auto 0 auto auto;\n  border: 1px solid gray;\n  height: 11px;\n}\n\n.container #shell-container .header-shell .close:hover:before {\n  border-color: #FFFFFF;\n}\n\n.container #shell-container .header-shell .close:after {\n  content: '';\n  -webkit-transform: rotate(135deg) translate(50%, 0%);\n  transform: rotate(135deg) translate(50%, 0%);\n  margin: auto auto auto 0;\n  border: 1px solid gray;\n  height: 11px;\n}\n\n.container #shell-container .header-shell .close:hover:after {\n  border-color: #FFFFFF;\n}\n\n.container #shell-container .body-shell {\n  margin: auto;\n  overflow-y: scroll;\n  height: 470px;\n  width: 100%;\n  line-height: 0px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -moz-flex-direction: column;\n  -ms-flex-direction: column;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n\n.container #shell-container .body-shell .microsoft-label {\n  margin: 9px 0;\n  font-size: 14px;\n  font-size: 0.875rem;\n}\n\n.container #shell-container .body-shell .input {\n  font-size: 14px;\n  font-size: 0.875rem;\n  line-height: normal;\n  position: relative;\n}\n\n.container #shell-container .body-shell .input .ping {\n  position: absolute;\n  bottom: 0;\n  width: 7px;\n  height: 4px;\n  -webkit-animation: pong 1s infinite;\n  animation: pong 1s infinite;\n}\n\n.container #shell-container .body-shell .input .link {\n  margin: auto 5px;\n  color: #00FF00;\n}\n\n@-webkit-keyframes pong {\n  0% {\n    background-color: #DFDFDF;\n  }\n  50% {\n    background-color: #DFDFDF;\n  }\n  51% {\n    background-color: #000000;\n  }\n}\n\n@keyframes pong {\n  0% {\n    background-color: #DFDFDF;\n  }\n  50% {\n    background-color: #DFDFDF;\n  }\n  51% {\n    background-color: #000000;\n  }\n}\n"],sourceRoot:"webpack://"}])},307:function(n,e,A){n.exports=A.p+"asset/190ad01c56d8187bc8e7214b07f5ba34.ttf"}});