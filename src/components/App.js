import React, { Component } from 'react';
import Header from './Header';
import Inventory from './Inventory';
import Order from './Order';
import SampleFishes from '../sample-fishes';
import Fish from './Fish';

class App extends Component {
    state = {
        fishes: {},
        order: {},
    };

    addFish = fish => {
        const fishes = { ...this.state.fishes };

        fishes[`fish${Date.now()}`] = fish;

        this.setState({
            fishes,
        });
    };

    onLoadSampleFishes = () => {
        this.setState({ fishes: SampleFishes });
    };

    addToOrder = key => {
        const order = { ...this.state.order };
        order[key] = order[key] + 1 || 1;
        this.setState({
            order,
        });
    };

    render() {
        return (
            <div className="catch-of-the-day">
                <div className="menu">
                    <Header />
                    <ul className="fishes">
                        {Object.keys(this.state.fishes).map(key => (
                            <Fish
                                key={key}
                                index={key}
                                details={this.state.fishes[key]}
                                addToOrder={this.addToOrder}
                            />
                        ))}
                    </ul>
                </div>
                <Order fishes={this.state.fishes} order={this.state.order} />
                <Inventory addFish={this.addFish} onLoadSampleFishes={this.onLoadSampleFishes} />
            </div>
        );
    }
}

export default App;
