/*Binary Digits

0 - 0000
1 - 0001
2 - 0010
3 - 0011
4 - 0100
5 - 0101
6 - 0110
7 - 0111
8 - 1000
9 - 1001
10 -1010
 

we're given an integer and we need to identify what is the closest
power of two thats less than the number

solution: identify the closest power of two and use
the power as the marker for where to place the leftmost "1",
take the difference and repeat the step above

5 = 4 + 0 + 1

13 = 8 + 4 + 0 + 1  // 1 1 0 1

14 = 8 + 4 + 2 + 0 // 1 1 1 0  
 
15 = 8 + 4 + 2 + 1 

16 = 16 + 0 + 0 + 0 + 0 


In a binary string, at each position weather its
0 or 1, 1 represents whether the value of that
number is going to be added to the sum and 
the way we determine what the string is is by looking
at the value of the value at each position and adding to 
each other. The way you determine what that correct string is
is by moving from the right to the left and checking to see if at 
that position the value of that position, for instance 2^2 is greater than a desired
value. if the value of that position is less than the desired value then we keep moving
left until we get tothe position where the value exceeds the desired value and now we just need
to figure out....

*/

// console.log();