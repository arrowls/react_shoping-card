import './App.scss';
import ShoppingCard from "./components/ShoppingCard";
import ShoppingCardClass from "./components/ShoppingCardClass";
import ShoppingCardModel from "./models/ShoppingCard.model";

function App() {
    const testItem = {
        brand: 'Tiger of Sweden',
        title: 'Leonard coat',
        description: 'Minimalistic coat in cotton-blend',
        descriptionFull: 'Men\'s minimalistic overcoat in cotton-blend. Features a stand-up collar, concealed front closure and single back vent. Slim fit with clean, straight shape. Above-knee length.',
        price: 399,
        currency: '£'
}
  return (
    <div className="App">
        <div className="test-container">
            <ShoppingCard item={new ShoppingCardModel(testItem)} />
            <ShoppingCardClass item={new ShoppingCardModel(testItem)} />
        </div>
    </div>
  );
}

export default App;
