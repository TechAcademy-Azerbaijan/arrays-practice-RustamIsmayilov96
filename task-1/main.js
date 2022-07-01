
const prompt = require('prompt');
prompt.start();


prompt.get('input', function (err, result) {
    /* 
    Istifadəçinin daxil etdiyi dəyişəni qəbul edirik. 
    Giriş veriləni String type olur. Number type-a çevirmək üçün parseInt() metodundan istifadə edirik.
    Vergüllə daxil edilmiş sətri iki fərqli ədədə bölmək üçün split metodundan istifadə edirik.
    Massivin elementlərini sətirə çevirmək üçün join() metodundan istifadə edirik.
    */
    var input = result.input; // "5,3 5 6 8 9"
    var input_data = input.split(','); // ['5', '3 5 6 8 9']
    let count = 0
    let res = 0
    let orta
    let cem = 0
    let say = 0
    for(let i = 0; i<input_data.length; i++){
        res = res +input_data[i]
        count++
    }orta = res/count
    for(let i = 0; i<input_data.length; i++){
    if(input_data[i]>orta){
    cem= cem +input_data[i]
    say++
    }
    }console.log(cem);
    console.log(say);
    
});
