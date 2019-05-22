import React from 'react';

class EditFishForm extends React.Component {

    handleChange = (event) => {
        const updateedFish = {
            ...this.props.fish,
            [event.currentTarget.name]: event.currentTarget.value
        };

        this.props.updateFish(this.props.index, updateedFish)
    };

    render() {
        return <div className='fish-edit'>
            <input type="text" name='name' onChange={this.handleChange} value={this.props.fish.name}/>
            <input type="text" name='price' onChange={this.handleChange} value={this.props.fish.price}/>
            <select name='status'>
                <option value="available">Fresh!</option>
                <option value="unavailable">Sold Out!</option>
            </select>
            <textarea name='desc' onChange={this.handleChange} value={this.props.fish.desc}/>
            <input type="text" name='image' onChange={this.handleChange} value={this.props.fish.image}/>
        </div>
    }
}

export default EditFishForm