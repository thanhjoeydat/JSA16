// MAU SWITCH CUA THAY
// let i = Number(prompt("nhap so:"))
// switch(i){
//     case 1: 
//         console.log("1. in ra sv");
//         break;
//     case 2: 
//         console.log("2. tao sv");
//         break;
//     case 3:
//         console.log("3. update");
//         break;
//     case 4:
//         console.log("4. xoa");
//         break;
//     case 5:
//         console.log("5. thoat chuong trinh");
//         break;
//     default:
//         console.log("nhap sai roi");
// }


// let array = [2,11,16,7]
// let k = 9
// array[0]
// console.log(array[0] + array[3]);

// if(array[0] + array[3] == k){
//     console.log("gioi qua dung roi");
// } else{
//     console.log("no satisfaction value exists");
// }

//  bai thay chua
// let array = [2,11,16,7]
// let k = 9
// let eptArr = []

// for(i = 0; i < array.length; i++){
//     for(a = i + 1; a < array.length; a++){
//         if(array[i] + array[a] == k){
//             eptArr.push(i)
//             eptArr.push(a)
//         }
//     }

// }
// console.log(eptArr);

// let s = [abcba]
// let m = [tjkjk]

// if(s == s.reverse()){
//     console.log(true);
// }else{
//     console.log(false);
// }

// if (m = m.reverse()) {
//     console.log(true);
// }else{
//     console.log(false)
// }

// for(i = s; i < s.length-1; i++){

// }

function checkReverseString(s) {
    let a = "";
    for(let i = s.length -1; i >= 0; i -- ){
        a = a + s.charAt(i);
    }
    if (s === a){
        console.log(true);
    }else{
        console.log(false);
    }
}

checkReverseString("abcba")



























