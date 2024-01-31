function eventLoop() {
    var a = 1;
    var b = 2;
    var c = 3;

    setTimeout(() => {
        console.log(b);
    }, 1000)
    console.log(c);

}


eventLoop();