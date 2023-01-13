// Get the icons to represent the weather
const Icons = (icon: string) => {
    switch (icon) {
        case 'Thunderstorm':
            icon='icons/thunderstorms-rain.svg'
            console.log("TORMENTA")
            break;    
        case 'Drizzle':
            icon='icons/drizzle.svg'
            console.log('LLOVIZNA');
            break;
        case 'Rain':
            icon='icons/rain.svg'
            console.log('LLUVIA');
            break;
        case 'Snow':
            icon='icons/snow.svg'
            console.log('NIEVE');
            break;                     
        case 'Clear':
            icon='icons/clear-day.svg'
            console.log('LIMPIO');
            break;
        case 'Clouds':
            icon='icons/fog.svg'
            console.log('NUBES');
            break;  
        case 'Mist':
            icon='icons/mist.svg'
            console.log('NIEBLA');
            break;       
        default:
            icon='icons/mist.svg'
            console.log('NUBLADO');    
    }
  return icon
}

export default Icons;