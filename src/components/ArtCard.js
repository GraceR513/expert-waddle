import React from 'react';

export default function ArtCard({ art, onDelete, onToggleFavorite }) {
  return (
    <div style={{
      border: '1px solid #ccc',
      borderRadius: '8px',
      padding: '10px',
      width: '250px',
      margin: '10px'
    }}>
      <img src={art.imageUrl} alt={art.title} style={{ width: '100%', borderRadius: '6px' }} />
      <h3>{art.title}</h3>
      <p><strong>{art.artist}</strong> ({art.year})</p>

      <button onClick={() => onToggleFavorite(art.id)}>
        {art.favorited ? "💔 Unfavorite" : "❤️ Favorite"}
      </button>

      <button onClick={() => onDelete(art.id)}>🗑️ Delete</button>
    </div>
  );
}
