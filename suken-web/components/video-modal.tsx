"use client"

import type React from "react"

import { useState, useEffect } from "react"

export default function VideoModal() {
  const [isActive, setIsActive] = useState(false)
  const [videoId, setVideoId] = useState("")

  useEffect(() => {
    const videoButtons = document.querySelectorAll(".activity-video")

    const handleVideoClick = (e: Event) => {
      const button = e.currentTarget as HTMLElement
      const videoId = button.getAttribute("data-video")
      if (videoId) {
        setVideoId(videoId)
        setIsActive(true)
      }
    }

    videoButtons.forEach((button) => {
      button.addEventListener("click", handleVideoClick)
    })

    return () => {
      videoButtons.forEach((button) => {
        button.removeEventListener("click", handleVideoClick)
      })
    }
  }, [])

  const closeModal = () => {
    setIsActive(false)
    setTimeout(() => {
      setVideoId("")
    }, 300)
  }

  const handleOutsideClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      closeModal()
    }
  }

  return (
    <div className={`modal ${isActive ? "active" : ""}`} id="video-modal" onClick={handleOutsideClick}>
      <div className="modal-content">
        <div className="modal-close" onClick={closeModal}></div>
        <div className="modal-video">
          {videoId && (
            <iframe
              src={`https://www.youtube.com/embed/${videoId}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          )}
        </div>
      </div>
    </div>
  )
}
