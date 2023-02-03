import React from 'react'
import '../styles/popup.scss'

export default function PopUp(props) {
  return (
    <div className="popup-container">
      <span>{props.message}</span>

      <div>
        <button onClick={props.onConfirm}>Yes</button>
        <button onClick={props.onCancel}>Cancel</button>
      </div>
    </div>
  )
}
