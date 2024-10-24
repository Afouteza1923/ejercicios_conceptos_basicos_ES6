//TODO Dado el siguiente javascript, utiliza .filter() para mostrar por consola 
//TODO los streamers que incluyan la palabra introducida en el input. De esta forma, si 
//TODO introduzco 'Ru' me deberia de mostrar solo el streamer 'Rubius'. Si
//TODO introduzco 'i', me deberia de mostrar el streamer 'Rubius' e 'Ibai'.

const streamers = [
	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'},
	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];

document.querySelector ('input[data-function="toFilterStreamers"]').addEventListener('input', function(event) {
    const searchText = event.target.value.toLowerCase();
    const filteredStreamers = streamers.filter(streamer => streamer.name.toLowerCase().includes(searchText));
    
    console.log(filteredStreamers);
});