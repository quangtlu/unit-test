import { lcd } from "./lcd-digits";



export function convertToLCD(
  number: number,
  width: number = 1,
  height: number = 1
): string[] {
  let numberLCDs = [] as string[];
  number
    .toString()
    .split("")
    .forEach((numberString) => {
      switch (Number(numberString)) {
        case 0:
          numberLCDs = [...numberLCDs, ...lcd[0]];
          break;
        case 1:
          numberLCDs = [...numberLCDs, ...lcd[1]];
          break;
        case 2:
          
          if(height > 1) {
            lcd[2][0] = "___"
            lcd[2][1] = "   |"
            lcd[2][2] = "___|"
            lcd[2][3] = "|   "
            lcd[2][4] = "|___"
          }          
          
          numberLCDs = [...numberLCDs, ...lcd[2]];
          break;
        case 3:
          numberLCDs = [...numberLCDs, ...lcd[3]];
          break;
        case 4:
          numberLCDs = [...numberLCDs, ...lcd[4]];
          break;
        case 5:
          numberLCDs = [...numberLCDs, ...lcd[5]];
          break;
        case 6:
          numberLCDs = [...numberLCDs, ...lcd[6]];
          break;
        case 7:
          numberLCDs = [...numberLCDs, ...lcd[7]];
          break;
        case 8:
          numberLCDs = [...numberLCDs, ...lcd[8]];
          break;
        case 9:
          numberLCDs = [...numberLCDs, ...lcd[9]];
          break;
        default:
          break;
      }
    });
    
  return numberLCDs;
}
