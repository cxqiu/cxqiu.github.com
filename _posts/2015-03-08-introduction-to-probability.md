---
layout: post
title: "Introduction to Probability(Charles M. Grinstead and J. Laurie Snell)"
description: "Notes of Introduction to Probability"  
category: probability, math  
tags: [math, probability, note]
---
{% include JB/setup %}
##Chapter 1
The set of possible outcomes is called the *sample space*. First of all, we define the elements of a sample space to be outcomes. Seconde, each subset of a sample space is defined to be an *event*.  

Definition 1.4 If $P(E) = p$, the *odds* in favor of the event $E$ occurring are $r:s$(r to s) where $r/s = p/(1-p)$. If $r$ and $s$ are given, then $p$ can be found by using the equation $p=r/(r+s)$.

*Problem*: If two players, playing several games, find themselves in the position when the first man needs *two* games and second needs *three*, then to find the fair division of stakes.  
*Solution*: the game will end within *four* games, so there are `2^4` cases, the first man will win under 11 of the 16 cases (WWWW, WLWW, LWWW, LLWW, WWWL, WLWL, LWWL, WWLW, WLLW, LWLW, WWLL), in the other cases, the second man will win, so, if the stakes are 64 pistoles, the first man should receive $66 \ast 11/16 = 44$ pistoles.  

*Problem*: John and Mary are taking a mathematics course. The course has only three grades: A, B and C. The probability that John gets a B is .3. The probability that Mary gets a B is .4. The probability that neither gets an A but at least one gets a B is .1. What is the probability that at least one gets a B but neither gets a C?  
*Solution*: Let the **sample sapce** be: $w_1 = {A, A}$, $w_2 = {A, B}$, $w_3 = {A, C}$, $w_4={B,A}$, $w_5={B,B}$, $w_6={B,C}$, $w_7={C,A}$, $w_8={C,B}$, $w_9={C,C}$, where the first grade is John's and the second is Mary's. You are given that $P(w_4)+P(w+5)+P(w_6)=.3$, $P(w_2)+P(w_5)+P(w_8)=.4$, $P(w_5)+P(w_6)+P(w_8)=.1$. Adding the first two equations and subtracting the third, we obtain the desired probability as $P(w_2)+P(w_4)+P(w_5)=.6$.  
*Problem*: Two cards are drawn successively from a deck of 52 cards. Find the probability that the second card is higher in rank than the first card.  
*Solution*: $P(higher)+P(lower)+P(same)=1$, and $P(higher) == P(lower)$, because you can exchange the two cards. $P(same) = 13*C(4,2)/C(52,2)$  

##Chapter2
*Problem*: Suppose that we take a card tabel and draw across the top surface a set of parallel lines a unit distance apart. We then drop a common needle of unit length at random on this surface and observe whether or not the needle lies across one of the lines.  
*Solution*: We can describe the possible outcomes of this experiment by coordinates as follows: Let $d$ be the distance from the center of the needle to the nearest line. Next, let $L$ be the line determined by the needle, and define $\theta$ as the acute angle that the line $L$ makes with the set of parallel lines. Using this description, we have $0 \leq d \leq 1/2$, and $0 \leq \theta \leq \pi/2$. Moreover, we see that the needle lies across the nearest line if and only if the hypotenuse of the triangle is less than half the length of the needle, that is: $$ \frac{d}{sin \theta} < \frac{1}{2}$$  
**Definition 2.1** Let $X$ be a continuous real-valued random variable. A *density function* for $X$ is a real-valued function which satisfies $$ P(a \leq X \leq b) = \int_E f(x) dx.$$ for all $a, b \in R$.  
**Definition 2.2** Let $X$ be a continuous real-valued random variable. Then the cumulative distribution function of $X$ is defined by the equation $$F_X(x) = P(X \leq x).$$  
**Theorem 2.1** Let $X$ be a continuous real-valued random variable with density function $f(x)$. Then the function defined by: $$F(x) = \int_{-\infty}^{x} f(t)dt$$ is the cumulative distribution function of $X$. Furthermore, we have $$\frac{d}{dx}F(x) = f(x)$$   
In many experiments, the density function of the relevant random variable is easy to write down. However, it is quite often the case that the **cumulative distribution** function is **easier** to obtain than the **density function**. Of course, once we have the cumulative distribution function, the density function can easily be obtained by differentiation, as the above theorem shows.  
The density function of *exponential density* is  
\begin{equation}
 \left\{ f(t) 
  \begin{aligned}   
    \lambda \e^{-\lambda t},  if t \geq 0\\
    0,  if t < 0 \end{aligned} 
  \right.
\end{equation}