// //callback ----> it could lead to callback hell

// function userLeKeAao(user, cb) {
//     setTimeout(function() {
//         cb({user, _id: 123, age: 25});
//     }, 2000);
// }

// function userPost(id, cb) {
//     setTimeout(function() {
//         cb({id, posts: ["hello", "hii", "Good Morning"]});
//     }, 2000);
// }

// userLeKeAao("Pratap", function(usr) {
//     console.log(usr);
//     userPost(usr._id, function(posts) {
//         console.log(posts);
//     })
// }, 2000)








// //Promises

// let pr = new Promise(function(res, rej) {
//     setTimeout(function() {
//         let num = Math.random()*10;
//         if (num < 5) {
//             res("resolved state: " + num);
//         }
//         else {
//             rej("rejected state: " + num);
//         }
//     }, 2000);
// });


// pr.then(function(data) {
//     console.log(data);
// }).catch(function(data) {
//     console.log(data);
// });



// // async/await

let pr = new Promise(function(res, rej) {
    setTimeout(function() {
        let num = Math.random()*10;
        if (num < 5) res("resolved state: " + num);
        else rej("rejected state: "+ num);
    }, 2000);
})

async function abcd() {
    try {
        let resData = await pr;
        console.log(resData);
    }catch(err) {
        console.log(err);
    }
}

abcd();