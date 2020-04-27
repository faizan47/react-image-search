import React from 'react';
import unsplash from '../api/unsplash';
import Search from './Search';

class App extends React.Component {
	state = {
		imageList: [],
		imageCount: null
	};
	onSearchSubmit = async (term) => {
		const response = await unsplash.get('/search/photos', {
			params: { query: term }
		});
		this.setState({ imageList: response.data.results, imageCount: response.data.total });
	};
	render() {
		return (
			<div className="ui container">
				<Search onSubmit={this.onSearchSubmit} />
				<p className="text">Found {this.state.imageCount} images</p>
			</div>
		);
	}
}
export default App;

// 3maRp6M8epSh6nk-U-_8MgfDII7qZD4Y_dWpBW0kt98
// v7VxWs5YJI4jkXfwsHLOWpM95dw1pfcuiDSWG_oO4D8
