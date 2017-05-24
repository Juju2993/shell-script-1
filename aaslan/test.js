const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


class phonebook {
    constructor(name, phone) {
        this.name = name;
        this.phone = phone;
    }
}

const person = [];
	person[0] = new phonebook('hasmik', '091-111-111'),
    person[1] = new phonebook('vardan', '092-222-222'),
    person[2] = new phonebook('levon', '093-333-333');

rl.question('Hi this is our phonebook of Hasmik, Vardan and Levon. If you want to find out their phone numbers please type one of their names  ', (answer) => {
    // TODO: Log the answer in a database
    let chosen = [];
    for (let i=0; i<person.length; i++){
    	if(answer.toLowerCase() == person[i].name){
    		chosen = person[i];
    		break;
    	} else {
    		chosen = '';
    	}
    }
    if(chosen){
    	console.log(`Calling ${chosen.name} ${chosen.phone}`);
    } else {
    	console.log('Such person was not found');
    }

    rl.close();
});
