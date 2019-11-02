const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve({
        //     name: 'Ryan Lassiter',
        //     age: 33
        // });
        reject('Something went wrong');
    }, 2000)
});

console.log('before');

promise.then((data) => {
    console.log('1', data);
}).catch((err) => {
    console.log('Error:', err)
});

console.log('after');