import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header>
      <div
        className="header-bg"
        style={{ backgroundImage: "/img/BG/1.png" }}
      ></div>
      <div className="header-content">
        <div className="logo-container">
          <div className="logo-bg">
            <Image src="/img/logos/Black-E.png" alt="Logo" fill />
          </div>
          <div className="logo-accent">
            <Image src="/img/logos/Black-E.png" alt="Logo" fill />
          </div>
        </div>
        <h1>数学研究同好会</h1>
        <div className="subtitle">パソコン部</div>

        {/* Service Links */}
        <div className="service-links">
          <Link
            href="https://suken.daemon.asia"
            className="service-link"
            target="_blank"
          >
            <div className="service-icon">
              <Image
                src="/img/logos/www.png"
                alt="Website"
                width={40}
                height={40}
              />
            </div>
            <div className="service-name">公式サイト</div>
          </Link>
          <Link
            href="https://www.youtube.com/@Suken-youtube"
            className="service-link"
            target="_blank"
          >
            <div className="service-icon">
              <Image
                src="/img/logos/youtube.webp"
                alt="YouTube"
                width={40}
                height={40}
              />
            </div>
            <div className="service-name">YouTube</div>
          </Link>
          <Link
            href="https://x.com/suken_schoolfes/"
            className="service-link"
            target="_blank"
          >
            <div className="service-icon">
              <Image src="/img/logos/x.png" alt="X" width={40} height={40} />
            </div>
            <div className="service-name">X</div>
          </Link>
          <Link
            href="https://github.com/kg-suken/"
            className="service-link"
            target="_blank"
          >
            <div className="service-icon">
              <Image
                src="/img/logos/github.png"
                alt="GitHub"
                width={40}
                height={40}
              />
            </div>
            <div className="service-name">GitHub</div>
          </Link>
          <Link
            href="https://hub.docker.com/u/kgsuken"
            className="service-link"
            target="_blank"
          >
            <div className="service-icon">
              <Image
                src="/img/logos/docker.png"
                alt="Docker"
                width={40}
                height={40}
              />
            </div>
            <div className="service-name">DockerHUB</div>
          </Link>
          <Link
            href="https://www.nicovideo.jp/user/135493761"
            className="service-link"
            target="_blank"
          >
            <div className="service-icon">
              <Image
                src="/img/logos/niconico.webp"
                alt="Niconico"
                width={40}
                height={40}
              />
            </div>
            <div className="service-name">ニコニコ</div>
          </Link>
        </div>
      </div>
      <div className="scroll-down">スクロールして詳細を見る</div>
    </header>
  );
}
