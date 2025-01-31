import React from 'react'

const notes = ['C', 'D', 'E', 'F', 'G', 'A', 'B']

const SynthKeyboard = () => {
  const playNote = (note) => {
    const context = new (window.AudioContext || window.webkitAudioContext)()
    const oscillator = context.createOscillator()
    const gainNode = context.createGain()

    oscillator.connect(gainNode)
    gainNode.connect(context.destination)

    oscillator.type = 'sine'
    oscillator.frequency.setValueAtTime(440 * Math.pow(2, (notes.indexOf(note) - 3) / 12), context.currentTime)
    gainNode.gain.setValueAtTime(0, context.currentTime)
    gainNode.gain.linearRampToValueAtTime(1, context.currentTime + 0.01)
    gainNode.gain.linearRampToValueAtTime(0, context.currentTime + 0.5)

    oscillator.start()
    oscillator.stop(context.currentTime + 0.5)
  }

  return (
    <div className="keyboard">
      {notes.map((note) => (
        <button key={note} className="key" onClick={() => playNote(note)}>
          {note}
        </button>
      ))}
    </div>
  )
}

export default SynthKeyboard
