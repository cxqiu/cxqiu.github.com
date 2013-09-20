---
layout: post
title: "essential c++"
description: ""
category: 
tags: [language, c++]
---
{% include JB/setup %}

##Chapter 3 范型编程
如果我们需要给array和vecotr都写一个find函数，查找其中是否存在一个特定的值，那么我们不需要利用重载写两个函数来完成。我们可以 **分割成多个小功能的函数**，我们可以考虑传个find的是所有array或者vector的值，而不是array和vector本身。因为我们传数组的时候，实际上是传的数组第一个元素的地址。这样我们就可以统一起来，如下
    
    template<class T>
    T *find(const T* array, int size, const T &elem);//其中size表示array有多少个元素，elem则表示返回的值
然后我们可以把第二个参数_size_改成一个指针，这样的话array和vector就更好的统一了，我们改成如下的形式

    template<class T>
    T *find(const T* first,const T* last, const T &elem);//first表示array的第一个元素的位置
    last表示array的最后一个元素的下一个位置，因为我们仅仅是比较，所以没问题
了解Iterator，Iterator其实就是指向元素的一个指针，只不过需要把系统默认的++，equal，inequal
