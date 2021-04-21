import { useState, useEffect} from 'react';
import youtube from '../apis/youtube';

const useVideos = (defaultSearchTern) => {
   const [videos, setVideos] = useState([]);

   useEffect(() => {
    search(defaultSearchTern)
  }, [defaultSearchTern])

   const search = async (term) => {
    const response = await youtube.get('/search', {
       params: {
         q: term
       }
     });
     
     setVideos(response.data.items);
   };
    return [videos, search]

};

export default useVideos;