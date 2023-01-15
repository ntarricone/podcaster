import { useState, useEffect } from 'react';
import * as xmljs from 'xml-js';

const useFetchData = ({ url, type = 'json' }: { url?: string; type?: 'json' | 'xml' }) => {
  const [data, setData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      if (!url) return;
      setIsLoading(true);

      // check for data in localstorage
      const localData = localStorage.getItem(url);
      if (localData) {
        // parse the data and check if it's less than a day old
        const parsedData = JSON.parse(localData);
        const dataAge =
          (new Date().valueOf() - new Date(parsedData.timestamp).valueOf()) / (1000 * 60 * 60 * 24);
        if (dataAge < 1) {
          setData(parsedData.data);
          setIsLoading(false);
          return;
        }
      }

      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        let responseData = type === 'json' ? await response.json() : await response.text();

        //parse xml data into json
        if (type === 'xml') {
          responseData = xmljs.xml2json(responseData, { compact: true, spaces: 4 });
          responseData = JSON.parse(responseData);
        }

        // save the data to localstorage with a timestamp
        localStorage.setItem(
          url,
          JSON.stringify({
            timestamp: new Date(),
            data: responseData
          })
        );
        setData(responseData);
        setIsLoading(false);
      } catch (err: any) {
        setError(err);
        setIsLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, isLoading, error };
};

export default useFetchData;
