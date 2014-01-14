---
layout: post
title: "Single-Number"
description:
category: Algorithm
tags: [Single-Number, Algorithm, bit]
---
{% include JB/setup %}
###Description###
Given an array of integers, every element appears _three_ times except for one. Find that single one.
###Algorithm###
To solve this problem using only constant space, we have to treat the integer as bits combination.   
We sum each bit of every integer. Every bit will be 0 or 1 after modded by 3, due to the constraint of this problem where each number must appear either *three* or *once*.  Then we can use the following algorithm to solve this problem:  

    int singleNumber(int A[], int n) {
    int count[32] = {0};//count[i]-->bit i
    int result = 0;
    for (int i = 0; i < 32; i++) {
        for (int j = 0; j < n; j++) {
            if ((A[j] >> i) & 1) {
                count[i]++;
            }
        }
        result |= ((count[i] % 3) << i);
    }
    return result;
    }

we can improve this algorithm using three bitmask variables:   
1. *ones* as a bitmask to represent the i^th bit had appeared 3n+1 time(s).  
2. *twos* as a bitmask to represent the i^th bit had appeared 3n+2 time(s).  
3. *threes* as a bitmask to represent the i^th bit had appeared 3n time(s).  
Then we will rewrite the upper code as below:  
     
    int singleNumber(int A[], int n) {
    int ones = 0, twos = 0, threes = 0;
    for (int i = 0; i < n; i++) {
        twos |= ones & A[i];
        ones ^= A[i];
        threes = ones & twos;
        ones &= ~threes;
        twos &= ~threes;
    }
    return ones;
    }
The algorithm's time complexity is O(n), and space is O(1).