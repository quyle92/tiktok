import Button from './components/Button'
import GlobalStyles from './components/GlobalStyles'

function App() {

    return (
        <GlobalStyles>
            <div style={{padding: '10px 32px'}}>
                <Button primary/>
                <Button large/>
            </div>
            <div className="d-flex">
                <div>Item 1</div>
                <div>Item 2</div>
            </div>
        </GlobalStyles>
    )
}

export default App;