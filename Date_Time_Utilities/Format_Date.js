function formatDate(date, template = 'YYYY-MM-DD') {
    const options = {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    };
    const formattedDate = new Date(date).toLocaleDateString('en-CA', options);
  
    return template
      .replace('YYYY', formattedDate.split('-')[0])
      .replace('MM', formattedDate.split('-')[1])
      .replace('DD', formattedDate.split('-')[2]);
  }
  
  export { formatDate };