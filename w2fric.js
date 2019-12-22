//ANCHOR WEEK 2 FRIDAY:
//[Exercises 12] Konversi Menit

function konversiMenit(menit) {
    var a = Math.floor(menit / 60)
    var b = menit % 60
    if (b < 10){
      b = '0' + b
    }
    return `${a}:${b}`

  }
  
  // TEST CASES
  console.log(konversiMenit(63)); // 1:03
  console.log(konversiMenit(124)); // 2:04
  console.log(konversiMenit(53)); // 0:53
  console.log(konversiMenit(88)); // 1:28
  console.log(konversiMenit(120)); // 2:00