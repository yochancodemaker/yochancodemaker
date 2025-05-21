"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrollOpacity, setScrollOpacity] = useState(0)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      if (scrollY > 0) {
        setIsScrolled(true)
        // Convert 0-400px scroll to 0-1 opacity
        const opacity = Math.min(scrollY / 400, 1)
        setScrollOpacity(opacity)
      } else {
        setIsScrolled(false)
        setScrollOpacity(0)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <nav
      className={`nav-container ${isScrolled ? "scrolled" : ""}`}
      style={{ "--scroll-opacity": scrollOpacity } as React.CSSProperties}
    >
      <div className="container">
        <div className="nav-content">
          <Link href="/" className="nav-logo">
            数学研究同好会
          </Link>

          {/* Hamburger Menu */}
          <div className={`hamburger ${isMenuOpen ? "active" : ""}`} onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>

          <div className={`nav-links ${isMenuOpen ? "active" : ""}`}>
            <Link href="#activities" onClick={closeMenu}>
              <div className="nav-icon">📊</div>活動内容
            </Link>
            <Link href="#equipment" onClick={closeMenu}>
              <div className="nav-icon">🔧</div>設備
            </Link>
            <Link href="#schedule" onClick={closeMenu}>
              <div className="nav-icon">📅</div>年間予定
            </Link>
            <Link href="#news" onClick={closeMenu}>
              <div className="nav-icon">📰</div>お知らせ
            </Link>
            <Link href="#contact" onClick={closeMenu}>
              <div className="nav-icon">📞</div>お問い合わせ
            </Link>

            <div className="social-nav">
              <Link href="https://suken.daemon.asia" target="_blank" title="site">
                <Image src="/images/logos/www.png" alt="Website" width={48} height={48} />
              </Link>
              <Link href="https://www.youtube.com/@Suken-youtube" target="_blank" title="YouTube">
                <Image src="/images/logos/youtube.webp" alt="YouTube" width={48} height={48} />
              </Link>
              <Link href="https://x.com/suken_schoolfes/" target="_blank" title="X (Twitter)">
                <Image src="/images/logos/x.png" alt="X" width={48} height={48} />
              </Link>
              <Link href="https://github.com/kg-suken/" target="_blank" title="GitHub">
                <Image src="/images/logos/github.png" alt="GitHub" width={48} height={48} />
              </Link>
              <Link href="https://hub.docker.com/u/kgsuken" target="_blank" title="Dockerhub">
                <Image src="/images/logos/docker.png" alt="Docker" width={48} height={48} />
              </Link>
              <Link href="https://www.nicovideo.jp/user/135493761" target="_blank" title="ニコニコ動画">
                <Image src="/images/logos/niconico.webp" alt="Niconico" width={48} height={48} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
