var string = "0001110000001010000100000000101000011011 0001001000011100 0000101000010111 000100100000110100010010000110000001110100101011",j=0,k=8;
var splitString=string.split(' ');
for (var r=0;r<splitString.length;r++){
    var currentString=splitString[r];
    j=0;
    k=8;
    let result = run(currentString);
    var final;
    if (r==0){
        final = result.toString();
    } else {
        final = final.toString() + " " + result.toString();
    }
}
console.log(final);
function run(currentString) {
    for (var i = 0; i < (currentString.length / 8); i++) {
        let subString = currentString.substring(j, k);
        if (subString == "00000000") {
            subString = 0;
        } else {
            subString = subString.replace(/^0+/, '');
        }
        current = sunDecode(subString);
        if (i==0){
            result = current.toString()
        } else {
            result = result.toString() + current.toString();
        }
        j = k;
        k = k + 8;
    }
    return result;
}
function sunDecode(code) {
    code = parseInt(code,10);
    var character;
    switch (code) {
        case 0:
            character=0;
            break;
        case 1:
            character=1;
            break;
        case 10:
            console.log("10kio");
            character=2;
            break;
        case 11:
            character=3;
            break;
        case 100:
            character=4;
            break;
        case 101:
            character=5;
            break;
        case 110:
            character=6;
            break;
        case 111:
            character=7;
            break;
        case 1000:
            character=8;
            break;
        case 1001:
            character=9;
            break;
        case 1010:
            character="a";
            break;
        case 1011:
            character="b";
            break;
        case 1100:
            character="c";
            break;
        case 1101:
            character="d";
            break;
        case 1110:
            character="e";
            break;
        case 1111:
            character="f";
            break;
        case 10000:
            character="g";
            break;
        case 10001:
            character="h";
            break;
        case 10010:
            character="i";
            break;
        case 10011:
            character="j";
            break;
        case 10100:
            character="k";
            break;
        case 10101:
            character="l";
            break;
        case 10110:
            character="m";
            break;
        case 10111:
            character="n";
            break;
        case 11000:
            character="o";
            break;
        case 11001:
            character="p";
            break;
        case 11010:
            character="q";
            break;
        case 11011:
            character="r";
            break;
        case 11100:
            character="s";
            break;
        case 11101:
            character="t";
            break;
        case 11110:
            character="u";
            break;
        case 11111:
            character="v";
            break;
        case 100000:
            character="w";
            break;
        case 100001:
            character="x";
            break;
        case 100010:
            character="y";
            break;
        case 100011:
            character="z";
            break;
        case 100100:
            character="'";
            break;
        case 100101:
            character='"';
            break;
        case 100110:
            character=":";
            break;
        case 100111:
            character=";";
            break;
        case 101000:
            character="?";
            break;
        case 101001:
            character="/";
            break;
        case 101010:
            character="\\";
            break;
        case 101011:
            character=".";
            break;
        case 101100:
            character=",";
            break;
        case 101101:
            character="<";
            break;
        case 101110:
            character=">";
            break;
        case 101111:
            character="!";
            break;
        case 110000:
            character="@";
            break;
        case 110001:
            character="#";
            break;
        case 110010:
            character="$";
            break;
        case 110011:
            character="%";
            break;
        case 110100:
            character="^";
            break;
        case 110101:
            character="&";
            break;
        case 110110:
            character="*";
            break;
        case 110111:
            character="(";
            break;
        case 111000:
            character=")";
            break;
        case 111001:
            character="-";
            break;
        case 111010:
            character="_";
            break;
        case 111011:
            character="+";
            break;
        case 111100:
            character="=";
            break;
        case 111101:
            character="|";
            break;
        case 111110:
            character="{";
            break;
        case 111111:
            character="}";
            break;
        case 1000000:
            character="[";
            break;
        case 1000001:
            character="]";
            break;
        case 1000010:
            character="~";
            break;
        case 1000011:
            character="`";
            break;
        default:
            console.log("Invalid sunCode, not recognized.")
    }
    return character;
}
