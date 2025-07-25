import React, { useState } from 'react';

export default function ArtForm({ onAdd }) {
  const [title, setTitle] = useState('');
  const [artist, setArtist] = useState('');
  const [year, setYear] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const newArt = {
      id: Date.now(),
      title,
      artist,
      year: parseInt(year),
      imageUrl,
      favorited: false
    };

    onAdd(newArt);

    // Reset form
    setTitle('');
    setArtist('');
    setYear('');
    setImageUrl('');
  };

  return (
    <form onSubmit={handleSubmit} style={{ textAlign: 'center', marginBottom: '30px' }}>
      <h2>Add Your Favorite</h2>
      <input value={title} onChange={e => setTitle(e.target.value)} placeholder="Title" required /><br />
      <input value={artist} onChange={e => setArtist(e.target.value)} placeholder="Artist" required /><br />
      <input type="number" value={year} onChange={e => setYear(e.target.value)} placeholder="Year" required /><br />
      <input value={imageUrl} onChange={e => setImageUrl(e.target.value)} placeholder="Image URL" required /><br />
      <button type="submit">Submit</button>
    </form>
  );
}
