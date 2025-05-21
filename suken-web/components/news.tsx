"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ChevronDown, ChevronUp, Calendar, User } from "lucide-react"

// ニュース記事のタイプ定義
type NewsItem = {
  id: number
  title: string
  date: string
  author: string
  category: string
  excerpt: string
  image: string
  link: string
}

// サンプルニュース記事データ
const newsItems: NewsItem[] = [
  {
    id: 1,
    title: "文化祭2025の出展内容が決定しました",
    date: "2025-05-15",
    author: "部長",
    category: "イベント",
    excerpt:
      "今年の文化祭では、AIを活用したインタラクティブ展示や自作ゲームの体験コーナーを予定しています。詳細はこちらをご覧ください。",
    image: "/placeholder.svg?height=200&width=300",
    link: "#",
  },
  {
    id: 2,
    title: "プログラミングコンテストで優勝しました",
    date: "2025-05-10",
    author: "顧問",
    category: "受賞",
    excerpt:
      "全国高校生プログラミングコンテストにおいて、本校の数学研究同好会の部員が優勝しました。作品は機械学習を活用した...",
    image: "/placeholder.svg?height=200&width=300",
    link: "#",
  },
  {
    id: 3,
    title: "新しいサーバー機器が導入されました",
    date: "2025-05-05",
    author: "システム管理者",
    category: "設備",
    excerpt:
      "部室のネットワークインフラを強化するため、新しいサーバー機器を導入しました。これにより、より高度なプロジェクトの開発が可能になります。",
    image: "/placeholder.svg?height=200&width=300",
    link: "#",
  },
  {
    id: 4,
    title: "オープンスクールの準備が始まりました",
    date: "2025-04-28",
    author: "広報担当",
    category: "イベント",
    excerpt:
      "5月に開催されるオープンスクールの準備が始まりました。小学生向けのプログラミング体験コーナーを企画中です。",
    image: "/placeholder.svg?height=200&width=300",
    link: "#",
  },
  {
    id: 5,
    title: "3Dプリンターの使い方講習会を開催",
    date: "2025-04-20",
    author: "技術担当",
    category: "講習会",
    excerpt: "新入部員向けに3Dプリンターの使い方講習会を開催します。モデリングの基礎から出力までを学びます。",
    image: "/placeholder.svg?height=200&width=300",
    link: "#",
  },
  {
    id: 6,
    title: "部誌「テクノロジーの風」第10号発行",
    date: "2025-04-15",
    author: "編集部",
    category: "出版",
    excerpt:
      "数学研究同好会の部誌「テクノロジーの風」第10号が発行されました。最新の技術トレンドや部員の研究成果を掲載しています。",
    image: "/placeholder.svg?height=200&width=300",
    link: "#",
  },
]

export default function News() {
  const [showOlderNews, setShowOlderNews] = useState(false)

  // 表示するニュース記事を制御
  const displayedNews = showOlderNews ? newsItems : newsItems.slice(0, 3)

  // もっと見るボタンのクリックハンドラ
  const toggleOlderNews = () => {
    setShowOlderNews(!showOlderNews)
  }

  return (
    <section id="news" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="section-title text-center mb-16">
          <h2 className="text-4xl font-bold relative inline-block mb-5">最新のお知らせ</h2>
          <p className="text-lg max-w-2xl mx-auto opacity-80">
            数学研究同好会の最新の活動やイベント情報をお知らせします
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedNews.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl overflow-hidden shadow-lg transition-transform duration-300 hover:-translate-y-2"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  fill
                  style={{ objectFit: "cover" }}
                  className="transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute top-4 right-4 bg-accent1 text-dark font-semibold text-sm py-1 px-3 rounded-full">
                  {item.category}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 line-clamp-2">{item.title}</h3>
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <div className="flex items-center mr-4">
                    <Calendar className="w-4 h-4 mr-1" />
                    {new Date(item.date).toLocaleDateString("ja-JP")}
                  </div>
                  <div className="flex items-center">
                    <User className="w-4 h-4 mr-1" />
                    {item.author}
                  </div>
                </div>
                <p className="text-gray-600 mb-4 line-clamp-3">{item.excerpt}</p>
                <Link href={item.link} className="inline-flex items-center text-primary font-semibold hover:underline">
                  続きを読む
                  <svg
                    className="w-4 h-4 ml-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button
            onClick={toggleOlderNews}
            className="inline-flex items-center justify-center bg-white text-dark border border-gray-300 rounded-full py-3 px-6 font-semibold transition-all duration-300 hover:bg-gray-100 hover:shadow-md"
          >
            {showOlderNews ? (
              <>
                <ChevronUp className="w-5 h-5 mr-2" />
                閉じる
              </>
            ) : (
              <>
                <ChevronDown className="w-5 h-5 mr-2" />
                過去のお知らせを見る
              </>
            )}
          </button>
        </div>
      </div>
    </section>
  )
}
