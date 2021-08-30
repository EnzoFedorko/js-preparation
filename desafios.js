function fibonacci() {
    let n = prompt("Dime la cantidad de digitos que quieres calcular");
    if (n == 0) {
        document.write('no se puede calcular una cantidad 0')
        console.log('no se puede calcular una cantidad 0')
    }
    else {
        let f = new Array(n - 1);
        f[0] = 0;
        f[1] = 1;
        switch (n) {
            case 1:
                console.log(f[0]);
                break;
            case 2:
                console.log(f)
                break;
            default:
                for (i = 2; i <= n - 1; i++) {
                    f[i] = f[i - 1] + f[i - 2];
                }
                console.log('la secuencia de fibonacci hasta el numero ' + n + ' es: ' + f);
                document.write('la secuencia de fibonacci hasta el numero ' + n + ' es: ' + f);
                break;
        }
    }
}
fibonacci();
