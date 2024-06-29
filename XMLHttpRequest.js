function ajax(url) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();

    xhr.open(get, url, true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.responseType = 'json';
    xhr.onload = () => {
      if (xhr.status >= 200 && xhr.status < 300) {
        // 当HTTP状态码为200-299时，表示请求成功
        resolve(xhr.response);
      } else {
        console.error('请求失败:', xhr.statusText);
      }
    };
    xhr.onerror = () => {
      reject(new Error(`请求失败: ${xhr.status} ${xhr.statusText}`));
    };

    xhr.send();
  })
}

ajax('https://api.example.com/data')
  .then(response => {
    console.log('请求成功!!!:', response);
  })
  .catch(error => {
    console.error('请求失败~~:', error);
  });