```cpp

#include "Arduino.h"
#include "driver/i2s.h"
#include "FS.h"
#include "SD.h"
#include "SPI.h"

// 🎤 PDM 麦克风（I2S）
#define I2S_WS   42  // WS / LRCK (可更改)
#define I2S_BCLK 41  // BCLK (可更改)
#define I2S_DIN  2  // DIN (可更改)

// 💾 SD 卡（SPI）
#define SD_CS    46   // CS (可更改)
#define SD_SCK   3  // SCK
#define SD_MOSI  14  // MOSI
#define SD_MISO  35  // MISO

// 创建 SPI 实例
SPIClass spi = SPIClass(FSPI);  // FSPI 是 ESP32-S3 上的主 SPI 端口

#define SAMPLE_RATE 16000  // 采样率 (Hz)
#define BUFFER_SIZE 512    // 采样缓冲区大小
#define RECORD_TIME 10     // 录音时长 (秒)

File audioFile;
int16_t sampleBuffer[BUFFER_SIZE];

void setup() {
    Serial.begin(115200);
    Serial.println("🎤 MSM261S4030H0R PDM 录音测试...");

    // 初始化 I2S
    i2s_config_t i2s_config = {
        .mode = (i2s_mode_t)(I2S_MODE_MASTER | I2S_MODE_RX), 
        .sample_rate = SAMPLE_RATE,
        .bits_per_sample = I2S_BITS_PER_SAMPLE_16BIT, 
        .channel_format = I2S_CHANNEL_FMT_ONLY_LEFT, 
        .communication_format = I2S_COMM_FORMAT_STAND_I2S,
        .intr_alloc_flags = ESP_INTR_FLAG_LEVEL1, 
        .dma_buf_count = 8,
        .dma_buf_len = BUFFER_SIZE
    };

    i2s_pin_config_t pin_config = {
        .bck_io_num = I2S_BCLK,
        .ws_io_num = I2S_WS,
        .data_out_num = I2S_PIN_NO_CHANGE,
        .data_in_num = I2S_DIN
    };

    i2s_driver_install(I2S_NUM_0, &i2s_config, 0, NULL);
    i2s_set_pin(I2S_NUM_0, &pin_config);

    // 初始化 SD 卡
   SPIClass spi = SPIClass(FSPI);
   spi.begin(SD_SCK, SD_MISO, SD_MOSI, SD_CS);
   if (!SD.begin(SD_CS, spi, 1000000)) {  // 使用自定义的 SPI 总线
        Serial.println("❌ 无法挂载 SD 卡！");
        return;
    }
    Serial.println("✅ SD 卡已挂载！");
    
    // 开始录音
    recordAudio("/record.wav", RECORD_TIME);
}

void loop() {}

void recordAudio(const char *filename, int duration) {
    Serial.printf("🎙 开始录音: %s (%d 秒)...\n", filename, duration);
    audioFile = SD.open(filename, FILE_WRITE);
    if (!audioFile) {
        Serial.println("❌ 无法创建文件！");
        return;
    }

    // 写入 WAV 头
    writeWavHeader(audioFile, SAMPLE_RATE, 16, 1);

    size_t bytesRead;
    int totalSamples = SAMPLE_RATE * duration;
    int samplesWritten = 0;

    while (samplesWritten < totalSamples) {
        i2s_read(I2S_NUM_0, sampleBuffer, sizeof(sampleBuffer), &bytesRead, portMAX_DELAY);
        audioFile.write((uint8_t *)sampleBuffer, bytesRead);
        samplesWritten += (bytesRead / 2);
        Serial.printf("📀 已录制: %d / %d 采样点\n", samplesWritten, totalSamples);
    }

    // 结束录音，更新 WAV 头
    updateWavHeader(audioFile);
    audioFile.close();
    Serial.println("✅ 录音完成！");
}

void writeWavHeader(File &file, uint32_t sampleRate, uint16_t bitDepth, uint16_t channels) {
    uint32_t fileSize = 44;  // 先写入 WAV 头部，后续再更新文件大小
    uint32_t dataSize = 0;   // 数据区大小

    file.seek(0);
    file.write((const uint8_t *)"RIFF", 4);
    file.write((uint8_t *)&fileSize, 4);
    file.write((const uint8_t *)"WAVE", 4);
    file.write((const uint8_t *)"fmt ", 4);
    uint32_t subchunk1Size = 16;
    file.write((uint8_t *)&subchunk1Size, 4);
    uint16_t audioFormat = 1;
    file.write((uint8_t *)&audioFormat, 2);
    file.write((uint8_t *)&channels, 2);
    file.write((uint8_t *)&sampleRate, 4);
    uint32_t byteRate = sampleRate * channels * (bitDepth / 8);
    file.write((uint8_t *)&byteRate, 4);
    uint16_t blockAlign = channels * (bitDepth / 8);
    file.write((uint8_t *)&blockAlign, 2);
    file.write((uint8_t *)&bitDepth, 2);
    file.write((const uint8_t *)"data", 4);
    file.write((uint8_t *)&dataSize, 4);
}


void updateWavHeader(File &file) {
    uint32_t fileSize = file.size() - 8;
    uint32_t dataSize = file.size() - 44;

    file.seek(4);
    file.write((uint8_t *)&fileSize, 4);
    file.seek(40);
    file.write((uint8_t *)&dataSize, 4);
}

```