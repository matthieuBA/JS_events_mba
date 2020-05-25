// fonctionnalité 1 et 1bis
{
	let footers = document.getElementsByTagName('footer');
	let clicCount = 0;
	if(footers.length > 0) {
		//footers[0].addEventListener("click", function(){ console.log('clique'); }); // fonction 1
		footers[0].addEventListener("click", function(){ console.log('clic numéro '+ (++clicCount)); }); // fonction 1 bis
		
		
	}
}

// fonctionnalité 2
{
	var hamburger = document.querySelector('.navbar-toggler');
	let navBar = document.getElementById('navbarHeader');
	hamburger.addEventListener("click", function(){ 
		/*let theClass = 'collapse';
		if(navBar.classList.contains(theClass))
			navBar.classList.remove(theClass);
		else
			navBar.classList.add(theClass);*/
		navBar.classList.toggle('collapse'); // plus court, plus simple
	});
	
}

// fonctionnalité 3
{
	let card1 = document.querySelectorAll('.card')[0];
	let editCard1 = card1.querySelectorAll('.btn:nth-child(2)')[0];
	editCard1.addEventListener("click", function(){ 
		card1.getElementsByClassName('card-text')[0].style.color = 'red';
	});
}

// fonctionnalité 4
{
	let card2 = document.querySelectorAll('.card')[1];
	let editCard2 = card2.querySelectorAll('.btn:nth-child(2)')[0];
	editCard2.addEventListener("click", function(){ 
		let text = card2.getElementsByClassName('card-text')[0];
		if(text.style.color === 'green')
			text.style.color = '';
		else
			text.style.color = 'green';
	});
}

// fonctionnalité 5
var bootstrapLink = document.getElementsByTagName('link')[0];
function NuclearBomb()
{
	let links = document.getElementsByTagName('link');
	if(links.length > 0)
		links[0].parentNode.removeChild(links[0]);
	else
		document.getElementsByTagName('head')[0].append(bootstrapLink);
}
document.querySelector('.navbar').addEventListener("dblclick", function() { NuclearBomb(); });

// fonctionnalité 6
{
	let cards = document.querySelectorAll('.card');
	for(let i = 0 ; i < cards.length ; i++) {
		let viewBtn = cards[i].querySelectorAll('.btn:nth-child(1)')[0];
		let textNode = cards[i].querySelector('.card-text');
		let imgNode = cards[i].querySelector('.card-img-top');
		viewBtn.addEventListener("mouseenter", function(){ 
			if(textNode.classList.contains('collapse')) {
				// afficher
				textNode.classList.remove('collapse');
				imgNode.style.width = '';
			}
			else {
				// masquer
				textNode.classList.add('collapse');
				imgNode.style.width = '20%';
			}
			
		});
	}
}


// fonctionnalité 7
{
	let btnGris = document.querySelector('a.btn:nth-child(2)');
	btnGris.addEventListener('click', function() {
		let cards = document.querySelectorAll('.card');
		let container = document.querySelector('.album>.container>.row');
		let lastCard = cards[cards.length - 1].parentNode;
		container.insertBefore(lastCard, container.firstChild);
	});
}

// fonctionnalité 8
{
	let btnBlue = document.querySelector('a.btn:nth-child(1)');
	btnBlue.addEventListener('click', function(e) {
		e.preventDefault();
		let cards = document.querySelectorAll('.card');
		let container = document.querySelector('.album>.container>.row');
		let firstCard = cards[0].parentNode;
		container.append(firstCard);
	});
}


// fonctionnalité 9
function resetPage() {
	console.log('on reset la page');
	document.getElementsByTagName('body')[0].className='';
}


document.querySelector('.navbar .container').addEventListener('keypress', function (evt) {
	console.log(evt.which);	
	let body = document.getElementsByTagName('body')[0];
	switch(evt.which) {
		case 65: // A
		case 97: // a
			resetPage();
			body.classList.add('col-4');
			break;
		case 89: //Y
		case 121: //y
			resetPage();
			body.classList.add('col-4');
			body.classList.add('offset-md-4');
			break;
		case 80: // P
		case 112: //p
			resetPage();
			body.classList.add('col-4');
			body.classList.add('offset-md-8');
			break;
		case 66: // B
		case 98: // b
			resetPage();
	}
});
