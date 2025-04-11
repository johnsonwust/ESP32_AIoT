import useBaseUrl from '@docusaurus/useBaseUrl';

import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import styles from './index.module.css';

// 首页头部：标题、标语及快速进入按钮
function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">ESP32 S3 开发板</h1>
        <p className="hero__subtitle">
            AIoT紧跟时代 · 全面一体化 · 接入大模型 · 高效原型验证 · 视频音频输入输出交互
        </p>
        <div className={styles.buttons}>
          <Link className="button button--secondary button--lg" to="/docs/intro">
            了解更多详情
          </Link>
        </div>
      </div>
    </header>
  );
} 

// 产品概述：产品背景、整体介绍以及研发调研和竞品分析得出的改进方向
function ProductOverview() {
  const baseUrl = useBaseUrl('/img/ESP32-AIoT.png'); // 定义图片路径
  const photoUrl = useBaseUrl('/img/ESP32-AIoT-photo.jpg'); // 第二张图片路径

  return (
    <section className={styles.productSection}>
      <div className="container">
        <h2>产品概述</h2>
        <img
            src={baseUrl}
            alt="ESP32-AIoT"
            style={{ width: '100%', maxWidth: '1200px', marginBottom: '20px' }}
          />
          <p></p>
          <img
            src={photoUrl}
            alt="ESP32-AIoT Photo"
            style={{ width: '100%', maxWidth: '1200px' }}
          />
        <p>
          基于最新 ESP32 S3 芯片，本开发板采用高度集成化设计，将众多常用模块融合在一块电路板上，适配 2.54mm 排针杜邦线与 PH2.0 防反端子，确保可靠接线。经过大量数据调研和对比竞品后，我们发现市面上多数开发板仅支持部分功能，需要额外添购外围模块，而本产品实现了一站式解决方案，极大降低了开发难度和成本。
        </p>
        <p>
          无论您是初学者还是资深嵌入式工程师，都能在快速原型设计中体验到我们的核心价值——可靠、便捷以及高性价比。
        </p>
      </div>
    </section>
  );
}

// 产品优势：从设计理念、集成度、开发效率、扩展性、成本控制等多个角度详细阐述产品优势
function ProductAdvantages() {
  return (
    <section className={styles.productSection}>
      <div className="container">
        <h2>产品优势</h2>
        <ul>
          <li>
            <strong>极致集成：</strong>内置超过20种功能模块，实现从运动控制、环境监测到音频处理全方位支持，避免繁杂的外部连接。
          </li>
          <li>
            <strong>接线便捷：</strong>标准化 2.54mm 排针和 PH2.0 防反端子设计，有效防止误接问题，确保系统稳定运行。
          </li>
          <li>
            <strong>研发效率提升：</strong>内置模块预先调试，减少外部硬件采购及电路搭建时间，可缩短研发周期达50%以上。
          </li>
          <li>
            <strong>高性价比：</strong>一体化设计大幅降低单独采购各模块的成本，更加适合预算有限的初创项目和实验验证。
          </li>
          <li>
            <strong>灵活扩展：</strong>开放的接口设计和完善的软件生态系统，为未来升级和二次开发提供了丰富可能性。
          </li>
        </ul>
      </div>
    </section>
  );
}

// 内置模块：详细列表展示各模块，并附上简短说明，体现每个模块在实际应用中的重要作用
function ProductModules() {
  return (
    <section className={styles.productSection}>
      <div className="container">
        <h2>内置模块</h2>
        <p>
          开发板已内置多项高品质模块，所有组件均经过严格测试，确保在各类嵌入式应用中稳定、高效运行：
        </p>
        <ul>
          <li>Joystick - 精准操控，为游戏及机器人项目提供方向输入</li>
          <li>TB6612 Motor Driver - 高效直流电机驱动，适合运动控制</li>
          <li>INA219 电流检测 - 实时监控电流状态，提高系统安全性</li>
          <li>0.96寸文本及图形显示 - 小尺寸、高能效显示，实时反馈状态</li>
          <li>热感检测模块 - 快速响应温度变化，适用于环境监控</li>
          <li>电位器 - 便捷调节电压，实现精准控制</li>
          <li>旋转编码器 - 高分辨率输入，为控制系统提供精细测量</li>
          <li>DHT11 温湿度传感器 - 简单稳定的环境检测</li>
          <li>BMI270 6DOF传感器 - 高精度运动检测，适用于姿态控制</li>
          <li>MQ2 烟雾检测 - 安全监测，及时预警火灾风险</li>
          <li>1.2寸 240×240 LCD 显示屏 - 高清直观显示，提升用户体验</li>
          <li>音频放大器与扬声器 - 实现直接音频播放，支持互动项目</li>
          <li>MicroSD 卡槽 - 扩展存储空间，方便数据管理</li>
          <li>VL53L0X 激光测距 - 精确测量距离，适用于自动化和机器人</li>
          <li>光线传感器 - 环境光检测，助力智慧照明系统</li>
          <li>蜂鸣器 - 简单音频提示，提升系统反馈</li>
          <li>LED - 状态显示，直观反馈系统运行情况</li>
          <li>数字麦克风 - 高品质音频采集，适合语音识别</li>
          <li>PIR 传感器 - 检测人体移动，为安防系统提供支持</li>
          <li>按钮 - 基础输入设备，操作简单高效</li>
        </ul>
      </div>
    </section>
  );
}

// 竞品分析：从市场上其他开发板的局限性出发，说明本产品如何在集成度、易用性、研发效率和成本控制方面脱颖而出
function CompetitiveAnalysis() {
  return (
    <section className={styles.productSection}>
      <div className="container">
        <h2>竞品分析</h2>
        <p>
          市场上其他主流开发板通常只内置部分常用模块，开发者需自行选购并集成外设，不仅存在兼容性问题，还常常导致研发周期延长、调试难度提升。经过大量数据和用户反馈调研，我们发现：
        </p>
        <ul>
          <li>
            <strong>集成度更高：</strong>本产品将所有关键模块集中在一块电路板上，提供从环境监测到运动检测的全方位支持，极大降低系统集成和调试时间。
          </li>
          <li>
            <strong>开发效率高：</strong>模块统一预调试和兼容，显著提高原型设计效率，使开发周期缩短50%以上，帮助企业快速进入市场。
          </li>
          <li>
            <strong>综合成本优势：</strong>相比于分散采购各单独模块的总成本，一体化方案不仅在硬件成本上更具优势，而且降低了人工调试和系统维护的费用。
          </li>
          <li>
            <strong>品质保障：</strong>所有内置模块经过严格品质检测，确保在各种工业和商业环境中稳定运行，获得了广泛的用户好评。
          </li>
        </ul>
        <p>
          此外，我们在固件和软件生态方面提供了完善的支持文档和开源示例代码，使得从硬件到软件的开发流程更加顺畅，进一步增强了产品的竞争力和市场号召力。
        </p>
      </div>
    </section>
  );
}

// 主页面：整合各个部分构建完整的产品介绍页面
export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title="ESP32 S3 开发板 — 全面一体化解决方案"
      description="基于 ESP32 S3 芯片的开发板，内置多种高品质模块，实现从运动控制到环境监测的全方位功能，助力 AIoT 嵌入式项目快速落地。">
      <HomepageHeader />
      <main>
        <ProductOverview />
        <ProductAdvantages />
        <ProductModules />
        <CompetitiveAnalysis />
      </main>
    </Layout>
  );
}
