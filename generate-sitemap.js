import SitemapGenerator from 'sitemap-generator';

// Вкажіть адресу вашого сайту
const generator = SitemapGenerator('https://karamandmitriy.github.io/Portfolio', {
  stripQuerystring: true,
  filepath: './public/sitemap.xml',
  maxDepth: 0,
  lastMod: true,
  changeFreq: 'weekly',
  priorityMap: [1.0, 0.8, 0.6, 0.4]
});

generator.on('done', () => {
  console.log('Sitemap created!');
});

generator.start();