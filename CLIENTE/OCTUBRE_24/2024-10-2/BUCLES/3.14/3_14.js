let num = Number(prompt('Introduce a number'));

const esDivisor = (num) => {
    for(i = 0; i <= num; i++) {
        if(num % i == 0) {
            document.write(i+ ' , ');
        }
    }
}



esDivisor(num);