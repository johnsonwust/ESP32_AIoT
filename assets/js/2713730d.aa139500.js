"use strict";(self.webpackChunkesp_32_s_3_aiot_starter_kit=self.webpackChunkesp_32_s_3_aiot_starter_kit||[]).push([[9960],{3799:(n,e,r)=>{r.r(e),r.d(e,{assets:()=>_,contentTitle:()=>l,default:()=>c,frontMatter:()=>s,metadata:()=>i,toc:()=>o});const i=JSON.parse('{"id":"example/advanced/microsd-code","title":"microsd-code","description":"","source":"@site/docs/example/advanced/microsd-code.mdx","sourceDirName":"example/advanced","slug":"/example/advanced/microsd-code","permalink":"/docs/example/advanced/microsd-code","draft":false,"unlisted":false,"editUrl":"https://github.com/johnsonwust/ESP32_AIoT/tree/gh-pages/docs/example/advanced/microsd-code.mdx","tags":[],"version":"current","frontMatter":{},"sidebar":"exampleSidebar","previous":{"title":"\u539f\u7406","permalink":"/docs/example/advanced/audio-principle"},"next":{"title":"\u539f\u7406","permalink":"/docs/example/advanced/microsd-principle"}}');var t=r(4848),a=r(8453);const s={},l=void 0,_={},o=[];function d(n){const e={code:"code",pre:"pre",...(0,a.R)(),...n.components};return(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-cpp",children:'\r\n#include "Arduino.h"\r\n#include "driver/i2s.h"\r\n#include "FS.h"\r\n#include "SD.h"\r\n#include "SPI.h"\r\n\r\n// \ud83c\udfa4 PDM \u9ea6\u514b\u98ce\uff08I2S\uff09\r\n#define I2S_WS   42  // WS / LRCK (\u53ef\u66f4\u6539)\r\n#define I2S_BCLK 41  // BCLK (\u53ef\u66f4\u6539)\r\n#define I2S_DIN  2  // DIN (\u53ef\u66f4\u6539)\r\n\r\n// \ud83d\udcbe SD \u5361\uff08SPI\uff09\r\n#define SD_CS    46   // CS (\u53ef\u66f4\u6539)\r\n#define SD_SCK   3  // SCK\r\n#define SD_MOSI  14  // MOSI\r\n#define SD_MISO  35  // MISO\r\n\r\n// \u521b\u5efa SPI \u5b9e\u4f8b\r\nSPIClass spi = SPIClass(FSPI);  // FSPI \u662f ESP32-S3 \u4e0a\u7684\u4e3b SPI \u7aef\u53e3\r\n\r\n#define SAMPLE_RATE 16000  // \u91c7\u6837\u7387 (Hz)\r\n#define BUFFER_SIZE 512    // \u91c7\u6837\u7f13\u51b2\u533a\u5927\u5c0f\r\n#define RECORD_TIME 10     // \u5f55\u97f3\u65f6\u957f (\u79d2)\r\n\r\nFile audioFile;\r\nint16_t sampleBuffer[BUFFER_SIZE];\r\n\r\nvoid setup() {\r\n    Serial.begin(115200);\r\n    Serial.println("\ud83c\udfa4 MSM261S4030H0R PDM \u5f55\u97f3\u6d4b\u8bd5...");\r\n\r\n    // \u521d\u59cb\u5316 I2S\r\n    i2s_config_t i2s_config = {\r\n        .mode = (i2s_mode_t)(I2S_MODE_MASTER | I2S_MODE_RX), \r\n        .sample_rate = SAMPLE_RATE,\r\n        .bits_per_sample = I2S_BITS_PER_SAMPLE_16BIT, \r\n        .channel_format = I2S_CHANNEL_FMT_ONLY_LEFT, \r\n        .communication_format = I2S_COMM_FORMAT_STAND_I2S,\r\n        .intr_alloc_flags = ESP_INTR_FLAG_LEVEL1, \r\n        .dma_buf_count = 8,\r\n        .dma_buf_len = BUFFER_SIZE\r\n    };\r\n\r\n    i2s_pin_config_t pin_config = {\r\n        .bck_io_num = I2S_BCLK,\r\n        .ws_io_num = I2S_WS,\r\n        .data_out_num = I2S_PIN_NO_CHANGE,\r\n        .data_in_num = I2S_DIN\r\n    };\r\n\r\n    i2s_driver_install(I2S_NUM_0, &i2s_config, 0, NULL);\r\n    i2s_set_pin(I2S_NUM_0, &pin_config);\r\n\r\n    // \u521d\u59cb\u5316 SD \u5361\r\n   SPIClass spi = SPIClass(FSPI);\r\n   spi.begin(SD_SCK, SD_MISO, SD_MOSI, SD_CS);\r\n   if (!SD.begin(SD_CS, spi, 1000000)) {  // \u4f7f\u7528\u81ea\u5b9a\u4e49\u7684 SPI \u603b\u7ebf\r\n        Serial.println("\u274c \u65e0\u6cd5\u6302\u8f7d SD \u5361\uff01");\r\n        return;\r\n    }\r\n    Serial.println("\u2705 SD \u5361\u5df2\u6302\u8f7d\uff01");\r\n    \r\n    // \u5f00\u59cb\u5f55\u97f3\r\n    recordAudio("/record.wav", RECORD_TIME);\r\n}\r\n\r\nvoid loop() {}\r\n\r\nvoid recordAudio(const char *filename, int duration) {\r\n    Serial.printf("\ud83c\udf99 \u5f00\u59cb\u5f55\u97f3: %s (%d \u79d2)...\\n", filename, duration);\r\n    audioFile = SD.open(filename, FILE_WRITE);\r\n    if (!audioFile) {\r\n        Serial.println("\u274c \u65e0\u6cd5\u521b\u5efa\u6587\u4ef6\uff01");\r\n        return;\r\n    }\r\n\r\n    // \u5199\u5165 WAV \u5934\r\n    writeWavHeader(audioFile, SAMPLE_RATE, 16, 1);\r\n\r\n    size_t bytesRead;\r\n    int totalSamples = SAMPLE_RATE * duration;\r\n    int samplesWritten = 0;\r\n\r\n    while (samplesWritten < totalSamples) {\r\n        i2s_read(I2S_NUM_0, sampleBuffer, sizeof(sampleBuffer), &bytesRead, portMAX_DELAY);\r\n        audioFile.write((uint8_t *)sampleBuffer, bytesRead);\r\n        samplesWritten += (bytesRead / 2);\r\n        Serial.printf("\ud83d\udcc0 \u5df2\u5f55\u5236: %d / %d \u91c7\u6837\u70b9\\n", samplesWritten, totalSamples);\r\n    }\r\n\r\n    // \u7ed3\u675f\u5f55\u97f3\uff0c\u66f4\u65b0 WAV \u5934\r\n    updateWavHeader(audioFile);\r\n    audioFile.close();\r\n    Serial.println("\u2705 \u5f55\u97f3\u5b8c\u6210\uff01");\r\n}\r\n\r\nvoid writeWavHeader(File &file, uint32_t sampleRate, uint16_t bitDepth, uint16_t channels) {\r\n    uint32_t fileSize = 44;  // \u5148\u5199\u5165 WAV \u5934\u90e8\uff0c\u540e\u7eed\u518d\u66f4\u65b0\u6587\u4ef6\u5927\u5c0f\r\n    uint32_t dataSize = 0;   // \u6570\u636e\u533a\u5927\u5c0f\r\n\r\n    file.seek(0);\r\n    file.write((const uint8_t *)"RIFF", 4);\r\n    file.write((uint8_t *)&fileSize, 4);\r\n    file.write((const uint8_t *)"WAVE", 4);\r\n    file.write((const uint8_t *)"fmt ", 4);\r\n    uint32_t subchunk1Size = 16;\r\n    file.write((uint8_t *)&subchunk1Size, 4);\r\n    uint16_t audioFormat = 1;\r\n    file.write((uint8_t *)&audioFormat, 2);\r\n    file.write((uint8_t *)&channels, 2);\r\n    file.write((uint8_t *)&sampleRate, 4);\r\n    uint32_t byteRate = sampleRate * channels * (bitDepth / 8);\r\n    file.write((uint8_t *)&byteRate, 4);\r\n    uint16_t blockAlign = channels * (bitDepth / 8);\r\n    file.write((uint8_t *)&blockAlign, 2);\r\n    file.write((uint8_t *)&bitDepth, 2);\r\n    file.write((const uint8_t *)"data", 4);\r\n    file.write((uint8_t *)&dataSize, 4);\r\n}\r\n\r\n\r\nvoid updateWavHeader(File &file) {\r\n    uint32_t fileSize = file.size() - 8;\r\n    uint32_t dataSize = file.size() - 44;\r\n\r\n    file.seek(4);\r\n    file.write((uint8_t *)&fileSize, 4);\r\n    file.seek(40);\r\n    file.write((uint8_t *)&dataSize, 4);\r\n}\r\n\n'})})}function c(n={}){const{wrapper:e}={...(0,a.R)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(d,{...n})}):d(n)}},8453:(n,e,r)=>{r.d(e,{R:()=>s,x:()=>l});var i=r(6540);const t={},a=i.createContext(t);function s(n){const e=i.useContext(a);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:s(n.components),i.createElement(a.Provider,{value:e},n.children)}}}]);