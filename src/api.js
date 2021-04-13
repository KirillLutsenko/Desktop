const URL = 'http://fs.mh.net.ua/ajax/lsjson.php?dir=global/video&idu=1';

export const getInfo = () => fetch(URL)
  .then((res) => {
    if (!res.ok) {
      throw new Error(`${res.status} - ${res.statusText}`);
    }

    return res.json();
  })
  .then(res => res);
