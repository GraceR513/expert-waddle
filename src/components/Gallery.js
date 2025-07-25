import React from 'react';
import ArtCard from './ArtCard';

export default function Gallery({ artPieces, onDelete, onToggleFavorite }) {
  return (
    <div style={{
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      padding: '20px'
    }}>
      {artPieces.map(piece => (
        <ArtCard
          key={piece.id}
          art={piece}
          onDelete={onDelete}
          onToggleFavorite={onToggleFavorite}
        />
      ))}
    </div>
  );
}
