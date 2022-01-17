import fs from 'fs'
import {Feed} from 'feed'

export function generateRSSFeed(articles) {
    const baseUrl = 'https://euisblue.me/blog';
    const author = {
      name: 'Blue Eu',
      email: 'euisblue@pm.me',
      link: 'https://twitter.com/euisblue',
    };
  
    // Construct a new Feed object
    const feed = new Feed({
      title: 'Articles by Blue Eu',
      description:
        "우당당탕 주니어 개발자의 기록 ",
      id: baseUrl,
      link: baseUrl,
      language: 'en',
      feedLinks: {
        rss2: `${baseUrl}/rss.xml`,
      },
      author,
    });
  
    articles.forEach((post) => {
      const {
        content,
        slug,
        date,
        title,
        subtitle
      } = post;
      const url = `${baseUrl}/${slug}`;
  
      feed.addItem({
        title,
        id: url,
        link: url,
        content,
        subtitle,
        author: [author],
        date: new Date(date),
      });
    });
  
    // Write the RSS output to a public file, making it
    // accessible at ashleemboyer.com/rss.xml
    fs.writeFileSync('public/rss.xml', feed.rss2());
    return -1;
  };