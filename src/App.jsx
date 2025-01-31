import React, { useState } from 'react'
import AGVCarList from './AGVCarList'
import AddAGVCar from './AddAGVCar'

const App = () => {
  const [agvCars, setAgvCars] = useState([])

  const addAGVCar = (car) => {
    setAgvCars([...agvCars, car])
  }

  const removeAGVCar = (index) => {
    const newAgvCars = agvCars.filter((_, i) => i !== index)
    setAgvCars(newAgvCars)
  }

  return (
    <div className="App">
      <h1>AGV Car Management</h1>
      <AddAGVCar addAGVCar={addAGVCar} />
      <AGVCarList agvCars={agvCars} removeAGVCar={removeAGVCar} />
    </div>
  )
}

export default App
