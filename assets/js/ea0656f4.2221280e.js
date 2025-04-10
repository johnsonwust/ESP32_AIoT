"use strict";(self.webpackChunkesp_32_s_3_aiot_starter_kit=self.webpackChunkesp_32_s_3_aiot_starter_kit||[]).push([[544],{3978:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>d});const i=JSON.parse('{"id":"example/advanced/bmi270-code","title":"bmi270-code","description":"","source":"@site/docs/example/advanced/bmi270-code.mdx","sourceDirName":"example/advanced","slug":"/example/advanced/bmi270-code","permalink":"/docs/example/advanced/bmi270-code","draft":false,"unlisted":false,"editUrl":"https://github.com/johnsonwust/ESP32_AIoT/tree/gh-pages/docs/example/advanced/bmi270-code.mdx","tags":[],"version":"current","frontMatter":{},"sidebar":"exampleSidebar","previous":{"title":"\u539f\u7406","permalink":"/docs/example/intermediate/digital-mic-principle"},"next":{"title":"\u539f\u7406","permalink":"/docs/example/advanced/bmi270-principle"}}');var t=r(4848),a=r(8453);const o={},s=void 0,c={},d=[];function l(e){const n={code:"code",pre:"pre",...(0,a.R)(),...e.components};return(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-cpp",children:'\r\n#include <Wire.h>\r\n#include "SparkFun_BMI270_Arduino_Library.h"\r\n\r\n// \u5b9a\u4e49I2C\u5f15\u811a\r\n#define SDA_PIN 4\r\n#define SCL_PIN 5\r\n\r\n// Create a new sensor object\r\nBMI270 imu;\r\n\r\n// I2C address selection\r\nuint8_t i2cAddress = BMI2_I2C_PRIM_ADDR;  // 0x68\r\n//uint8_t i2cAddress = BMI2_I2C_SEC_ADDR; // 0x69\r\n\r\nvoid setup() {\r\n  // Start serial\r\n  Serial.begin(115200);\r\n  Wire.begin(SDA_PIN, SCL_PIN);  // \u521d\u59cb\u5316\u786c\u4ef6 I2C\r\n  Serial.println("BMI270 Example 1 - Basic Readings I2C");\r\n\r\n  // Initialize the I2C library\r\n  Wire.begin();\r\n\r\n  // Check if sensor is connected and initialize\r\n  // Address is optional (defaults to 0x68)\r\n  while (imu.beginI2C(i2cAddress) != BMI2_OK) {\r\n    // Not connected, inform user\r\n    Serial.println("Error: BMI270 not connected, check wiring and I2C address!");\r\n\r\n    // Wait a bit to see if connection is established\r\n    delay(1000);\r\n  }\r\n\r\n  Serial.println("BMI270 connected!");\r\n}\r\n\r\nvoid loop() {\r\n  // Get measurements from the sensor. This must be called before accessing\r\n  // the sensor data, otherwise it will never update\r\n  imu.getSensorData();\r\n\r\n  // Print acceleration data\r\n  Serial.print("Acceleration in g\'s");\r\n  Serial.print("\\t");\r\n  Serial.print("X: ");\r\n  Serial.print(imu.data.accelX, 3);\r\n  Serial.print("\\t");\r\n  Serial.print("Y: ");\r\n  Serial.print(imu.data.accelY, 3);\r\n  Serial.print("\\t");\r\n  Serial.print("Z: ");\r\n  Serial.print(imu.data.accelZ, 3);\r\n\r\n  Serial.print("\\t");\r\n\r\n  // Print rotation data\r\n  Serial.print("Rotation in deg/sec");\r\n  Serial.print("\\t");\r\n  Serial.print("X: ");\r\n  Serial.print(imu.data.gyroX, 3);\r\n  Serial.print("\\t");\r\n  Serial.print("Y: ");\r\n  Serial.print(imu.data.gyroY, 3);\r\n  Serial.print("\\t");\r\n  Serial.print("Z: ");\r\n  Serial.println(imu.data.gyroZ, 3);\r\n\r\n  // Print 50x per second\r\n  delay(20);\r\n}\r\n\n'})})}function p(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>o,x:()=>s});var i=r(6540);const t={},a=i.createContext(t);function o(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);