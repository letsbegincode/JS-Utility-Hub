async function fetchData(url, page = 1) {
  const response = await fetch(`${url}?page=${page}`);
  if (!response.ok) throw new Error('Failed to fetch data');
  return response.json();
}

async function setupInfiniteScroll(containerId, fetchUrl) {
  const container = document.getElementById(containerId);
  let page = 1;
  let loading = false;

  window.addEventListener('scroll', async () => {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
    if (scrollHeight - scrollTop <= clientHeight + 100 && !loading) {
      loading = true;
      try {
        const data = await fetchData(fetchUrl, page);
        data.items.forEach((item) => {
          const div = document.createElement('div');
          div.textContent = item.name;
          container.appendChild(div);
        });
        page++;
      } catch (error) {
        console.error('Error fetching data:', error);
      }
      loading = false;
    }
  });
}
