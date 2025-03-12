# Quicksort

Implement an iterative (no recu rsive calls) version of quicksort. Use the
template I've provided in `code.js`. Test your new function; I've provided some
basic testing code that uses [jsverify](https://jsverify.github.io/) in
`code.test.js`.

Hint: To make quicksort iterative, think about the part of the array each
recursive call considers.

## Runtime Analysis

Analyse the time complexity of your implementation and give a $\Theta$ bound for
its worst-case runtime. Add your answer, including your reasoning, to this
markdown file.

The quicksort has two functions: quicksort and partition. The quicksort function has a while loop that runs up to n-2 times. Within this while loop is the function call to partition. Inside of partition is a for loop that loops from the variable low to the variable high. The variables change for each call of partition, decreasing the amount of loops. The first one loops n-1 times and decreases after. Thus the next loop is n-2 and the next n-3 until 1. The sum of all these for loops is $\frac{n}{2}(n-1)$. Multiplying the two loop times together gives

$(n-2)(n-1)(\frac{n}{2})$

$= \frac{1}{2}n^3 - \frac{3}{2}n^2 + n$

and thus

$T(n) ∈ \Theta(\frac{1}{2}n^3)$

Sources:

I used this link for a template for quicksort: https://www.geeksforgeeks.org/iterative-quick-sort/

“I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models. All of the work is my own, except where stated otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice.” - Natalie Sleight
