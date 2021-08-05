function navbar () {
     return `<div id="navbar">
			<div><a href="meals.html">Home</a></div>
			<div id="options">
				<div><a href="Latest.html" id="anchor-1">Latest</a></div>
				<div><a href="Random.html" id="anchor-2">Random</a></div>
			</div>
		</div>`;
}
async function search (q) {

     if (!q) {return;}
     let stream = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=Arabata`);
     let data = await stream.json();
     console.log(data);
}
export {search, navbar};