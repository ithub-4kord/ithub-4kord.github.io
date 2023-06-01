package main

import (
	"fmt"
	"math/rand"
	"time"
)

func BubbleSort(arr []int) {
	n := len(arr)
	for i := 0; i < n-1; i++ {
		for j := 0; j < n-i-1; j++ {
			if arr[j] > arr[j+1] {
				arr[j], arr[j+1] = arr[j+1], arr[j]
			}
		}
	}
}

func MergeSort(arr []int) []int {
	if len(arr) <= 1 {
		return arr
	}

	mid := len(arr) / 2
	left := MergeSort(arr[:mid])
	right := MergeSort(arr[mid:])

	return merge(left, right)
}

func merge(left, right []int) []int {
	result := make([]int, 0, len(left)+len(right))
	i, j := 0, 0

	for i < len(left) && j < len(right) {
		if left[i] <= right[j] {
			result = append(result, left[i])
			i++
		} else {
			result = append(result, right[j])
			j++
		}
	}

	result = append(result, left[i:]...)
	result = append(result, right[j:]...)

	return result
}

func GenerateRandomArray(n int) []int {
	arr := make([]int, n)
	rand.Seed(time.Now().UnixNano())

	for i := 0; i < n; i++ {
		arr[i] = rand.Intn(1000) // Assuming a range of 0 to 1000 for the elements
	}

	return arr
}

func MeasureTime(fn func(arr []int), arr []int) time.Duration {
	start := time.Now()
	fn(arr)
	return time.Since(start)
}

func MeasureTimeMerge(fn func(arr []int) []int, arr []int) time.Duration {
	start := time.Now()
	fn(arr)
	return time.Since(start)
}

func PrintTable(results map[string]map[string]time.Duration) {
	fmt.Println("╔═══════════════╦═════════════════════╦════════════════════╗")
	fmt.Println("║     Scenario  ║   Bubble Sort       ║   Merge Sort       ║")
	fmt.Println("╠═══════════════╬═════════════════════╬════════════════════╣")

	sizes := []int{10, 1000}
	scenarios := []string{"Best Case", "Average Case", "Worst Case"}

	for _, size := range sizes {
		fmt.Println("╠═══════════════╬═════════════════════╬════════════════════╣")
		for _, scenario := range scenarios {
			bubbleTime := results["Bubble Sort"][fmt.Sprintf("%d - %s", size, scenario)]
			mergeTime := results["Merge Sort"][fmt.Sprintf("%d - %s", size, scenario)]
			fmt.Printf("║   %8d    ║   %17s ║   %16s ║ %s\n", size, bubbleTime, mergeTime, scenario)
		}
	}

	fmt.Println("╚═══════════════╩═════════════════════╩════════════════════╝")
}

func main() {
	results := make(map[string]map[string]time.Duration)

	// Bubble Sort
	results["Bubble Sort"] = make(map[string]time.Duration)
	results["Bubble Sort"]["10 - Best Case"] = MeasureTime(BubbleSort, []int{1, 2, 3, 4, 5, 6, 7, 8, 9, 10})
	results["Bubble Sort"]["10 - Average Case"] = MeasureTime(BubbleSort, GenerateRandomArray(10))
	results["Bubble Sort"]["10 - Worst Case"] = MeasureTime(BubbleSort, []int{10, 9, 8, 7, 6, 5, 4, 3, 2, 1})

	// Merge Sort
	results["Merge Sort"] = make(map[string]time.Duration)
	results["Merge Sort"]["10 - Best Case"] = MeasureTimeMerge(MergeSort, GenerateRandomArray(10))
	results["Merge Sort"]["10 - Average Case"] = MeasureTimeMerge(MergeSort, GenerateRandomArray(10))
	results["Merge Sort"]["10 - Worst Case"] = MeasureTimeMerge(MergeSort, GenerateRandomArray(10))

	// Bubble Sort
	bestCaseArray := make([]int, 1000)
	for i := 0; i < 1000; i++ {
		bestCaseArray[i] = i
	}
	results["Bubble Sort"]["1000 - Best Case"] = MeasureTime(BubbleSort, bestCaseArray)
	results["Bubble Sort"]["1000 - Average Case"] = MeasureTime(BubbleSort, GenerateRandomArray(1000))
	worstCaseArray := make([]int, 1000)
	for i := 0; i < 1000; i++ {
		worstCaseArray[i] = 1000 - i
	}
	results["Bubble Sort"]["1000 - Worst Case"] = MeasureTime(BubbleSort, worstCaseArray)

	// Merge Sort
	results["Merge Sort"]["1000 - Best Case"] = MeasureTimeMerge(MergeSort, GenerateRandomArray(1000))
	results["Merge Sort"]["1000 - Average Case"] = MeasureTimeMerge(MergeSort, GenerateRandomArray(1000))
	results["Merge Sort"]["1000 - Worst Case"] = MeasureTimeMerge(MergeSort, GenerateRandomArray(1000))

	// Print the results table
	PrintTable(results)
}
