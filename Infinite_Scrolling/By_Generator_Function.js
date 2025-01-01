function* dataFetcher(url) {
  let page = 1;
  while (true) {
    const response = await fetch(`${url}?page=${page}`);
    if (!response.ok) return;
    const data = await response.json();
    page++;
    yield data.items;
  }
}

async function setupInfiniteScrollWithGenerator(containerId, fetchUrl) {
  const container = document.getElementById(containerId);
  const fetcher = dataFetcher(fetchUrl);

  const appendItems = async () => {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
    if (scrollHeight - scrollTop <= clientHeight + 100) {
      const { value: items, done } = await fetcher.next();
      if (done) return;

      items.forEach((item) => {
        const div = document.createElement('div');
        div.textContent = item.name;
        container.appendChild(div);
      });
    }
  };

  window.addEventListener('scroll', appendItems);
}
