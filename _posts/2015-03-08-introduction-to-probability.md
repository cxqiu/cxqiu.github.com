---
layout: post
title: "Introduction to Probability"
description: "Notes of Introduction to Probability"  
category: probability, math  
tags: [math, probability, note]
---
{% include JB/setup %}
##Chapter 1
The set of possible outcomes is called the *sample space*. First of all, we define the elements of a sample space to be outcomes. Seconde, each subset of a sample space is defined to be an *event*.  

Definition 1.4 If $P(E) = p$, the *odds* in favor of the event $E$ occurring are $r:s$(r to s) where $r/s = p/(1-p)$. If $r$ and $s$ are given, then $p$ can be found by using the equation $p=r/(r+s)$.

*Problem*: If two players, playing several games, find themselves in the position when the first man needs *two* games and second needs *three*, then to find the fair division of stakes.  
*Solution*: the game will end within *four* games, so there are $2^4$ cases, the first man will win under 11 of the 16 cases (WWWW, WLWW, LWWW, LLWW, WWWL, WLWL, LWWL, WWLW, WLLW, LWLW, WWLL), in the other cases, the second man will win, so, if the stakes are 64 pistoles, the first man should receive $66\ast11/16 = 44$ pistoles.  

*Problem*: John and Mary are taking a mathematics course. The course has only three grades: A, B and C. The probability that John gets a B is .3. The probability that Mary gets a B is .4. The probability that neither gets an A but at least one gets a B is .1. What is the probability that at least one gets a B but neither gets a C?  
*Solution*: Let the **sample sapce** be: $w_1 = {A, A}$, $w_2 = {A, B}$, $w_3 = {A, C}$, $w_4={B,A}$, $w_5={B,B}$, $w_6={B,C}$, $w_7={C,A}$, $w_8={C,B}$, $w_9={C,C}$, where the first grade is John's and the second is Mary's. You are given that $P(w_4)+P(w+5)+P(w_6)=.3$, $P(w_2)+P(w_5)+P(w_8)=.4$, $P(w_5)+P(w_6)+P(w_8)=.1$. Adding the first two equations and subtracting the third, we obtain the desired probability as $P(w_2)+P(w_4)+P(w_5)=.6$.