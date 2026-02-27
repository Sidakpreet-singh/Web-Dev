const fs = require('node:fs');
const http = require('http');
const { text, buffer, json } = require('node:stream/consumers');
const { log } = require('node:console');
// var oneLinerJoke = require('one-liner-joke');
 

// fs.writeFile("hello.txt","hello sidak",function(err){
//     if(err){
//         console.error(err);
//     }
//     else{console.log("done")}
// })
// fs.appendFile("hello.txt","hello ,how are u",function(err){
//     if(err){
//         console.error(err);
//     }
//     else{console.log("done")}
// })
// // fs.rename("hello.txt","hey.md",function(err){
// //     if(err){
// //         console.error(err);
// //     }
// //     else{console.log("done")}
// // })

// try{
//     const data = fs.readFile("hello.txt", "utf-8",(err)=>{
//         if(err) throw(err);
//         console.log(data);
//     });
// }
// catch(err){
//     console.error(err);
// }
// // fs.rmdir("myFolder", (err) => {
// //     if (err) console.log(err);
// // });

// var getRandomJoke = oneLinerJoke.getRandomJoke();
// console.log(getRandomJoke)
const port = 3001;
const handler =(req,res)=>{
   
    if(req.url === '/'){
    res.setHeader('content-type','text/html');
    res.write('<html>');
    res.write('<head><title>node response</title></head>');
    res.write('<body><h1>hello response</h1><br><h3>welcome to  the products section</p>');
    res.write('<form action="/submit" method="POST" >');
    res.write('<input type="text" name= "username" placeholder="enter your name..."><br>');
    res.write('<label for="gender" >Gender:</label><br>');
    res.write('<label for="male" > Male </label>');
    res.write('<input type ="radio" id="male" name="gender" value="male" >');
    res.write('<label for="female" > female </label>');
    res.write('<input type ="radio" id="female" name="gender" value="female" ><br>');
    res.write('<button type="submit">Submit</button>');
    res.write('</form>');





    res.write('</body>');
    res.write('</html>');
    res.end();
    }
    else if(req.url === "/products"){
          res.setHeader('content-type','text/html');
    res.write('<html>');
    res.write('<head><title>node response</title></head>');
    res.write('<body><h1>hello response</h1><br><h3>welcome to  the Home page</h3></body>');
    res.write('</html>');
    res.end();

    }
    else if(req.url.toLowerCase() === "/submit" && req.method == "POST"){
        // res.setHeader('content-type','text/html');
    // res.write('<html>');
    // res.write('<head><title>node response</title></head>');
    // res.write('<body><h1>error</h1></body>');
    // res.write('</html>');
    let body =[];
    req.on('data',(chunk)=>{
        console.log(chunk);
        body.push(chunk);
    });

    req.on('end',()=>{
        const fullbody = Buffer.concat(body).toString();
        console.log(fullbody);
        const params = new URLSearchParams(fullbody);
        console.log(params);
        // for(const[key,val] of params.entries()){
        //     bodyobject[key]=val;

        // }
        // console.log(bodyobject);
        const bodyobject = Object.fromEntries(params);

        
            fs.writeFileSync("res.txt",JSON.stringify(bodyobject));
            res.statusCode=302;
            res.setHeader('Location','/products');
    });



    }

};

module.exports = {
    handler,
    port}
    