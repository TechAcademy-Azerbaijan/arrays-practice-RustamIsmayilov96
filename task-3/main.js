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
    let max = 0
    let min = input_data[0]
    let index
    let indeks
    for(let i = 1; i<input_data.length; i++){
    if(input_data[i]>max){
        max = input_data[i]
        index = i
    }
    if(input_data[i]<min){
        min = input_data[i]
        indeks = i
    }
    }
    
    let temp = input_data[index]
    input_data[index]= min
    input_data[indeks] = max
    console.log(input_data);
});
