---
title: 3. 硬件准备
description: 连接ESP32开发板并构建电路
---

# 3. 硬件准备

请按照以下步骤将ESP32开发板连接到电脑。

如果你的项目需要其他外设组件，可以先搭建完整的电路。本示例中仅使用开发板自带的LED灯。

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


使用USB数据线，将ESP32-DevKitC开发板的**下载口**连接到电脑。（请注意，部分开发板可能同时具备下载和串口功能，请确认连接正确的接口。）

<img
  src={require('./img/esp32-s3-yd_flash_zl.jpg').default}
  alt="连接ESP32-DevKitC开发板到电脑" width="960"
/>

<img
  src={require('./img/esp32s3-prototype.jpg').default}
  alt="连接ESP32-DevKitC开发板到电脑" width="960"
/>




<!-- 

---
title: 3. Hardware preparation
description: Connect your board and build the circuit.
---

# 3. Hardware preparation

Follow the steps below to connect the board to your computer. 

If your project needs other components, you could build the circuit first. And in this case, only the onboard LED is used.


import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
  defaultValue="micro"
  values={[
    { label: 'SwiftIO Micro', value: 'micro', },
    { label: 'SwiftIO board', value: 'swiftio', },
  ]
}>

<TabItem value="micro">

Connect the board to your computer through the port using a USB cable.

<img
  src={require('./img/microConnectComputer.png').default}
  alt="Connect board to computer" width="960"
/>

</TabItem>

<TabItem value="swiftio">

1. Insert an **SD card** into the slot.

<img
  src={require('./img/SDcard.png').default}
  alt="Insert SD card" width="480"
/>


2. Connect the board to your computer through the **Download port** using a USB cable. SwiftIO board has both download and serial ports, so make sure you connect the correct port.

<img
  src={require('./img/swiftIOConnectComputer.png').default}
  alt="Connect board to computer" width="960"
/>


</TabItem>
</Tabs>





 -->
