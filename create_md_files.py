import os

# 定义动手做项目的路径结构
structure = {
    "arduino": ["smoke-detection", "magnet-switch", "dimmer", "sound-generation", "servo-control"],
    "oop": ["button-short-long-press", "switch-dimmer"],
    "interrupts": ["hardware-interrupts", "motion-detector", "timer-led-blink"],
    "oled": ["u8g2-library", "dynamic-display", "chinese-characters"],
    "wifi": ["wifi-connection", "wifi-access-point", "http-server", "dynamic-light-controller"],
    "network-data": ["json-weather", "oled-startup-image"],
    "charts": ["realtime-dynamic-chart"],
    "websocket": ["json-data-transfer"],
    "rtc": ["gps-data-parser"],
    "spiffs": ["file-read-write", "dht11-logging"],
    "bluetooth": ["ble-uart", "battery-notification"],
    "freertos": ["oled-task", "semaphore-basketball"],
    "mesh": ["sensor-network"],
    "appendix": ["python-asyncio", "ble-programming"],
}

# 定义基础路径
base_path = "./docs"

# 自动创建目录和文件
def create_files(base_path, structure):
    for folder, files in structure.items():
        folder_path = os.path.join(base_path, folder)
        os.makedirs(folder_path, exist_ok=True)
        for file in files:
            file_path = os.path.join(folder_path, f"{file}.md")
            if not os.path.exists(file_path):
                with open(file_path, "w", encoding="utf-8") as f:
                    f.write(f"---\n")
                    f.write(f"id: {file}\n")
                    f.write(f"title: 动手做：{file.replace('-', ' ').title()}\n")
                    f.write(f"---\n\n")
                    f.write(f"# 动手做：{file.replace('-', ' ').title()}\n\n")
                    f.write("详细实验步骤待补充。\n")
                print(f"Created: {file_path}")
            else:
                print(f"Already exists: {file_path}")

# 执行生成
create_files(base_path, structure)
