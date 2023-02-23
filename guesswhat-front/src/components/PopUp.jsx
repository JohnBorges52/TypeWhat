import React from 'react'
import '../styles/popup.scss'

export default function PopUp(props) {
  return (
    <div className="popup-container">
      <span>{props.message}</span>

      {props.options && (
        <div>
          <button onClick={props.onConfirm}>{props.confirmMessage}</button>
          <button onClick={props.onCancel}>{props.confirmCancel}</button>
        </div>
      )}
    </div>
  )
}
