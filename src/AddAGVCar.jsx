import React, { useState } from 'react'

const AddAGVCar = ({ addAGVCar }) => {
  const [name, setName] = useState('')
  const [model, setModel] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (name && model) {
      addAGVCar({ name, model })
      setName('')
      setModel('')
    }
  }

  return (
    <div className="add-agv-car">
      <h2>Add AGV Car</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label>Model:</label>
          <input
            type="text"
            value={model}
            onChange={(e) => setModel(e.target.value)}
          />
        </div>
        <button type="submit">Add</button>
      </form>
    </div>
  )
}

export default AddAGVCar
