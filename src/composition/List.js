import React from 'react'
import './List.css'

function List({ header, cards }) {
	return (
		<section className="List">
			<header className="List-header">
				<h2>{header}</h2>
			</header>
			<div className="List-cards">Put cards here</div>
		</section>
	)
}

export default List
