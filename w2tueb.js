/*
ANCHOR TUESDAY:
MENGGUNAKAN SWITCH-CASE
*/

var tanggal = 30
var bulan = 3
var tahun = 1922

if(tanggal < 1 || tanggal > 31){
    console.log("tanggal harus 1-31")
    return
}

if(tahun < 1900 || tahun > 2200) {
    console.log("tahun harus 1900-2200")
    return
}

switch(bulan) { 
    case 1: {
        bulan = "Januari"; 
        break; 
    }case 2: {
        bulan = "Februari"; 
        break;
    } case 3: {
        bulan = "Maret"; 
        break;    
    } case 4: {
        bulan = "April"; 
        break;
    } case 5: {
        bulan = "Mei"; 
        break;
    } case 6: {
        bulan = "Juni"; 
        break;
    } case 7: {
        bulan = "Juli"; 
        break;
    } case 8: {
        bulan = "Agustus" 
        break;
    } case 9: {
        bulan = "September"; 
        break;
    } case 10: {
        bulan = "Oktober" 
        break;
    } case 11: {
        bulan = "November"; 
        break;
    } case 12: {
        bulan = "Desember"; 
        break;
    } default: {
        bulan = "error";
    }
}
console.log(`${tanggal} ${bulan} ${tahun}`)