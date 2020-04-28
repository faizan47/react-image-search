import React from 'react';
import Image from './Image';
import './ImageList.css';

const ImageList = ({ images }) => {
	const imagesMarkup = images.map((image) => (
		<Image key={image.id} src={image.urls.regular} alt={image.alt_description} />
	));
	return <div className="image-list">{imagesMarkup}</div>;
};

export default ImageList;
