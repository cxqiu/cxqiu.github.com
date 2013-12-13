---
layout: post
title: "Maximum-Subarray"
description:
category: Algorithm
tags: [Divide-and-Conquer, Algorithm]
---
{% include JB/setup %}
###Description###
Find the contiguous subarray within an array (containing at least one number) which has the largest sum.   
For example, given the array [-2, 1, -3, 4, -1, 2, 1, -5, 4], the contiguous subarray [4,-1,2,1] has the largest sum=6.
###Algorithm###
1. we could solve this problem in o(n) time, define f[i] be the largest subarray ended at i, so we need only to process each element once. f[i+1] =  f[i]+array[i+1]>array[i+1]?f[i]+array[i+1]:array[i+1]. 
2. Here, we will solve this problem with a divide and conquer algorithm, which will be more subtle.  
First, we divide the problem into two smaller sub problems, process(array[], left, mid) and process(array[], mid+1, right), here process(array[], start, end) calculates the maximum subarray of array starts at *start* and ends at *end*.   
We know the maximum subarray will in the left part of the array,  the right part, or cross the two parts(includes the middle elements). We can calculate the left part answer and the right part answer with process(array[], start, end) function, so, we need only to calculate the third one.
The third one cross the two parts(includes the middle element), let it begins at i and ends at j, so, we need to get the maximum subarray {array[i,mid]+array[mid+1,j]}(i<=mid && j>=mid+1), we can do it in O(n) time(n is the length of the array).   

###code###
     	//divide and conquer function
	    //@A: the array
	    //@l: the leftest index
	    //@h: the rightest index
	    int divideandconquer(int A[], int l, int h)
        {
            //l == h, return directly
            if(l == h)
                return A[l];
            //@ret: answer we will return
            //we divide A[l,h] to two subarrays
            //A[l,mid] && A[mid+1, h],
            //the maximum subarray is either in the left subarray
            //or the right subarray, or cross the mid-point
            int ret = INT_MIN;
            int mid = (l+h)>>1, t;
            ///get the maximum subarray of the left subarray
            t = divideandconquer(A,l,mid);
            //update ret
            if(t > ret)
                ret = t;
            //get the maximum subarray of the right subarray
            t = divideandconquer(A,mid+1,h);
            //update ret
            if(t > ret)
                ret = t;
            //get the maximum subarray if it crosses the mid-point
            t = crossmax(A, l, mid, h);
            //update ret
            if(t > ret)
                ret = t;
            return ret;
        }
        //get the maximum subarray of A[l,h], and, it crosses
       //the mid-point!!! 
       int crossmax(int A[], int l, int mid, int h)
        {
            //the left maximum sum including A[mid]
            int left_ret = INT_MIN;
            int sum = 0;
            //get the maximum subarray A[i, mid]
            //i from mid to l
            for(int i=mid;i>=l;--i)
                {
                    sum += A[i];
                    if(left_ret < sum)
                        left_ret = sum;
                }
            sum = 0;
            //same as above
            int right_ret = INT_MIN;
            //get the maximum subarray A[mid+1, j]
            //j form mid+1 to h
            for(int i=mid+1;i <=h; ++i)
                {
                    sum += A[i];
                    if(right_ret < sum)
                        right_ret = sum;
                }
            //return the answer
            return left_ret + right_ret;
        }