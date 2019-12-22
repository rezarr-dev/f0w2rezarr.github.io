//ANCHOR WEDNESDAY:
//LOOPING - PLAY WITH ASTERISKS

//1. Menyusun Barisan Bintang

var rows1 = 5; // input the number of rows

for (i = 0; i < rows1; i++) {
    console.log('*')
}

//2. Menyusun Barisan Bintang Dengan Nested Looping

var rows2 = 5; // input the number of rows

for (i = 0; i < rows2; i++) {
    var collumns = ''
    for (j = 0; j < rows2; j++) {
        collumns += '*'
        
   }
   console.log(collumns) 
}

//3. Menyusun Barisan Tangga Bintang Dengan Nested Looping

var rows3 = 5; // input the number of rows

for (i = 0; i < rows3; i++) {
    var collumns = ''
    for (j = 0;j <= i; j++) {
        collumns += '*'            
   }   console.log(collumns) 
}