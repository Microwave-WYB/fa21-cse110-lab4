function callback() {
    let d = new Date();
    let time = d.toLocaleDateString();
    console.log(time);
}

let interval = setInterval(callback,1000)

