import Link from "next/link"

export default function Footer() {
  return (
    <footer id="contact">
      <div className="footer-bg"></div>
      <div className="container">
        <div className="footer-content">
          <div className="footer-info">
            <div className="footer-logo">数学研究同好会</div>
            <p className="footer-desc">
              鎌倉学園の数学研究同好会（実質PC部）です。プログラミング、AI、3DCG、ゲーム開発など、様々なテクノロジー分野で活動しています。
            </p>
          </div>

          <div className="footer-links">
            <h3 className="footer-title">リンク</h3>
            <ul className="footer-menu">
              <li>
                <Link href="#">
                  <div className="footer-icon">🏠</div>ホーム
                </Link>
              </li>
              <li>
                <Link href="#activities">
                  <div className="footer-icon">📊</div>活動内容
                </Link>
              </li>
              <li>
                <Link href="#equipment">
                  <div className="footer-icon">🔧</div>設備
                </Link>
              </li>
              <li>
                <Link href="#schedule">
                  <div className="footer-icon">📅</div>年間予定
                </Link>
              </li>
              <li>
                <Link href="#contact">
                  <div className="footer-icon">📞</div>お問い合わせ
                </Link>
              </li>
            </ul>
          </div>

          <div className="footer-contact">
            <h3 className="footer-title">お問い合わせ</h3>
            <div className="contact-info">
              <div className="contact-item">
                <div className="contact-icon">📍</div>
                <div className="contact-text">
                  〒247-0062
                  <br />
                  神奈川県鎌倉市山ノ内110
                  <br />
                  鎌倉学園 数学研究同好会
                </div>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <p>© 2025 数学研究同好会 - 鎌倉学園 All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
