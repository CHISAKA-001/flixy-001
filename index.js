

let log = console.log();

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '650e26a6afmsh8b8840ff45d6f0dp1f1048jsnc1fa0c512610',
		'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
	}
};

fetch('https://imdb8.p.rapidapi.com/auto-complete?q=NBA', options)
	.then(response => response.json())
	.then(data =>  {
        const list = data.d;

        list.map((item) => {
            const name = item.l;
            const movie = `<h3>${name}</h3>`
            document.querySelector("#magic").innerHTML += movie
        })
    })
	.catch(err => console.error(err));



//game api NBA console.log(response))


