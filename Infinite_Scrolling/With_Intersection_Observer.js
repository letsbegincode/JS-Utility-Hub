async function fetchData(url, page = 1) {
  const response = await fetch(`${url}?page=${page}`);
  if (!response.ok) throw new Error('Failed to fetch data');
  return response.json();
}

function setupInfiniteScrollWithObserver(containerId, fetchUrl) {
  const container = document.getElementById(containerId);
  let page = 1;

  const observer = new IntersectionObserver(async (entries) => {
    if (entries[0].isIntersecting) {
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
    }
  });

  const sentinel = document.createElement('div');
  sentinel.id = 'sentinel';
  container.appendChild(sentinel);
  observer.observe(sentinel);
}
