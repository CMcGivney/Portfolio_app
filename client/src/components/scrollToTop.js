import { useEffect} from 'react';
import { withRouter} from 'react-router-dom';

function ScrollToTop({history}) {
  useEffect(() => {
    const unListen = history.listen(() => {
      console.log(history)
      window.scrollTo(0, 0);
    });
    return () => {
      unListen();
    }
  }, [history]);

  return (null);
}

export default withRouter(ScrollToTop);