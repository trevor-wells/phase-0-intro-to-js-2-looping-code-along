function countDown(num){
    let counter = num;
    while (counter >= 0) {
        console.log(counter)
        counter--
    }
}

function writeCards(names, event){
    const messages = []
    for (let i = 0 ; i < names.length ; i++) {
        messages[i] = `Thank you, ${names[i]}, for the wonderful ${event} gift!`
    }
    return messages
}