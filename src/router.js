import urlhub from 'urlhub';
import pushStrategy from 'urlhub/pushStrategy';

import Home from 'modules/app/Home';
import Error404 from 'modules/app/404';
import Blog from 'modules/blog/Blog';
import Article from 'modules/blog/Article';
import Credit from 'modules/credit/Credit';

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
