console.log ('ola')

function f() {
    const a= 1
    

    return() => console.log(this.a);
}

function counter() {
    let i = 0

    return () => ++i

}

const m = f()

const n = m.bind({a:2})

n()


//const counter1 = counter();
//const counter2 = counter();

//console.log(counter1())
//console.log(counter1())
//console.log(counter2())
