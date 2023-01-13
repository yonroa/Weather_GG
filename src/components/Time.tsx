// Calculate the time for the target city
const localTime = (timeZone: number) => {
  const date: Date = new Date();
  const shifTimeTarget = date.getUTCHours() + (timeZone / 3600);
  if (shifTimeTarget > 23) {
    const newShifTimeTarget = shifTimeTarget - 24;
    date.setHours(newShifTimeTarget) 
  } else {
    date.setHours(shifTimeTarget);
  }
  if (date.getHours() < 10 && date.getUTCMinutes() < 10) {
    return ('0' + date.getHours().toLocaleString() + ':' + '0' + date.getUTCMinutes().toLocaleString());
  } else if (date.getHours() < 10) {
    return ('0' + date.getHours().toLocaleString() + ':' + date.getUTCMinutes().toLocaleString());
  } else if (date.getUTCMinutes() < 10) {
    return (date.getHours().toLocaleString() + ':' + '0' + date.getUTCMinutes().toLocaleString());
  } else {
    return (date.getHours().toLocaleString() + ':' + date.getUTCMinutes().toLocaleString())
  }
}

export default localTime;