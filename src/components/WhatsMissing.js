import React, { useState } from "react"
import comments from "../data/comments.json"
import random from "lodash/random"
import { useLocation } from "@reach/router"
import queryString from "query-string"
import { Twitter } from "./Share"

const WhatsMissing = () => {
  const location = useLocation()
  const { n = random(0, comments.length) } = queryString.parse(location.search)
  const [commentIndex, setCommentIndex] = useState(n)
  const reload = () => {
    const randomN = random(0, comments.length)
    setCommentIndex(randomN)
    if (window && window.history.pushState) {
      window.history.pushState(null, "", `/?n=${randomN}`)
    }
  }
  return (
    <div className="Block whatsmissing">
      <div className="whatsmissing-quote-wrapper">
        <div className="whatsmissing-number">{commentIndex}</div>
        <blockquote className="whatsmissing-quote">
          {comments[commentIndex]}
        </blockquote>
        <div className="Share__Options">
          <Twitter
            text={`What's missing from CSS? "${comments[commentIndex]}" https://whatsmissingfromcss.com/?n=${commentIndex}`}
          />
        </div>
      </div>
      <button
        className="whatsmissing-reload button"
        onClick={reload}
      >
        Reload
      </button>
    </div>
  )
}

export default WhatsMissing
