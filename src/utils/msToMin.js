export default function msToMinutesAndSeconds(millis) {
  const minutes = Math.floor((millis / 60000)).toFixed(0);
  const seconds = Math.floor((millis - (minutes * 60000)) / 1000).toFixed(0);

  return minutes + ':' + (seconds < 10 ? '0' : '') + seconds;
}
