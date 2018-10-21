#include <stdio.h>
#include <string.h>
#include <ctype.h>
int splitWord(char* word, int count);
int sunCode(char letter);
int main(){
    char inputString[100];
    char splitStrings[10][10];
    int i,j,count;

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
    for (i=0; i<=(strLength-1); i++){ //-1 because the length is calculated 1 more (space because we're using fgets instead of the deprecated one
        sunCode(word[i]);
//        printf("%c\n",word[i]);
    }
    return 0;
}
int sunCode(char letter){
    char letr = tolower(letter);
    int code=0,code1;
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
        case ' ':
            code=45;
            printf("\nis space\n");
            break;
    }
    printf("%07d ",code);
}