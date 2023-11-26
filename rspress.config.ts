import * as path from 'path';
import { defineConfig } from 'rspress/config';

export default defineConfig({
  root: path.join(__dirname, 'docs'),
  title: 'Tran',
  description: '简洁, 快速, 划词翻译',
  icon: '/icon.png',
  logo: {
    light: '/icon.png',
    dark: '/icon.png',
  },
  themeConfig: {
    socialLinks: [
      { icon: 'github', mode: 'link', content: 'https://github.com/Borber/tran' },
    ],
  },
});
