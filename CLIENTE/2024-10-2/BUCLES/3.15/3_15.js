let cousin = Number(prompt('Insert a number'));

const isCousin = (cousin) => {
    for(i = 0; i <= cousin; i++) {
        if(cousin % i == 0) {
            document.write(i + ' , ');
        }
    }
}

isCousin(cousin);