---
layout: post
title: "essential c++"
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
Iterator的使用可以这样理解，对于vector和list我们都需要使用一个指针，指向当前需要的数据，使用完了之后，我们需要简单的操作来得到下一个，vecotr中存的是连续的空间，我们可以用_p++_的方式，但是list是用链表存的，我们不能用_p++_的方式来得到下一个，但是我们可以把这些统一起来，用Iterator来实现，Iterator会实现相应的++操作符，这个操作符会和相应的数据存储方式有关，如果是vector的话就是普通的++，但是如果是list的话，就是next。这样就可以统一起来的
list的Iterator不支持+操作符，但是可以用自增操作符
类的静态成员必须在外面进行定义和初始化，不然会产生undefine的错误
建立友元关系是 **为了效率**，如果仅仅希望对某个data member进行读写的话，那么，为它提供具有public存取权限的inline函数，可以用来替代友元关系。
