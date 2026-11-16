export function romeToday(){
  return new Intl.DateTimeFormat('en-CA',{
    timeZone:'Europe/Rome',
    year:'numeric',
    month:'2-digit',
    day:'2-digit'
  }).format(new Date());
}

export function isOnOrBefore(date:string,referenceDate=romeToday()){
  return referenceDate<=date;
}

export function isOnOrAfter(date:string,referenceDate=romeToday()){
  return referenceDate>=date;
}

export function eventSchemaStatus(endDate:string,referenceDate=romeToday()){
  // Google Event structured data does not support EventCompleted. For past events omit eventStatus.
  return endDate<referenceDate ? undefined : 'https://schema.org/EventScheduled';
}


export function romeNowMinute(){
  const parts=new Intl.DateTimeFormat('en-CA',{
    timeZone:'Europe/Rome',
    year:'numeric',month:'2-digit',day:'2-digit',
    hour:'2-digit',minute:'2-digit',hourCycle:'h23'
  }).formatToParts(new Date());
  const map=Object.fromEntries(parts.map(p=>[p.type,p.value]));
  return `${map.year}-${map.month}-${map.day}T${map.hour}:${map.minute}`;
}
