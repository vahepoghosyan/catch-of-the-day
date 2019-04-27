import React, {Component} from 'react';
import AddFishForm from './AddFishForm';

class Inventory extends Component {
    render() {
        return (
            <div className='inventory'>
                <h2>Inventory</h2>
                <AddFishForm addFish={this.props.addFish}/>
                <button onClick={this.props.onLoadSampleFishes}>Load Sample Fishes</button>
            </div>

        );
    }
}

export default Inventory;
