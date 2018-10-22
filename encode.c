#include <stdio.h>
#include <string.h>
#include <ctype.h>
int splitWord(char* word, int count);
int sunCode(char letter);
int main(){
    char inputString[100];
    char splitStrings[10][10];
    long unsigned int j,count;
    long unsigned int i;
    printf("Enter the message.\n");
    fgets(inputString, 100, stdin);
    j=count=0;
    for(i=0;i<=(strlen(inputString));i++){
        if(inputString[i]==' ' || inputString[i]=='\0' ){
            splitStrings[count][j]='\0';
            count++;
            j=0;
        } else {
            splitStrings[count][j]=inputString[i];
            j++;
        }
    }
    printf("\nOriginal String is: %s\n",inputString);
    for (i=0;i<count;i++){
        /*for(j=0;j<=strlen(splitStrings[i]);j++){
            printf("%s",splitStrings[i][j]);
        }*/
        splitWord(splitStrings[i],count);
    }
    return 0;
}
int splitWord(char* word, int count){
    int i;
    int strLength=strlen(word);
    for (i=0; i<=count; i++){
        sunCode(word[i]);
//        printf("%c\n",word[i]);
    }
    return 0;
}
int sunCode(char letter){
    char letr = tolower(letter);
    int code;
    switch (letr){
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
            code=10000;
            break;
        case 'x':
            code=10001;
            break;
        case 'y':
            code=10010;
            break;
        case 'z':
            code=10011;
            break;
        case "'":
            code=10100;
            break;
        case '"':
            code=10101;
            break;
        case ':':
            code=10110;
            break;
        case ';':
            code=10111;
            break;
        case '?':
            code=11000;
            break;
        case '/':
            code=11001;
            break;
        case '\':
            code=11010;
            break;
        case '.':
            code=11011;
            break;
        case ',':
            code=11100;
            break;
        case '<':
            code=11101;
            break;
        case '>':
            code=11110;
            break;
        case '!':
            code=11111;
            break;
        case '@':
            code=100000;
            break;
        case '#':
            code=100001;
            break;
        case '$':
            code=1000101;
            break;
        case '%':
            code=1000110;
            break;
        case '^':
            code=1000111;
            break;
        case '&':
            code=1001000;
            break;
        case '*':
            code=1001001;
            break;
        case '(':
            code=1001010;
            break;
        case ')':
            code=1001011;
            break;
        case '-':
            code=1001100;
            break;
        case '_':
            code=1001101;
            break;
        case '+':
            code=1001110;
            break;
        case '=':
            code=1001111;
            break;
        case '|':
            code=1010000;
            break;
        case '{':
            code=1010001;
            break;
        case '}':
            code=1010010;
            break;
        case '[':
            code=1010011;
            break;
        case ']':
            code=1010100;
            break;
        case '~':
            code=1010101;
            break;
        case '`':
            code=1010110;
            break;
        case ' ':
            code=1010111;
            printf("\nis space\n");
            break;
    }
    printf("%08d",code);
}