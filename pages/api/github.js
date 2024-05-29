// pages/api/github.js
export default async function handler(req, res) {
    const response = await fetch('https://api.github.com/users/[Shayan7860]/repos');
    const data = await response.json();
    res.status(200).json(data);
  }
  