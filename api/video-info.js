// Ficheiro: api/video-info.js

// Esta é a nossa Serverless Function para a Vercel.

export default function handler(req, res) {
  // Apenas aceitamos pedidos POST
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Apenas pedidos POST são permitidos' });
  }

  const { url } = req.body;

  if (!url) {
    return res.status(400).json({ success: false, message: 'URL do vídeo não fornecida.' });
  }

  // --- SIMULAÇÃO DE RESPOSTA ---
  // Aqui estaria a lógica para usar o yt-dlp. Por agora, devolvemos dados de exemplo.
  const mockData = {
    success: true,
    title: `Dados do Link: ${url.substring(0, 30)}...`,
    thumbnail: 'https://placehold.co/320x180/1f2937/4b5563?text=Processado',
    formats: [
      { quality: '1080p', type: 'MP4', size: '125 MB' },
      { quality: '720p', type: 'MP4', size: '70 MB' },
      { quality: 'MP3', type: 'Audio', size: '8 MB' },
    ],
  };

  // Devolvemos a resposta
  res.status(200).json(mockData);
}
