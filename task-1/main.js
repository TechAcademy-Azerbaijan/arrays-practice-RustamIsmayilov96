const prompt = require('prompt');
prompt.start();


prompt.get('input', function (err, result) {
    /* 
    Istifadəçinin daxil etdiyi dəyişəni qəbul edirik. 
    Giriş veriləni String type olur. Number type-a çevirmək üçün parseInt() metodundan istifadə edirik.
    Vergüllə daxil edilmiş sətri iki fərqli ədədə bölmək üçün split metodundan istifadə edirik.
    */
    var input = result.input; // "5,2 4 7 12 9"
    var input_data = input.split(','); // ['5', '2 4 7 12 9']
    let count = 0
    let res = 0
    let orta
    let cem = 0
    let say = 0
    for(let i = 0; i<arr.length; i++){
        res = res +arr[i]
        count++
    }orta = res/count
    for(let i = 0; i<arr.length; i++){
    if(arr[i]>orta){
    cem= cem +arr[i]
    say++
    }
    }console.log(cem);
    console.log(say);
    
});
