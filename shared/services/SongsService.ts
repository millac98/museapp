'use client'

export async function getAllSongs() {
  const data = await fetch('http://127.0.0.1:3000/songs');

  const result = await data.json();

  return result;
}

export async function getSong(id: string) {
  const data = await fetch(`http://127.0.0.1:3000/songs/${id}`);

  const result = await data.json();

  return result;
}