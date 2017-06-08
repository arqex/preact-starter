import urlhub from 'urlhub';
import pushStrategy from 'urlhub/pushStrategy';

import Home from './modules/pages/home';
import Layout from './modules/tags/layout';
import Article from './modules/pages/article';
import Error404 from './modules/pages/errors/404';
import Credit from './modules/pages/credit';
import Blog from './modules/pages/blog';

var routes = [
  { path: '/', cb: Home },
  { path: '/blog/:title', cb: Article },
  { path: '/blog', cb: Blog },
  { path: '/credit', cb: Credit },

  { path: '*', cb: Error404 }
];

var router = urlhub.create( routes, {strategy: pushStrategy} );
router.start();

export default router;
