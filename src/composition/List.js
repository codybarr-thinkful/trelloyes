import React from 'react'
import './List.css'
import Card from './Card.js'

function List({ header, cards }) {
	const cardJSX = cards.map(card => {
		return <Card key={card.id} title={card.title} content={card.content} />
	})

	return (
		<section className="List">
			<header className="List-header">
				<h2>{header}</h2>
			</header>
			<div className="List-cards">{cardJSX}</div>
		</section>
	)
}

export default List
