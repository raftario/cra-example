import React from 'react'
import LabeledRadio from './LabeledRadio'

// Comme il n'y a pas de state, pas besoin de faire une classe.
function Nav (props) {
  // On peut déclarer des variables ou des constantes comme en JavaScript normal.
  const views = [['view1', 'Page 1'], ['view2', 'Page 2']]

  return (
    <div>{
      // La fonction map d'un tableau
      // permet de retourner une valeur par élément de tableau.
      views.map(view =>
        // Dans une fonction flèchée, ce qui est après la flèche
        // est automatiquement retourné s'il n'y a pas de crochets autour.
        // L'attribut key sert à différencier différents éléments lorsqu'on utilise map.
        // L'attribut onChange sert dans toutes les situations en React.
        // On détermine si le radio devrait être check
        // en comparant sa valeur avec le view actuel.
        <LabeledRadio
          key={view[0]}
          value={view[0]}
          label={view[1]}
          onChange={props.viewSet}
          checked={props.view === view[0]}
        />
      )
    }</div>
  )
}

export default Nav
