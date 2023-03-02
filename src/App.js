import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Game from './pages/Game/Game';
import HighScores from './pages/HighScores/HighScores';
import GameOver from './pages/GameOver/GameOver';
import Home from './pages/Home/Home';
import Navbar from './components/Navbar/Navbar';
import { Container } from './styled/Container';
import { Main } from './styled/Main';
import Global from './styled/Global';

function App() {
	return (
		<Router>
			<Global />
			<Main>
				<Container>
					<Navbar />
					<Routes>
						<Route path='/game' element={<Game />} />
						<Route path='/highScores' element={<HighScores />} />
						<Route path='/gameOver' element={<GameOver />} />
						<Route path='/' element={<Home />} />
					</Routes>
				</Container>
			</Main>
		</Router>
	);
}

export default App;
