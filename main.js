let background2 = ['rgb(0, 255, 42)', 'rgb(0, 38, 255)', 'rgb(255, 0, 64)', 'rgb(255, 115, 0)', 'rgb(0, 217, 255)',
'rgb(0, 255, 191)', 'rgb(238, 255, 0)', 'rgb(255, 0, 234)', 'rgb(255, 0, 0)'];

let width2 = ['10%', '8%', '15%', '5%', '20%','25%', '12%', '17%', '7%'];

let height2 = ['20%', '25%', '30%', '40%', '5%','10%', '28%', '18%', '45%'];

let margin2 = ['20%', '40%', '35%', '50%', '18%','10%', '5%', '10%', '38%'];

let borderWidth2 = ['1px', '10px', '20px', '4px', '18px','2px%', '8px', '13px', '15px'];

let border2 = ['rgb(255, 0, 0)', 'rgb(255, 0, 234)', 'rgb(238, 255, 0)', 'rgb(0, 255, 191)', 'rgb(0, 217, 255)',
'rgb(255, 115, 0)', 'rgb(255, 0, 64)', 'rgb(0, 38, 255)', 'rgb(0, 255, 42)'];

// let count =0;
// if(count <=2){
// function interval() {
//       $('.kolo').animate({
//             background: background2[count],
//             width: width2[count],
//             height: height2[count],
//             margin: margin2[count],
//             border:border2[count]

//       },1000),

//       $('.kolo').css({
//          background: background2[count]
//       })

//       count++;
//       if(count ===9){
//                         count = 0;
//       }
// }
// SetInterval(interval, 1000)
// }

let i = 1;
let count =0;
if(count <=2){
      setInterval(function() {
      func(i);
      $('.kolo').animate({
            background: background2[count],
            width: width2[count],
            height: height2[count],
            margin: margin2[count],
            border:border2[count]

      },1000),

      $('.kolo').css({
            background: background2[count]
      })

      count++;
      if(count ===9){
            count = 0;
      }
      }, 1000)
}