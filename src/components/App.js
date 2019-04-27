import React, {Component} from 'react';
import Header from './Header';
import Inventory from './Inventory';
import Order from './Order';
import SampleFishes from '../sample-fishes';
import Fish from './Fish';

class App extends Component {
    state = {
        fishes: {},
        order: {}
    };

    addFish = fish => {
        const fishes = {...this.state.fishes};

        fishes[`fish${Date.now()}`] = fish;

        this.setState({
            fishes
        })
    };

    onLoadSampleFishes = () => {
        this.setState({fishes: SampleFishes})
    };

    render() {
        console.log(this.state.fishes);
        return (
            <div className="catch-of-the-day">
                <div className="menu">
                    <Header/>
                    <ul className="fishes">
                        {Object.keys(this.state.fishes).map(key => (
                            <Fish key={key} details={this.state.fishes[key]}/>
                        ))}
                    </ul>
                </div>
                <Order/>
                <Inventory addFish={this.addFish} onLoadSampleFishes={this.onLoadSampleFishes}/>
            </div>
        );
    }
}

export default App;
