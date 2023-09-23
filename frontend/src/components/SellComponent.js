// SellComponent.js

import React from 'react';

class SellComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      duration: '',
      price: '',
      apiName: '',
      // Add more fields as needed
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    // You can perform actions with the form data here
    const formData = {
      duration: this.state.duration,
      price: this.state.price,
      apiName: this.state.apiName,
      // Add more fields as needed
    };

    // You can send the formData to your server or perform other actions
    console.log(formData);
  };

  render() {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-1/3">
          <h1 className="text-2xl font-bold mb-4">Sell an Item</h1>
          <form onSubmit={this.handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="duration"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Duration (in days):
              </label>
              <input
                type="number"
                id="duration"
                name="duration"
                value={this.state.duration}
                onChange={this.handleInputChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="price"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Price:
              </label>
              <input
                type="number"
                id="price"
                name="price"
                value={this.state.price}
                onChange={this.handleInputChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="apiName"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                API Name:
              </label>
              <input
                type="text"
                id="apiName"
                name="apiName"
                value={this.state.apiName}
                onChange={this.handleInputChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            {/* Add more form fields as needed */}
            <div className="mb-4">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default SellComponent;