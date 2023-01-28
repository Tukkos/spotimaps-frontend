export default function msToHoursAndMinutes(millis) {
  const hours = Math.floor((millis / 3600000)).toFixed(0);
  const minutes = Math.floor((millis - (hours * 3600000)) / 60000).toFixed(0);  
  
  return hours + ':' + (minutes < 10 ? '0' : '') + minutes;
}
