
export default function formatTime(tenMilliseconds) {
    const mins = Math.floor(tenMilliseconds / 60000) % 60;
    const secs = Math.floor(tenMilliseconds / 100) % 60;
    const msecs = Math.floor(tenMilliseconds) % 100
    return `${mins.toString().padStart(2,'0')}:${secs.toString().padStart(2,'0')}:${msecs.toString().padStart(2,'0')}`;
  };