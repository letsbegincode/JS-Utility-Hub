function countdownTimer(endTime, onTick, onComplete) {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = new Date(endTime).getTime() - now;
  
      if (distance < 0) {
        clearInterval(interval);
        if (typeof onComplete === 'function') onComplete();
        return;
      }
  
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
      if (typeof onTick === 'function') {
        onTick({ days, hours, minutes, seconds });
      }
    }, 1000);
  }
  
  export { countdownTimer };