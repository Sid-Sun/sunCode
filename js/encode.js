var string = "Sagar is an idiot.", current, result=0;
console.log(string);
string = string.toLowerCase();
var splitString=string.split(' ');
for(var i=0; i<splitString.length;i++){
    current = splitWord(splitString[i]);
    if (i==0){
        result = current.toString();
    } else {
        result = result.toString() + " " + current.toString();
    }
}
console.log(result);
function splitWord(string) {
    var word = string, result=0, current;
    for(var i=0;i<string.length;i++){
        current = sunCode(word[i]);
        if (i==0){
            result = current.toString()
        } else {
            result = result.toString() + current.toString();
        }
    }
    return result;
}
function sunCode(letter) {
    let code;
    switch (letter) {
        case '0':
            code=0;
            break;
        case '1':
            code=1;
            break;
        case '2':
            code=10;
            break;
        case '3':
            code=11;
            break;
        case '4':
            code=100;
            break;
        case '5':
            code=101;
            break;
        case '6':
            code=110;
            break;
        case '7':
            code=111;
            break;
        case '8':
            code=1000;
            break;
        case '9':
            code=1001;
            break;
        case 'a':
            code=1010;
            break;
        case 'b':
            code=1011;
            break;
        case 'c':
            code=1100;
            break;
        case 'd':
            code=1101;
            break;
        case 'e':
            code=1110;
            break;
        case 'f':
            code=1111;
            break;
        case 'g':
            code=10000;
            break;
        case 'h':
            code=10001;
            break;
        case 'i':
            code=10010;
            break;
        case 'j':
            code=10011;
            break;
        case 'k':
            code=10100;
            break;
        case 'l':
            code=10101;
            break;
        case 'm':
            code=10110;
            break;
        case 'n':
            code=10111;
            break;
        case 'o':
            code=11000;
            break;
        case 'p':
            code=11001;
            break;
        case 'q':
            code=11010;
            break;
        case 'r':
            code=11011;
            break;
        case 's':
            code=11100;
            break;
        case 't':
            code=11101;
            break;
        case 'u':
            code=11110;
            break;
        case 'v':
            code=11111;
            break;
        case 'w':
            code=100000;
            break;
        case 'x':
            code=100001;
            break;
        case 'y':
            code=100010;
            break;
        case 'z':
            code=100011;
            break;
        case "'":
            code=100100;
            break;
        case '"':
            code=100101;
            break;
        case ':':
            code=100110;
            break;
        case ';':
            code=100111;
            break;
        case '?':
            code=101000;
            break;
        case "/":
            code=101001;
            break;
        case "\\":
            code=101010;
            break;
        case '.':
            code=101011;
            break;
        case ',':
            code=101100;
            break;
        case '<':
            code=101101;
            break;
        case '>':
            code=101110;
            break;
        case '!':
            code=101111;
            break;
        case '@':
            code=110000;
            break;
        case '#':
            code=110001;
            break;
        case '$':
            code=110010;
            break;
        case '%':
            code=110011;
            break;
        case '^':
            code=110100;
            break;
        case '&':
            code=110101;
            break;
        case '*':
            code=110110;
            break;
        case '(':
            code=110111;
            break;
        case ')':
            code=111000;
            break;
        case '-':
            code=111001;
            break;
        case '_':
            code=111010;
            break;
        case '+':
            code=111011;
            break;
        case '=':
            code=111100;
            break;
        case '|':
            code=111101;
            break;
        case '{':
            code=111110;
            break;
        case '}':
            code=111111;
            break;
        case '[':
            code=1000000;
            break;
        case ']':
            code=1000001;
            break;
        case '~':
            code=1000010;
            break;
        case '`':
            code=1000011;
            break;
        default:
            console.log("something else");
    }
    return zeroPad(code, 8);
}
function zeroPad(num, places) {
    var zero = places - num.toString().length + 1;
    return Array(+(zero > 0 && zero)).join("0") + num;
}
