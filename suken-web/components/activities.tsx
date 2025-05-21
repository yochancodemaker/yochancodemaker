export default function Activities() {
  return (
    <section id="activities">
      <div className="section-bg activities-bg"></div>
      <div className="section-overlay activities-overlay"></div>
      <div className="container">
        <div className="section-content">
          <div className="section-title">
            <h2>活動内容</h2>
            <p>
              数学研究同好会では、様々な分野でのテクノロジー活動を行っています
            </p>
            <p>※画像、動画はすべて部員が作成したものになります。</p>
          </div>

          <div className="activities-grid">
            {/* Programming */}
            <div className="activity-card">
              <div
                className="activity-bg"
                style={{
                  backgroundImage: "url('/images/ActivityBG/programming.gif')",
                }}
              ></div>
              <div className="activity-overlay">
                <h3 className="activity-title">プログラミング</h3>
                <p className="activity-desc">
                  PythonやHTMLなどの主要な言語はもちろん。Assembly言語を用いて自作OSや自作shellを作っている部員もいます。
                </p>
                <div className="activity-tags">
                  <span className="activity-tag">Python</span>
                  <span className="activity-tag">Java</span>
                  <span className="activity-tag">C++</span>
                  <span className="activity-tag">JavaScript</span>
                  <span className="activity-tag">NASM</span>
                  <span className="activity-tag">php</span>
                </div>
              </div>
              <div className="activity-video" data-video="0X-joZ4XXrw"></div>
              <div className="video-label">動画を再生</div>
            </div>

            {/* AI */}
            <div className="activity-card">
              <div
                className="activity-bg"
                style={{ backgroundImage: "url('/images/ActivityBG/AI.gif')" }}
              ></div>
              <div className="activity-overlay">
                <h3 className="activity-title">AI</h3>
                <p className="activity-desc">
                  オセロのAIを作成しています。ほかにもAIを使った面白い作品を作っています。
                </p>
                <div className="activity-tags">
                  <span className="activity-tag">TensorFlow</span>
                  <span className="activity-tag">PyTorch</span>
                  <span className="activity-tag">OpenAI</span>
                  <span className="activity-tag">Stable Diffusion</span>
                </div>
              </div>
            </div>

            {/* 3DCG */}
            <div className="activity-card">
              <div
                className="activity-bg"
                style={{ backgroundImage: "url('/images/ActivityBG/MMD.gif')" }}
              ></div>
              <div className="activity-overlay">
                <h3 className="activity-title">3D(CG)</h3>
                <p className="activity-desc">
                  MikuMikuDanceを利用して3Dモデルを躍らせたり、Blenderを用いて3Dモデリングやアニメーション制作を行っています。3Dプリンターでモデルを出力することもできます。
                </p>
                <div className="activity-tags">
                  <span className="activity-tag">Blender</span>
                  <span className="activity-tag">TinkerCAD</span>
                  <span className="activity-tag">MMD</span>
                </div>
              </div>
              <div className="activity-video" data-video="bSD6zKpI9a8"></div>
              <div className="video-label">動画を再生</div>
            </div>

            {/* Vocaloid */}
            <div className="activity-card">
              <div
                className="activity-bg"
                style={{
                  backgroundImage: "url('/images/ActivityBG/vocaloid.gif')",
                }}
              ></div>
              <div className="activity-overlay">
                <h3 className="activity-title">ボーカロイド</h3>
                <p className="activity-desc">
                  歌声合成ソフトを用いてカバー動画などを作成しています。
                </p>
                <div className="activity-tags">
                  <span className="activity-tag">Voisona</span>
                  <span className="activity-tag">Synthesizer V</span>
                  <span className="activity-tag">VOCALOID</span>
                  <span className="activity-tag">UTAU</span>
                  <span className="activity-tag">NEUTRINO</span>
                </div>
              </div>
              <div className="activity-video" data-video="utPRPNxJgOE"></div>
              <div className="video-label">動画を再生</div>
            </div>

            {/* Electronics */}
            <div className="activity-card">
              <div
                className="activity-bg"
                style={{
                  backgroundImage: "url('/images/ActivityBG/elec.gif')",
                }}
              ></div>
              <div className="activity-overlay">
                <h3 className="activity-title">電子工作</h3>
                <p className="activity-desc">
                  ギターのアンプやアナログシンセサイザーを自作しています。PCB基盤の設計なども行っています。またM5StackやRaspberryPiなどのマイコンボードも使用しています。
                </p>
                <div className="activity-tags">
                  <span className="activity-tag">Arduino</span>
                  <span className="activity-tag">Raspberry Pi</span>
                  <span className="activity-tag">ESP32</span>
                  <span className="activity-tag">回路設計</span>
                </div>
              </div>
              <div className="activity-video" data-video="mGmv4gbvyaI"></div>
              <div className="video-label">動画を再生</div>
            </div>

            {/* Game Development */}
            <div className="activity-card">
              <div
                className="activity-bg"
                style={{
                  backgroundImage: "url('/images/ActivityBG/game.gif')",
                }}
              ></div>
              <div className="activity-overlay">
                <h3 className="activity-title">ゲーム制作</h3>
                <p className="activity-desc">
                  UnityやScratchを利用したゲームを作成しています。AIと組み合わせてたゲームや、ARが頼めるようなものも制作しています。東方の二次創作ゲームを作成している部員もいます。
                </p>
                <div className="activity-tags">
                  <span className="activity-tag">Unity</span>
                  <span className="activity-tag">Scratch</span>
                  <span className="activity-tag">PyGame</span>
                  <span className="activity-tag">RPGツクール</span>
                  <span className="activity-tag">東方弾幕風</span>
                </div>
              </div>
              <div className="activity-video" data-video="cKTgryAyaHw"></div>
              <div className="video-label">動画を再生</div>
            </div>

            {/* Video Production */}
            <div className="activity-card">
              <div
                className="activity-bg"
                style={{ backgroundImage: "url('/images/ActivityBG/b3d.gif')" }}
              ></div>
              <div className="activity-overlay">
                <h3 className="activity-title">映像制作</h3>
                <p className="activity-desc">
                  ゲーム実況や解説動画。合成音声などを活用した幅広い動画を制作しています。詳しくはYouTubeをご覧ください。
                </p>
                <div className="activity-tags">
                  <span className="activity-tag">ゆっくりムービーメーカー</span>
                  <span className="activity-tag">After Effects</span>
                  <span className="activity-tag">AviUtl</span>
                </div>
              </div>
              <div className="activity-video" data-video="tqrJDBqwer8"></div>
              <div className="video-label">動画を再生</div>
            </div>

            {/* Custom PC */}
            <div className="activity-card">
              <div
                className="activity-bg"
                style={{ backgroundImage: "url('/images/ActivityBG/gpu.jpg')" }}
              ></div>
              <div className="activity-overlay">
                <h3 className="activity-title">自作PC</h3>
                <p className="activity-desc">
                  部のPCはそのほとんどが自作PCです。パーツ選びから組み立て、OSインストールまで自らおこないます。自作PCを行うことでPCの仕組みを学ぶことができます。
                </p>
                <div className="activity-tags">
                  <span className="activity-tag">ゲーミングPC</span>
                  <span className="activity-tag">オーバークロック</span>
                </div>
              </div>
              <div className="activity-video" data-video="RaylxuPcNek"></div>
              <div className="video-label">動画を再生</div>
            </div>

            {/* Network Infrastructure */}
            <div className="activity-card">
              <div
                className="activity-bg"
                style={{ backgroundImage: "url('/images/ActivityBG/PVE.png')" }}
              ></div>
              <div className="activity-overlay">
                <h3 className="activity-title">ネットワークインフラ</h3>
                <p className="activity-desc">
                  部室内のネットワーク環境の管理は部員が行っています。ルーターやスイッチの設定、サーバー構築など、実践的なネットワーク技術を学ぶことができます。DockerやProxmoxVEなどのインフラストラクチャーを実際に使って楽しむことができます。
                </p>
                <div className="activity-tags">
                  <span className="activity-tag">Linux</span>
                  <span className="activity-tag">Docker</span>
                  <span className="activity-tag">ネットワーク設計</span>
                  <span className="activity-tag">サーバー管理</span>
                  <span className="activity-tag">NodeJS</span>
                </div>
              </div>
              <div className="activity-video" data-video="8fFXmBuscak"></div>
              <div className="video-label">動画を再生</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
