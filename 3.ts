class ReverseEncoder{
    private reverseChar(char: string): string{
        const lowerCase = "abcdefghijklmnopqrstuvwxyz";
        const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        if(lowerCase.includes(char)){
            return lowerCase[25 - lowerCase.indexOf(char)];
        }else if(upperCase.includes(char)){
            return upperCase[25 - upperCase.indexOf(char)];
        }else{
            return char;
        }
    }
    public encode(input: string): string{
        const reversedChars = input.split('').map(char => this.reverseChar(char)).join('');
        return reversedChars.split(' ').reverse().join(' ');
    }
    public decode(input: string): string{
        const reversedWords = input.split(' ').reverse().join(' ');
        return reversedWords.split('').map(char => this.reverseChar(char)).join('');
    }
}
  
    const reverseEncoder = new ReverseEncoder();
    console.log(reverseEncoder.encode("natpakan lila")); 
    console.log(reverseEncoder.decode("oroz mzgkzpzm")); 
  