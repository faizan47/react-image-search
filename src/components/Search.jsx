import React from 'react';

class Search extends React.Component {
	state = { term: '' };
	onFormSubmit = (e) => {
		e.preventDefault();
		this.props.onSubmit(this.state.term);
	};
	render() {
		return (
			<div className="ui segment">
				<form onSubmit={this.onFormSubmit} className="ui form">
					<div className="field">
						<label htmlFor="input">Image Search</label>
						<input
							value={this.state.term}
							onChange={(e) => this.setState({ term: e.target.value })}
							type="text"
						/>
					</div>
				</form>
			</div>
		);
	}
}

export default Search;
