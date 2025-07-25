import React, { useState } from 'react';
import Header from './components/Header';
import Gallery from './components/Gallery';
import ArtForm from './components/ArtForm';
import { artPieces as initialArt } from './data/art';
import './App.css';


function App() {
  const [artPieces, setArtPieces] = useState(initialArt);

  const addArt = (newArt) => {
    setArtPieces([...artPieces, newArt]);
  };

  const deleteArt = (id) => {
    setArtPieces(artPieces.filter(piece => piece.id !== id));
  };

  const toggleFavorite = (id) => {
    const updated = artPieces.map(piece =>
      piece.id === id ? { ...piece, favorited: !piece.favorited } : piece
    );
    setArtPieces(updated);
  };

  return (
    <div>
      <Header />
      <ArtForm onAdd={addArt} />
      <Gallery
        artPieces={artPieces}
        onDelete={deleteArt}
        onToggleFavorite={toggleFavorite}
      />
    </div>
  );
}

export default App;
