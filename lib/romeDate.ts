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
  return endDate<referenceDate
    ? 'https://schema.org/EventCompleted'
    : 'https://schema.org/EventScheduled';
}
