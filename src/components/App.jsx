import React from 'react';
import unsplash from '../api/unsplash';
import Search from './Search';
import ImageList from './ImageList';

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
				<h5 className="text">{this.state.imageCount ? `Found ${this.state.imageCount} images` : null}</h5>
				<ImageList images={this.state.imageList} />
			</div>
		);
	}
}
export default App;
