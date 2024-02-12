import { useState, useEffect } from 'react';

const API_ROOT = 'http://localhost:9000/';

export function useApi(path) {
  const [response, setResponse] = useState();
  
  useEffect(() => {
    try {
      var url_path = API_ROOT + path;
      //fetch('${API_ROOT}/${path}')
      fetch(url_path)
      .then(res => res.text())
      .then(res => setResponse(res));
    } catch (error) {
      console.log(error)
    }
  }, []);

  return {
    response
  };
}
