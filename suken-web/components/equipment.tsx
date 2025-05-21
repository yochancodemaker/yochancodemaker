"use client"

import { useState } from "react"
import Image from "next/image"

export default function Equipment() {
  const [activeTab, setActiveTab] = useState("pc")

  return (
    <section id="equipment">
      <div className="section-bg equipment-bg"></div>
      <div className="container">
        <div className="section-content">
          <div className="section-title">
            <h2>設備紹介</h2>
            <p>数学研究同好会で使用している主な機材やPC</p>
          </div>

          <div className="equipment-tabs">
            <div className={`equipment-tab ${activeTab === "pc" ? "active" : ""}`} onClick={() => setActiveTab("pc")}>
              PC
            </div>
            <div
              className={`equipment-tab ${activeTab === "gadgets" ? "active" : ""}`}
              onClick={() => setActiveTab("gadgets")}
            >
              ガジェット
            </div>
            <div
              className={`equipment-tab ${activeTab === "tools" ? "active" : ""}`}
              onClick={() => setActiveTab("tools")}
            >
              工具・機材
            </div>
          </div>

          <div className={`equipment-content ${activeTab === "pc" ? "active" : ""}`} id="pc-content">
            <div className="equipment-grid">
              <div className="equipment-item">
                <div className="equipment-image">
                  <Image src="/images/equipment/Galleria.jpg" alt="ゲーミングPC" fill style={{ objectFit: "cover" }} />
                </div>
                <div className="equipment-details">
                  <h3 className="equipment-name">GALLERIA</h3>
                  <p className="equipment-specs">
                    CPU: Core i9-12900K
                    <br />
                    GPU: RTX 3070
                    <br />
                    RAM: 64GB DDR4
                    <br />
                    SSD: 1TB NVMe
                  </p>
                </div>
              </div>

              <div className="equipment-item">
                <div className="equipment-image">
                  <Image src="/images/equipment/lachesis.jpg" alt="ラキシス" fill style={{ objectFit: "cover" }} />
                </div>
                <div className="equipment-details">
                  <h3 className="equipment-name">Lachesis</h3>
                  <p className="equipment-specs">
                    CPU: Ryzen 5 3600
                    <br />
                    GPU: RTX 2070
                    <br />
                    RAM: 32GB DDR4
                    <br />
                    SSD: 512GB NVMe
                    <br />
                  </p>
                </div>
              </div>

              <div className="equipment-item">
                <div className="equipment-image">
                  <Image src="/images/equipment/MIKIO.jpg" alt="みきお" fill style={{ objectFit: "cover" }} />
                </div>
                <div className="equipment-details">
                  <h3 className="equipment-name">MIKIO</h3>
                  <p className="equipment-specs">
                    CPU: Core i5-8500
                    <br />
                    GPU: RTX 3050 8GB
                    <br />
                    RAM: 16GB DDR4
                    <br />
                    SSD: 1TB SATA
                  </p>
                </div>
              </div>
              <div className="equipment-item">
                <div className="equipment-details">
                  <p className="equipment-specs">その他12台のデスクトップPCおよび、13台のノードPCを所有しています。</p>
                </div>
              </div>
            </div>
          </div>

          <div className={`equipment-content ${activeTab === "gadgets" ? "active" : ""}`} id="gadgets-content">
            <div className="equipment-grid">
              <div className="equipment-item">
                <div className="equipment-image">
                  <Image src="/images/equipment/Quest2.webp" alt="VRヘッドセット" fill style={{ objectFit: "cover" }} />
                </div>
                <div className="equipment-details">
                  <h3 className="equipment-name">VRヘッドセット</h3>
                  <p className="equipment-specs">
                    モデル: Meta Quest 2<br />
                    解像度: 1832 x 1920 (片目)
                    <br />
                    ストレージ: 64GB
                    <br />
                    用途: VRコンテンツ開発・体験
                  </p>
                </div>
              </div>

              <div className="equipment-item">
                <div className="equipment-image">
                  <Image src="/images/equipment/key.jpg" alt="Midiキーボード" fill style={{ objectFit: "cover" }} />
                </div>
                <div className="equipment-details">
                  <h3 className="equipment-name">Midiキーボード</h3>
                  <p className="equipment-specs">
                    モデル: OXYGEN PRO MINI
                    <br />
                    用途: 作曲
                  </p>
                </div>
              </div>

              <div className="equipment-item">
                <div className="equipment-image">
                  <Image
                    src="/images/equipment/DTK-2241.jpg"
                    alt="グラフィックタブレット"
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="equipment-details">
                  <h3 className="equipment-name">液晶ペンタブレット</h3>
                  <p className="equipment-specs">
                    モデル: Wacom DTK-2241
                    <br />
                    サイズ: 21.5インチ
                    <br />
                    解像度: FullHD
                    <br />
                    用途: イラスト
                  </p>
                </div>
              </div>
              <div className="equipment-item">
                <div className="equipment-image">
                  <Image src="/images/equipment/M5.jpg" alt="M5StickCPlus" fill style={{ objectFit: "cover" }} />
                </div>
                <div className="equipment-details">
                  <h3 className="equipment-name">M5Stack</h3>
                  <p className="equipment-specs">
                    モデル: M5Stack C Plus
                    <br />
                    CPU: ESP32 2@240Mhz
                    <br />
                    サイズ: バッテリ、加速度センサ、マイク、ディスプレイ
                    <br />
                    用途: 電子工作
                  </p>
                </div>
              </div>
              <div className="equipment-item">
                <div className="equipment-image">
                  <Image
                    src="/images/equipment/Arduino.webp"
                    alt="Arduinoマイコン"
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="equipment-details">
                  <h3 className="equipment-name">Arduinoマイコン</h3>
                  <p className="equipment-specs">
                    モデル: Arduino MICRO
                    <br />
                    用途: 電子工作
                  </p>
                </div>
              </div>
              <div className="equipment-item">
                <div className="equipment-image">
                  <Image src="/images/equipment/raspi0.jpg" alt="ラズパイZero2" fill style={{ objectFit: "cover" }} />
                </div>
                <div className="equipment-details">
                  <h3 className="equipment-name">ラズベリーパイ</h3>
                  <p className="equipment-specs">
                    モデル: Raspberry Pi Zero 2 W<br />
                    CPU : BCM2710A1 4@1GHz
                    <br />
                    用途: 電子工作
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className={`equipment-content ${activeTab === "tools" ? "active" : ""}`} id="tools-content">
            <div className="equipment-grid">
              <div className="equipment-item">
                <div className="equipment-image">
                  <Image src="/images/equipment/ender3.jpg" alt="3Dプリンター" fill style={{ objectFit: "cover" }} />
                </div>
                <div className="equipment-details">
                  <h3 className="equipment-name">3Dプリンター</h3>
                  <p className="equipment-specs">
                    モデル: Ender-3
                    <br />
                    造形サイズ: 250 x 210 x 210 mm
                    <br />
                    フィラメント: PLA, PETG, ABS
                    <br />
                    用途: プロトタイピング・小物製作
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
