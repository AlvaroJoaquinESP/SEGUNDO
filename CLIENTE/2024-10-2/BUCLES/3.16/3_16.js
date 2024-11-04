let num = 20;


const fibonacci = (num) => {
    let a = 0;

    let b = 1;

    document.write(a);
    document.write(b);

    //18 ya que ya he mostrado los dos primeros.
    for(i = 2; i<18; i++) {
        let c = a + b;
        document.write(c + ' , ');
        a = b;
        b = c;
    }
}


fibonacci(num);