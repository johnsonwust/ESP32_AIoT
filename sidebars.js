// @ts-check

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.

 @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */
 const sidebars = {

  startSidebar: [
    {
      type: 'category',
      label: '项目概览',
      items: [
        {
          type: 'doc',
          id: 'start/intro',          // 对应 docs/start/intro.md
          label: '项目简介',
        },
        {
          type: 'doc',
          id: 'start/installation',   // 对应 docs/start/installation.md
          label: '安装说明',
        },
        {
          type: 'doc',
          id: 'start/architecture',   // 对应 docs/start/architecture.md
          label: '系统架构',
        },
        {
          type: 'doc',
          id: 'start/background',     // 对应 docs/start/background.md
          label: '背景介绍',
        },
        {
          type: 'doc',
          id: 'start/faq',            // 对应 docs/start/faq.mdx
          label: '常见问题',
        },
      ],
    },
    {
      type: 'category',
      label: '快速上手',
      items: [
        {
          type: 'doc',
          id: 'start/getting-started/overview',  // 对应 docs/start/getting-started/overview.mdx
          label: '上手概览',
        },
        {
          type: 'doc',
          id: 'start/getting-started/software-prerequisite',  // 对应 docs/start/getting-started/software-prerequisite.mdx
          label: '软件前置要求',
        },
        {
          type: 'doc',
          id: 'start/getting-started/create-project',  // 对应 docs/start/getting-started/create-project.mdx
          label: '创建项目',
        },
        {
          type: 'doc',
          id: 'start/getting-started/hardware-preparation',  // 对应 docs/start/getting-started/hardware-preparation.md
          label: '硬件准备',
        },
        {
          type: 'doc',
          id: 'start/getting-started/download',  // 对应 docs/start/getting-started/download.md
          label: '文件下载',
        },
      ],
    },
    {
      type: 'category',
      label: '高级进阶',
      items: [
        {
          type: 'doc',
          id: 'start/advanced/overview',  // 对应 docs/start/advanced/overview.mdx
          label: '进阶概览',
        },
        {
          type: 'doc',
          id: 'start/advanced/run-example',  // 对应 docs/start/advanced/run-example.mdx
          label: '运行示例',
        },
        {
          type: 'doc',
          id: 'start/advanced/serial-debug',  // 对应 docs/start/advanced/serial-debug.mdx
          label: '串口调试',
        },
        {
          type: 'doc',
          id: 'start/advanced/download-resources',  // 对应 docs/start/advanced/download-resources.mdx
          label: '下载资源',
        },
        {
          type: 'doc',
          id: 'start/advanced/library-overview',  // 对应 docs/start/advanced/library-overview.mdx
          label: '库概览',
        },
        {
          type: 'doc',
          id: 'start/advanced/use-library',  // 对应 docs/start/advanced/use-library.mdx
          label: '使用库',
        },
        {
          type: 'doc',
          id: 'start/advanced/useful-library',  // 对应 docs/start/advanced/useful-library.mdx
          label: '实用库',
        },
      ],
    },
  ],


  // 有趣项目侧边栏（请根据实际文档文件更新 doc id 及标签）
  exampleSidebar: [
    {
      type: 'category',
      label: '初级模块',
      items: [
        {
          type: 'category',
          label: 'LED',
          items: [
            { type: 'doc', id: 'example/easy/led-code', label: '代码' },
            { type: 'doc', id: 'example/easy/led-principle', label: '原理' },
          ],
        },
        {
          type: 'category',
          label: '按钮',
          items: [
            { type: 'doc', id: 'example/easy/button-code', label: '代码' },
            { type: 'doc', id: 'example/easy/button-principle', label: '原理' },
          ],
        },
        {
          type: 'category',
          label: '蜂鸣器',
          items: [
            { type: 'doc', id: 'example/easy/buzzer-code', label: '代码' },
            { type: 'doc', id: 'example/easy/buzzer-principle', label: '原理' },
          ],
        },
        {
          type: 'category',
          label: 'PIR 传感器',
          items: [
            { type: 'doc', id: 'example/easy/pir-code', label: '代码' },
            { type: 'doc', id: 'example/easy/pir-principle', label: '原理' },
          ],
        },
        {
          type: 'category',
          label: '电位器',
          items: [
            { type: 'doc', id: 'example/easy/potentiometer-code', label: '代码' },
            { type: 'doc', id: 'example/easy/potentiometer-principle', label: '原理' },
          ],
        },
        {
          type: 'category',
          label: 'DHT11 温湿度传感器',
          items: [
            { type: 'doc', id: 'example/easy/dht11-code', label: '代码' },
            { type: 'doc', id: 'example/easy/dht11-principle', label: '原理' },
          ],
        },
        {
          type: 'category',
          label: '光线传感器',
          items: [
            { type: 'doc', id: 'example/easy/light-sensor-code', label: '代码' },
            { type: 'doc', id: 'example/easy/light-sensor-principle', label: '原理' },
          ],
        },
        {
          type: 'category',
          label: '热感检测模块',
          items: [
            { type: 'doc', id: 'example/easy/thermal-code', label: '代码' },
            { type: 'doc', id: 'example/easy/thermal-principle', label: '原理' },
          ],
        },
      ],
    },
    {
      type: 'category',
      label: '中级模块',
      items: [
        {
          type: 'category',
          label: 'Joystick',
          items: [
            { type: 'doc', id: 'example/intermediate/joystick-code', label: '代码' },
            { type: 'doc', id: 'example/intermediate/joystick-principle', label: '原理' },
          ],
        },
        {
          type: 'category',
          label: '0.96寸文本及图形显示',
          items: [
            { type: 'doc', id: 'example/intermediate/oled96-code', label: '代码' },
            { type: 'doc', id: 'example/intermediate/oled96-principle', label: '原理' },
          ],
        },
        {
          type: 'category',
          label: 'MQ2 烟雾检测',
          items: [
            { type: 'doc', id: 'example/intermediate/mq2-code', label: '代码' },
            { type: 'doc', id: 'example/intermediate/mq2-principle', label: '原理' },
          ],
        },
        {
          type: 'category',
          label: '旋转编码器',
          items: [
            { type: 'doc', id: 'example/intermediate/encoder-code', label: '代码' },
            { type: 'doc', id: 'example/intermediate/encoder-principle', label: '原理' },
          ],
        },
        {
          type: 'category',
          label: 'TB6612 电机驱动',
          items: [
            { type: 'doc', id: 'example/intermediate/tb6612-code', label: '代码' },
            { type: 'doc', id: 'example/intermediate/tb6612-principle', label: '原理' },
          ],
        },
        {
          type: 'category',
          label: 'INA219 电流检测',
          items: [
            { type: 'doc', id: 'example/intermediate/ina219-code', label: '代码' },
            { type: 'doc', id: 'example/intermediate/ina219-principle', label: '原理' },
          ],
        },
        {
          type: 'category',
          label: 'VL53L0X 激光测距',
          items: [
            { type: 'doc', id: 'example/intermediate/vl53l0x-code', label: '代码' },
            { type: 'doc', id: 'example/intermediate/vl53l0x-principle', label: '原理' },
          ],
        },
        {
          type: 'category',
          label: '数字麦克风',
          items: [
            { type: 'doc', id: 'example/intermediate/digital-mic-code', label: '代码' },
            { type: 'doc', id: 'example/intermediate/digital-mic-principle', label: '原理' },
          ],
        },
      ],
    },
    {
      type: 'category',
      label: '高级模块',
      items: [
        {
          type: 'category',
          label: 'BMI270 6DOF 传感器',
          items: [
            { type: 'doc', id: 'example/advanced/bmi270-code', label: '代码' },
            { type: 'doc', id: 'example/advanced/bmi270-principle', label: '原理' },
          ],
        },
        {
          type: 'category',
          label: '1.2寸 240×240 LCD 显示屏',
          items: [
            { type: 'doc', id: 'example/advanced/lcd1224-code', label: '代码' },
            { type: 'doc', id: 'example/advanced/lcd1224-principle', label: '原理' },
          ],
        },
        {
          type: 'category',
          label: '音频放大器与扬声器',
          items: [
            { type: 'doc', id: 'example/advanced/audio-code', label: '代码' },
            { type: 'doc', id: 'example/advanced/audio-principle', label: '原理' },
          ],
        },
        {
          type: 'category',
          label: 'MicroSD 卡槽',
          items: [
            { type: 'doc', id: 'example/advanced/microsd-code', label: '代码' },
            { type: 'doc', id: 'example/advanced/microsd-principle', label: '原理' },
          ],
        },
      ],
    },
  ],


  // Sidebar with "动手做" projects only
  projectSidebar: [
    {
      type: 'category',
      label: 'ESP32开发板与Arduino应用',
      items: [
        { type: 'doc', id: 'project/arduino/smoke-detection', label: '动手做：检测烟雾浓度' },
        { type: 'doc', id: 'project/arduino/magnet-switch', label: '动手做：磁铁控制开关' },
        { type: 'doc', id: 'project/arduino/dimmer', label: '动手做：调光器' },
        { type: 'doc', id: 'project/arduino/sound-generation', label: '动手做：声音生成' },
        { type: 'doc', id: 'project/arduino/servo-control', label: '动手做：伺服控制' },
      ],
    },
    {
      type: 'category',
      label: '面向对象程序设计',
      items: [
        { type: 'doc', id: 'project/oop/button-short-long-press', label: '动手做：按键短按与长按' },
        { type: 'doc', id: 'project/oop/switch-dimmer', label: '动手做：开关调光器' },
      ],
    },
    {
      type: 'category',
      label: '中断处理与内存管理',
      items: [
        { type: 'doc', id: 'project/interrupts/hardware-interrupts', label: '动手做：硬件中断' },
        { type: 'doc', id: 'project/interrupts/motion-detector', label: '动手做：运动检测器' },
        { type: 'doc', id: 'project/interrupts/timer-led-blink', label: '动手做：定时器控制LED闪烁' },
      ],
    },
    {
      type: 'category',
      label: 'OLED显示器与Python工具',
      items: [
        { type: 'doc', id: 'project/oled/u8g2-library', label: '动手做：使用U8g2库控制OLED显示' },
        { type: 'doc', id: 'project/oled/dynamic-display', label: '动手做：动态显示' },
        { type: 'doc', id: 'project/oled/chinese-characters', label: '动手做：显示中文字符' },
      ],
    },
    {
      type: 'category',
      label: 'Wi-Fi无线物联网控制',
      items: [
        { type: 'doc', id: 'project/wifi/wifi-connection', label: '动手做：Wi-Fi连接' },
        { type: 'doc', id: 'project/wifi/wifi-access-point', label: '动手做：Wi-Fi接入点' },
        { type: 'doc', id: 'project/wifi/http-server', label: '动手做：HTTP服务器' },
        { type: 'doc', id: 'project/wifi/dynamic-light-controller', label: '动手做：动态调光器' },
      ],
    },
    {
      type: 'category',
      label: '网络数据与Python图像转换',
      items: [
        { type: 'doc', id: 'project/network-data/json-weather', label: '动手做：JSON天气数据读取' },
        { type: 'doc', id: 'project/network-data/oled-startup-image', label: '动手做：OLED启动画面' },
      ],
    },
    {
      type: 'category',
      label: '物联网动态图表',
      items: [
        { type: 'doc', id: 'project/charts/realtime-dynamic-chart', label: '动手做：实时动态图表' },
      ],
    },
    {
      type: 'category',
      label: 'WebSocket实时连接',
      items: [
        { type: 'doc', id: 'project/websocket/json-data-transfer', label: '动手做：JSON数据传输' },
      ],
    },
    {
      type: 'category',
      label: 'RTC时钟与GPS时间同步',
      items: [
        { type: 'doc', id: 'project/rtc/gps-data-parser', label: '动手做：GPS数据解析' },
      ],
    },
    {
      type: 'category',
      label: 'SPIFFS文件系统与存储',
      items: [
        { type: 'doc', id: 'project/spiffs/file-read-write', label: '动手做：文件读写' },
        { type: 'doc', id: 'project/spiffs/dht11-logging', label: '动手做：DHT11数据记录' },
      ],
    },
    {
      type: 'category',
      label: '蓝牙与BLE应用',
      items: [
        { type: 'doc', id: 'project/bluetooth/ble-uart', label: '动手做：BLE UART通信' },
        { type: 'doc', id: 'project/bluetooth/battery-notification', label: '动手做：电量通知' },
      ],
    },
    {
      type: 'category',
      label: 'FreeRTOS实时系统',
      items: [
        { type: 'doc', id: 'project/freertos/oled-task', label: '动手做：OLED任务管理' },
        { type: 'doc', id: 'project/freertos/semaphore-basketball', label: '动手做：信号量投篮机' },
      ],
    },
    {
      type: 'category',
      label: 'Mesh无线网络',
      items: [
        { type: 'doc', id: 'project/mesh/sensor-network', label: '动手做：传感器网络' },
      ],
    },
    {
      type: 'category',
      label: '附录A：Python与BLE编程',
      items: [
        { type: 'doc', id: 'project/appendix/python-asyncio', label: '附录A：Python异步IO' },
        { type: 'doc', id: 'project/appendix/ble-programming', label: '附录A：BLE蓝牙编程' },
      ],
    },
  ],

  // 硬件规格侧边栏（请根据实际文档文件更新 doc id 及标签）
  hardwareSidebar: [
    {
      type: 'category',
      label: '硬件规格',
      items: [
        { type: 'doc', id: 'hardware/intro', label: '硬件规格说明1' },
        //{ type: 'doc', id: 'hardware-specs/spec2', label: '硬件规格说明2' },
        // 添加更多规格说明...
      ],
    },
  ],


};

export default sidebars;
