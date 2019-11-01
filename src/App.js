import React from 'react'
import './App.css'

import List from './composition/List'

function App({ store }) {
	const lists = store.lists.map(list => {
		const { header, cardIds } = list
		console.log(header)
		const cards = cardIds.map(id => store.allCards[id])

		return <List header={header} cards={cards} key={list.id} />
	})

	return (
		<main className="App">
			<header className="App-header">
				<h1>Trelloyes!</h1>
			</header>
			<div className="App-list">{lists}</div>
		</main>
	)
}

export default App
