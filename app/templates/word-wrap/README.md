### The Word Wrap Kata (via [CodingDojo](http://codingdojo.org/cgi-bin/wiki.pl?KataWordWrap))
	Create a function which breaks words on specified space with new line. Its nothing but merely similar to word-processor.

#### Steps:
		1. Create a public class named WordWrap
		2. Create a method 'wrap' it can be a static method
		3. Create a function which count the number of spliter words of non-space
		4. check for if words already having newline ['\n'] characters - ignore in counts
		5. Check for multiple lines
		6. Remove blank spaces if any in new line eg. Actual - "this is a test" WrappedText = "this\n is a t\nest"