# education_project
:book: This is a collection of my work for learning.

## algorithms
---

>**binary_search**
Initial data: growing array of numbers, desired number.
The binary_search function returns the index of an array element that matches the searched element.
Lead time: O(log n).

>**selection_sort**
Initial data: random array of numbers.
We find the minimum element in the array and put it at the beginning of the array. In the remaining (unsorted) part of the array, we again look for the minimum element, then put it after the previous minimum element. Etc.
Lead time: O(n^2).

>**recursion sum**
Initial data: random array of numbers.
Each recursive call brings us closer to an empty array. This reduces the execution time of the function.

>**arr_length**
Initial data: random array of numbers.
The function considers the length of the array by recursion. Method length is not used.

>**max_element**
Initial data: random array of numbers.
The max_element function in an array finds the maximum element using recursion.

>**quicksort**
Initial data: random array of numbers.
We select the **pivot value**, then we check the entire remaining array relative to it. If the value is less than the pivot value, we write it to the **less** array, if it is greater, then we write it to the **greater** array. 
Then we call the **quicksort** function recursively for the **less** and **greater** arrays, after which we add **less**, **pivot value** and **greater** to the original array using the push method. Returns the already sorted source array.
Lead time: O(n^2).
Average performance: O(n logn)

>**field_splitting**
Initial data: two sides of the field.
If the field exists, then the **field_splitting** function recursively checks whether the considered part of the field can be divided into squares without a remainder, with a side equal to the smaller side of the considered part of the field.

>**BFS**
Initial data: empty queue, list of friends in the form of a graph-object.
We are looking for a mango merchant among friends. First, add your closest friends to the queue. The **BFS** function then checks each friend in the queue. If a friend does not trade mangoes, then we add his friends to the queue for verification. If the friend is a mango merchant, then we end the algorithm. Verified friends are not verified again.

>**PolishNotation**
Initial data: string with Polish notation.
We split the string into elements of the Polish notation using the ConvertString function, which will return an array. The resulting array is sent to the CalculatePolishNotation function, where we calculate the result of the expression using the stack.
