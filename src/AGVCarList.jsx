import React from 'react'

const AGVCarList = ({ agvCars, removeAGVCar }) => {
  return (
    <div className="agv-car-list">
      <h2>AGV Cars</h2>
      <ul>
        {agvCars.map((car, index) => (
          <li key={index}>
            {car.name} - {car.model}
            <button onClick={() => removeAGVCar(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default AGVCarList
