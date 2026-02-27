let result =0;
const { sumhandler} = require('./addition');

const requesthandler = (req,res)=>{
    if(req.url === '/'){
        res.setHeader('Content-Type','text/html');
        res.write(`
            <html>
            <head>
            <title>calculator</title>
            </head>
            <body>
            <h2>welcome to the calculator</h3>
           <a href="/calculator"> calculator page
           </a>
           </body>
           </html>
            
            `)
            res.end();
            
        }
        else if(req.url === '/calculator'){
            res.setHeader('Content-Type','text/html');
            res.write(`
                 <html>
            <head>
            <title>calculator</title>
            </head>
            <body>
            <form method="POST" action ="/submit">
        <input type="number" name= "number1" placeholder="enter your first number..."><br>
        <input type="number" name= "number2" placeholder="enter your second number..."><br>
        <button type="submit"> Sum</button>
            </form>
           </body>
           </html>
                `)
                res.end();
        }
        else if(req.url.toLowerCase()==='/submit' && req.method === 'POST'){
            let body =[];
            req.on('data',(chunks)=>{
                body.push(chunks);
                
            });
            req.on('end',()=>{
                const fullbody = Buffer.concat(body).toString();
                const params = new URLSearchParams(fullbody);
                const bodyobject = Object.fromEntries(params);
                res.statusCode = 302;
                res.setHeader('Location', '/calculator-result');
                res.end();
                


                result = sumhandler( Number(bodyobject.number1),
  Number(bodyobject.number2));

                
            })
        }
        else if (req.url === '/calculator-result') {
  res.setHeader('Content-Type', 'text/html');
  res.write(`
    <html>
      <body>
        <h2>Calculator Result</h2>
        <h3>Sum is:${result} </h3>
        <a href="/calculator">Calculate again</a>
      </body>
    </html>
  `);
  res.end();
}

}

exports.requesthandler = requesthandler;