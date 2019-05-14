import React from 'react'

function LabeledRadio (props) {
  const id = 'radio-' + props.value

  return (
    <>
      {/* Les tags doivent toujours être fermés, même s'ils sont vide. */}
      {/*
      On peut appliquer les propriétés appliqués au composant à un de ses tags
      en utilisant {...props}.
      */}
      <input
        {...props}
        id={id}
        type="radio"
      />
      <label htmlFor={id}>{props.label}</label>
    </>
  )
}

export default LabeledRadio
