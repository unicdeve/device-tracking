import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

const useAuthRoute = (type = 'auth') => {
  const history = useHistory();
  let token = '';
  if (localStorage.token) {
    token = JSON.parse(localStorage.getItem('token'));
  }

  useEffect(() => {
    if (type === 'auth') {
      if (!token) return;
      history.push('/home');
    } else if (type === 'private') {
      if (token) return;
      history.push('/');
    }
  }, [token, history, type]);
};

export default useAuthRoute;
