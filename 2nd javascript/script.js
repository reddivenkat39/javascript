var person = {
	name :" venkat ",
	height :" 5.9",
	weight : 175,
	color : "black"
};

function name()
{
	v = person.name;
}

name();

document.getElementById("navig").innerHTML =  v +person.weight;