# Won't You Be My Neighbor?
11/2020
## By Nick Hennessy
A web form to create a string of numbers and words based on a user's numerical input. Different numbers will produce different results.
## Technologies used
* html
* CSS
* markdown

### Setup and Installation:
* Open terminal(mac) or command line(pc)
* Navigate to the location you would like this project using the command "cd (name of location)"
* Enter "git clone https://github.com/njhnny/neighbor/"

or

Navigate to the project's github page in your browser and download the code using the green button in the top right corner.

### View Online
https://njhnny.github.io/neighbor/

### Specs
Describe: beepIt()  

Test: It should return an array of numbers and strings from 0 to the user inputted number.  
Numbers containing the digit 1 should be replaced with "Beep!." Numbers containing the digit 2 should be replaced with "Boop!," and numbers containing the digit 3 should be replaced with "Beep!." For numbers containing a combination of these digits, the rules apply from lowest to highest priority based on the order listed above.  

Expect: input "5" to produce "0,Beep!,Boop!,Won't you be my neighbor?,4,5"  

Describe: join  

Test: return values should now be separated by spaces. Response should be replaced with a new one every time a different number is submitted.  

Expect: input "5" to produce "0, Beep!, Boop!, Won't you be my neighbor?, 4, 5"  

## Contact
njhnny@gmail.com
### [Github](https://github.com/njhnny/neighbor)
## License
 
MIT License (MIT)

Copyright (c) 2020 Nick Hennessy