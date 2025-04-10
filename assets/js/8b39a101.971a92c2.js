"use strict";(self.webpackChunkesp_32_s_3_aiot_starter_kit=self.webpackChunkesp_32_s_3_aiot_starter_kit||[]).push([[858],{1866:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>r,toc:()=>c});const r=JSON.parse('{"id":"example/intermediate/joystick-code","title":"joystick-code","description":"","source":"@site/docs/example/intermediate/joystick-code.mdx","sourceDirName":"example/intermediate","slug":"/example/intermediate/joystick-code","permalink":"/docs/example/intermediate/joystick-code","draft":false,"unlisted":false,"editUrl":"https://github.com/johnsonwust/ESP32_AIoT/tree/gh-pages/docs/example/intermediate/joystick-code.mdx","tags":[],"version":"current","frontMatter":{},"sidebar":"exampleSidebar","previous":{"title":"\u539f\u7406","permalink":"/docs/example/easy/thermal-principle"},"next":{"title":"\u539f\u7406","permalink":"/docs/example/intermediate/joystick-principle"}}');var o=t(4848),i=t(8453);const a={},s=void 0,l={},c=[];function p(e){const n={code:"code",pre:"pre",...(0,i.R)(),...e.components};return(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-cpp",children:"\r\n/*\r\n  AnalogReadSerial\r\n\r\n  Reads an analog input on pin 0, prints the result to the Serial Monitor.\r\n  Graphical representation is available using Serial Plotter (Tools > Serial Plotter menu).\r\n  Attach the center pin of a potentiometer to pin A0, and the outside pins to +5V and ground.\r\n\r\n  This example code is in the public domain.\r\n\r\n  https://www.arduino.cc/en/Tutorial/BuiltInExamples/AnalogReadSerial\r\n*/\r\n\r\n// the setup routine runs once when you press reset:\r\nvoid setup() {\r\n  // initialize serial communication at 9600 bits per second:\r\n  Serial.begin(9600);\r\n}\r\n\r\n// the loop routine runs over and over again forever:\r\nvoid loop() {\r\n  // read the input on analog pin 0:\r\n  int sensorValuex = analogRead(5);\r\n  int sensorValuey = analogRead(4);\r\n  int sensorValuez = analogRead(6);\r\n  // print out the value you read:\r\n  Serial.println(sensorValuex);\r\n\r\n  delay(1);  // delay in between reads for stability\r\n}\r\n\n"})})}function d(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(p,{...e})}):p(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>s});var r=t(6540);const o={},i=r.createContext(o);function a(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);