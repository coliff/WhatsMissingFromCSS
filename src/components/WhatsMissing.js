import React, { useState } from "react"
import comments from "../data/comments.json"
import random from "lodash/random"

const WhatsMissing = () => {
  const [commentIndex, setCommentIndex] = useState(random(0, comments.length))
  const reload = () => {
    setCommentIndex(random(0, comments.length))
  }
  return (
    <div className="Block whatsmissing">
      <div className="whatsmissing-quote-wrapper">
        <blockquote className="whatsmissing-quote">
          {comments[commentIndex]}
        </blockquote>
      </div>
      <button
        className="whatsmissing-reload"
        className="button"
        onClick={reload}
      >
        Reload
      </button>
    </div>
  )
}

export default WhatsMissing
