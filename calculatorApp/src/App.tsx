import './App.css'
import './Components/button/button.css'
import './Components/resultsField/results-field.css'
import './Components/themes/alt-dark-mode.css'
import './Components/themes/dark-mode.css'
// import './Components/themes/light-mode.css'
import { Button } from './Components/button/Button.tsx'
import { Header } from './Components/header/Header.tsx'
import { Theme } from './Components/themes/Theme.tsx'
import { ResultsField } from './Components/resultsField/ResultsField.tsx'


function App() {

  return (
    <div>
      <Header />
      <Theme />
      <ResultsField />

      <div className="button-grid">
        <Button
          value="7" />
        <Button
          value="8" />
        <Button
          value="9" />
        <Button
          value="DEL" />
        <Button
          value="4" />
        <Button
          value="5" />
        <Button
          value="6" />
        <Button
          value="+" />
        <Button
          value="1" />
        <Button
          value="2" />
        <Button
          value="3" />
        <Button
          value="-" />
        <Button
          value="." />
        <Button
          value="0" />
        <Button
          value="/" />
        <Button
          value="x" />
        <Button
          value="RESET" />
        <Button
          value="=" />
      </div>

    </div>
  )
}

export default App
