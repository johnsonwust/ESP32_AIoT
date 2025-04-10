"use strict";(self.webpackChunkesp_32_s_3_aiot_starter_kit=self.webpackChunkesp_32_s_3_aiot_starter_kit||[]).push([[3892],{7341:(r,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>a,default:()=>p,frontMatter:()=>d,metadata:()=>t,toc:()=>c});const t=JSON.parse('{"id":"example/intermediate/tb6612-code","title":"tb6612-code","description":"","source":"@site/docs/example/intermediate/tb6612-code.mdx","sourceDirName":"example/intermediate","slug":"/example/intermediate/tb6612-code","permalink":"/docs/example/intermediate/tb6612-code","draft":false,"unlisted":false,"editUrl":"https://github.com/johnsonwust/ESP32_AIoT/tree/gh-pages/docs/example/intermediate/tb6612-code.mdx","tags":[],"version":"current","frontMatter":{},"sidebar":"exampleSidebar","previous":{"title":"\u539f\u7406","permalink":"/docs/example/intermediate/encoder-principle"},"next":{"title":"\u539f\u7406","permalink":"/docs/example/intermediate/tb6612-principle"}}');var i=n(4848),o=n(8453);const d={},a=void 0,s={},c=[];function l(r){const e={code:"code",pre:"pre",...(0,o.R)(),...r.components};return(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-cpp",children:"\r\n// \u5b9a\u4e49 TB6612 \u63a7\u5236\u5f15\u811a\r\n#define PWMA   35   // \u7535\u673aA\u7684PWM\u63a7\u5236\u5f15\u811a\r\n#define AIN1   36   // \u7535\u673aA\u7684\u8f93\u51651\r\n#define AIN2   37   // \u7535\u673aA\u7684\u8f93\u51652\r\n#define STBY   38   // \u5f85\u673a\u63a7\u5236\u5f15\u811a\r\n\r\n#define PWMB   14   // \u7535\u673aB\u7684PWM\u63a7\u5236\u5f15\u811a\r\n#define BIN1   12   // \u7535\u673aB\u7684\u8f93\u51651\r\n#define BIN2   13   // \u7535\u673aB\u7684\u8f93\u51652\r\n\r\nvoid setup() {\r\n  // \u521d\u59cb\u5316\u7535\u673a\u63a7\u5236\u5f15\u811a\u4e3a\u8f93\u51fa\u6a21\u5f0f\r\n  pinMode(PWMA, OUTPUT);\r\n  pinMode(AIN1, OUTPUT);\r\n  pinMode(AIN2, OUTPUT);\r\n  pinMode(STBY, OUTPUT);\r\n  pinMode(PWMB, OUTPUT);\r\n  pinMode(BIN1, OUTPUT);\r\n  pinMode(BIN2, OUTPUT);\r\n\r\n  // \u521d\u59cb\u5316\u5f85\u673a\u63a7\u5236\uff0c\u89e3\u9664\u5f85\u673a\u6a21\u5f0f\r\n  digitalWrite(STBY, HIGH);  // \u8bbe\u7f6e\u4e3a\u9ad8\u7535\u5e73\uff0c\u542f\u7528\u7535\u673a\u9a71\u52a8\r\n\r\n  // \u8bbe\u7f6e PWM \u9891\u7387\r\n  ledcSetup(0, 2000, 8);  // PWM \u901a\u90530\uff0c2kHz\u9891\u7387\uff0c8\u4f4d\u5206\u8fa8\u7387\r\n  ledcAttachPin(PWMA, 0);  // \u5c06 PWM \u63a7\u5236\u5f15\u811a PWMA \u6620\u5c04\u5230\u901a\u90530\r\n  ledcSetup(1, 2000, 8);  // PWM \u901a\u90531\uff0c2kHz\u9891\u7387\uff0c8\u4f4d\u5206\u8fa8\u7387\r\n  ledcAttachPin(PWMB, 1);  // \u5c06 PWM \u63a7\u5236\u5f15\u811a PWMB \u6620\u5c04\u5230\u901a\u90531\r\n\r\n  // \u8bbe\u7f6e\u7535\u673aA\u548c\u7535\u673aB\u7684\u521d\u59cb\u72b6\u6001\r\n  stopMotorA();\r\n  stopMotorB();\r\n}\r\n\r\nvoid loop() {\r\n  // \u8ba9\u7535\u673aA\u5411\u524d\u8f6c\u52a8\r\n  forwardMotorA();\r\n  analogWrite(PWMA, 255);  // \u7535\u673aA\u7684\u8f6c\u901f50%\r\n  delay(2000);  // \u8f6c\u52a82\u79d2\r\n\r\n  // \u7535\u673aA\u505c\u6b62\r\n  stopMotorA();\r\n  delay(100);\r\n\r\n  // \u8ba9\u7535\u673aB\u5411\u540e\u8f6c\u52a8\r\n  backwardMotorB();\r\n  analogWrite(PWMB, 255);  // \u7535\u673aB\u7684\u8f6c\u901f50%\r\n  delay(2000);  // \u8f6c\u52a82\u79d2\r\n\r\n  // \u7535\u673aB\u505c\u6b62\r\n  stopMotorB();\r\n  delay(100);\r\n}\r\n\r\nvoid forwardMotorA() {\r\n  digitalWrite(AIN1, HIGH);\r\n  digitalWrite(AIN2, LOW);\r\n}\r\n\r\nvoid backwardMotorA() {\r\n  digitalWrite(AIN1, LOW);\r\n  digitalWrite(AIN2, HIGH);\r\n}\r\n\r\nvoid stopMotorA() {\r\n  digitalWrite(AIN1, LOW);\r\n  digitalWrite(AIN2, LOW);\r\n}\r\n\r\nvoid forwardMotorB() {\r\n  digitalWrite(BIN1, HIGH);\r\n  digitalWrite(BIN2, LOW);\r\n}\r\n\r\nvoid backwardMotorB() {\r\n  digitalWrite(BIN1, LOW);\r\n  digitalWrite(BIN2, HIGH);\r\n}\r\n\r\nvoid stopMotorB() {\r\n  digitalWrite(BIN1, LOW);\r\n  digitalWrite(BIN2, LOW);\r\n}\r\n\r\n\n"})})}function p(r={}){const{wrapper:e}={...(0,o.R)(),...r.components};return e?(0,i.jsx)(e,{...r,children:(0,i.jsx)(l,{...r})}):l(r)}},8453:(r,e,n)=>{n.d(e,{R:()=>d,x:()=>a});var t=n(6540);const i={},o=t.createContext(i);function d(r){const e=t.useContext(o);return t.useMemo((function(){return"function"==typeof r?r(e):{...e,...r}}),[e,r])}function a(r){let e;return e=r.disableParentContext?"function"==typeof r.components?r.components(i):r.components||i:d(r.components),t.createElement(o.Provider,{value:e},r.children)}}}]);