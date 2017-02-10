import React from 'react'
import { connect } from 'react-redux'
import { addFolder, addItem, removeFolder } from '../actions'

let AddTodo = ({ dispatch }) => {
  return (
    <div>
      <form>
        <button type="button" onClick={e => {
          e.preventDefault()
          dispatch(addFolder("New folder", 1))
        }}>
          Add folder
        </button>
        <button type="button" onClick={e => {
          e.preventDefault()
          console.log("Add item")
          dispatch(addItem(-1))
        }}>
          Add item
        </button>
        <button type="button" onClick={e => {
          e.preventDefault()
          console.log("Add folder")
          dispatch(removeFolder(-1))
        }}>
          Remove folder
        </button>
      </form>
    </div>
  )
}
AddTodo = connect()(AddTodo)

export default AddTodo
