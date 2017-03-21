import withContext from './withContext';
import Menu from '../src/app/components/Menu';

export default function withMenuAwareContext(cmp) {
  const context = {
    menuOpen: () => {
    },
    menuClose: () => {
    },
  };
  return withContext({ context, contextType: Menu.childContextTypes })(cmp);
}
