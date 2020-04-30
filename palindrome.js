function isPalindrome(number) {
    temp = parseInt(number);
    sum = 0;
    while (temp!=0) {
        digit = temp%10;
        temp = parseInt(temp/10);
        sum = (sum*10) + digit; 
        //console.log(sum);
    }
    if (sum == number) {
        return true;
    } else {
        return false;
    }
}
console.log(isPalindrome(121));