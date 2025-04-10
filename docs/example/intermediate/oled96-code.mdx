
# ESP32 OLED 中文显示示例程序

## 程序概述
该程序使用 U8g2 库控制 ESP32 和 OLED 显示屏，通过 I2C 连接来显示中文字符。程序中分别展示了小字体、中字体和大字体的中文文本。

## 硬件连接
- **SDA** (数据线)：连接到 ESP32 的 GPIO4
- **SCL** (时钟线)：连接到 ESP32 的 GPIO5
- **OLED 显示屏 I2C 地址**：0x3C

### 原理
程序通过 `U8G2_SSD1306_128X64_NONAME_F_SW_I2C` 类控制 128x64 的 OLED 屏幕，并利用 I2C 通信协议与屏幕进行数据交换。使用 `U8g2` 库的函数来设置字体和在不同位置显示中文文本。

## 主要函数说明

### `u8g2.begin()`
初始化 OLED 显示屏，确保通信准备好。

### `u8g2.setI2CAddress(0x3C * 2)`
设置 OLED 显示屏的 I2C 地址，通常为 0x3C 或 0x3D。

### `u8g2.setFont()`
选择不同的字体以显示文本。这里使用了支持中文的字体文件，如 `u8g2_font_wqy12_t_gb2312`。

### `u8g2.setCursor(x, y)`
设置光标的位置，用于指定文本显示的起始位置。

### `u8g2.print()`
将文本输出到当前光标位置。

### `u8g2.firstPage()` 和 `u8g2.nextPage()`
这两个函数用于分页显示，确保文本显示在 OLED 屏幕上的不同页面之间。

## 如何运行

1. 将 OLED 显示屏连接到 ESP32，确保 SDA 和 SCL 接口连接正确。
2. 在 Arduino IDE 中编写和上传程序。
3. 启动串口监视器，确保程序运行并能够正确显示中文文本。

## 注意事项

- 确保使用的字体库支持中文字符。
- 如果需要更大字体，可以自行生成或者查找其他支持更大字体的库。


# ESP32 OLED 中文显示示例程序

## 程序概述
该程序使用 U8g2 库控制 ESP32 和 OLED 显示屏，通过 I2C 连接来显示中文字符。程序中分别展示了小字体、中字体和大字体的中文文本。

## 硬件连接
- **SDA** (数据线)：连接到 ESP32 的 GPIO4
- **SCL** (时钟线)：连接到 ESP32 的 GPIO5
- **OLED 显示屏 I2C 地址**：0x3C

### 原理
程序通过 `U8G2_SSD1306_128X64_NONAME_F_SW_I2C` 类控制 128x64 的 OLED 屏幕，并利用 I2C 通信协议与屏幕进行数据交换。使用 `U8g2` 库的函数来设置字体和在不同位置显示中文文本。

## 程序代码
以下是完整的程序代码，用于在 OLED 显示屏上显示三行中文文本：

```cpp
#include <U8g2lib.h>
#include <Wire.h>

// 使用软件 I2C 构造函数，指定 SCL 为 GPIO5，SDA 为 GPIO4，复位引脚未使用
U8G2_SSD1306_128X64_NONAME_F_SW_I2C u8g2(U8G2_R0, 5, 4, U8X8_PIN_NONE);

void setup(){
  Serial.begin(115200);
  
  // 设置OLED显示屏的I2C地址（0x3C左移一位）
  u8g2.setI2CAddress(0x3C * 2);
  
  u8g2.begin();
  u8g2.enableUTF8Print();  // 启用UTF8支持
}

void loop(){
  u8g2.firstPage();
  do {
    // 第一行：小字体（支持中文）
    u8g2.setFont(u8g2_font_wqy12_t_gb2312);
    u8g2.setFontPosTop();
    u8g2.setCursor(0, 4);
    u8g2.print("第一行: 小字");

    // 第二行：中字体（支持中文）
    u8g2.setFont(u8g2_font_wqy14_t_gb2312);
    u8g2.setCursor(0, 24);
    u8g2.print("第二行: 中字");

    // 第三行：暂时使用 u8g2_font_wqy16_t_gb2312 作为大字体的替代，
    // 如果需要更大字体，则需自行生成或查找支持更大字号的中文字体
    u8g2.setFont(u8g2_font_wqy16_t_gb2312);
    u8g2.setCursor(0, 44);
    u8g2.print("第三行: 大字");
    
  } while(u8g2.nextPage());
  
  delay(2000);
}

```