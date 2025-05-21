import Image from "next/image";

export default function Schedule() {
  return (
    <section id="schedule">
      <div className="section-bg schedule-bg"></div>
      <div className="container">
        <div className="section-content">
          <div className="section-title">
            <h2>年間予定</h2>
            <p>数学研究同好会の年間を通した主な活動スケジュールです</p>
          </div>

          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-content">
                <div className="timeline-date">5月</div>
                <h3 className="timeline-title">オープンスクール</h3>
                <p className="timeline-desc">
                  受験を考えている小学生を対象にしたイベントで、プログラミング体験を行っています。また、作品の一部展示もおこなっています。
                </p>
                <div className="timeline-image">
                  <Image
                    src="/img/event/open.jpg"
                    alt="オープンスクールの様子"
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-content">
                <div className="timeline-date">6月</div>
                <h3 className="timeline-title">文化祭</h3>
                <p className="timeline-desc">
                  一番力を入れているイベント。部員の成果物を展示、公開し、テクノロジーを用いたインタラクティブな展示を心がけています。
                </p>
                <div className="timeline-image">
                  <Image
                    src="/img/event/fes.jpg"
                    alt="文化祭の様子"
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-content">
                <div className="timeline-date">7月</div>
                <h3 className="timeline-title">秋葉原</h3>
                <p className="timeline-desc">
                  電気街として有名な秋葉原へ部として訪問し、最新のPC部品やガジェットのリサーチを行います。パーツを購入し自作PCを組みます。
                </p>
                <div className="timeline-image">
                  <Image
                    src="/img/event/akiba.jpg"
                    alt="秋葉原訪問の様子"
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-content">
                <div className="timeline-date">8月</div>
                <h3 className="timeline-title">かき氷</h3>
                <p className="timeline-desc">
                  夏休み中の恒例行事として、部員同士の親睦を深めるためにかき氷パーティーを開催します。流しそうめんを行ったこともあります。
                </p>
                <div className="timeline-image">
                  <Image
                    src="/img/event/men.jpg"
                    alt="かき氷パーティーの様子"
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-content">
                <div className="timeline-date">3月</div>
                <h3 className="timeline-title">スプリングフェスティバル</h3>
                <p className="timeline-desc">
                  文化祭を簡素化したようなイベントです。参加人数は多くはありませんが、部員の作品を公開しています。
                </p>
                <div className="timeline-image">
                  <Image
                    src="/img/event/spring.jpg"
                    alt="スプリングフェスティバルの様子"
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
