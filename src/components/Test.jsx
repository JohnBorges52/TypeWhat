import React, { useEffect, useState } from 'react'

import '../styles/test.scss'
import $ from 'jquery'

export default function Test() {
  const [score, setScore] = useState(0)

  const create = () => {
    const box = document.getElementById('bordaid')
    const target = document.createElement('div')
    var $el = $('#bordaid')

    let boxWidth = $el.width() - 50
    let boxHeight = $el.height() - 50

    let heightPos = Math.floor(Math.random() * boxHeight)
    let widthPos = Math.floor(Math.random() * boxWidth)

    target.style.top = heightPos + 'px'
    target.style.left = widthPos + 'px'

    target.onclick = function () {
      $(this).remove()
      create()
    }

    box.appendChild(target)
  }

  useEffect(() => {})

  return (
    <div className="quadradao">
      <span className="clickhere">{score}</span>
      <div className="borda" id="bordaid">
        <div
          className="start-div"
          id="toremove"
          onClick={() => {
            create()
            create()
            create()
            create()
            create()
            document.getElementById('toremove').remove()
          }}
        ></div>
      </div>
      <div className="bottom-limit"></div>
    </div>
  )
}
