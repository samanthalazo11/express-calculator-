const express = require("express")
const app = express()


const port = 3001

app.listen(port, () => {
    console.log('Express is listening on port: ', port)
});


app.get('/calc/:num1/:num2' ,  (req, res) => {
        const num1 = parseInt(req.params.num1);
        const num2 = parseInt(req.params.num2);
        const sum = num1 + num2
        res.send(`The sum is ${sum}`);


    });

    app.get('/calcquery/:num1/:num2' ,  (req, res) => {
        const num1 = parseInt(req.params.num1);
        const num2 = parseInt(req.params.num2);
        const operation = req.query.operation;

        if ( operation === 'add') {
            const sum = num1+num2;
            res.send(`The sum is ${sum}`);
        }
        else if( operation === 'subtract'){
            const subtract = num1 - num2;
            res.send(`The answer is ${subtract}`)
        }
        else if (operation === 'divide'){
            const divide = num1 / num2
            res.send(`The answe is ${divide}`)
        }
        else if (operation === 'exponents'){
            const exponents = Math.pow(num1,num2);
        }
        else {
            res.send ('There is no operation')
        }



    });
