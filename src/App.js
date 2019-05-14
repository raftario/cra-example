import React from 'react'
import Nav from './components/Nav'

// On utilise une classe car il doit y avoir un state,
// mais si il n'y en a pas on peut utiliser une fonction.
class App extends React.Component {
  // Le constructeur sert à initialiser le composant
  constructor (props) {
    // On copie le constructeur de React.Component
    super(props)
    // On définit l'état de base.
    // C'est le seul moment où on peut modifier le state directement.
    this.state = { view: 'view1' }
  }

  // La méthode viewSet va permettre de changer le state selon la vue choisie dans la navigation.
  // On utilise une fonction flèchée pour avoir accès au this.
  viewSet = e => {
    // On peut accéder aux éléments du DOM sans problème.
    this.setState({ view: e.target.value })
  }

  // La méthode viewSwitch va permettre de basculer entre les pages en retournant celle à afficher.
  // Il y a beaucoup d'autres façons de le faire.
  viewSwitch = () => {
    switch (this.state.view) {
      case 'view1':
        return <div>Page 1</div>
      case 'view2':
        return <div>Page 2</div>
      default:
        return <div>Page inexistante</div>
    }
  }

  // La méthode render retourne ce qui sera affiché dans la page web.
  render () {
    return (
      // C'est souvent utile d'utiliser un tag vide
      // pour grouper plusieurs éléments sans les englober dans un autre tag.
      <>
        {/* On doit placer les commentaires entre crochets dans le code HTML. */}
        {/* On peut passer des variables et fonctions aux tags sans problème. */}
        <Nav view={this.state.view} viewSet={this.viewSet}/>
        {this.viewSwitch()}
      </>
    )
  }
}

// Toujours exporter les composans
// pour pouvoir les importer dans un autre fichier.
export default App
