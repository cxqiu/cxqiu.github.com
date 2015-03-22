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
 f(t) = \left\{  
  \begin{aligned}   
    \lambda e^{-\lambda t},  t \geq 0\\
    0,  t < 0 \end{aligned} 
  \right.
\end{equation}  
*Problem*: Suppose you choose a real number $X$ from the interval [2, 10] with a density function of the form $$ f(x) = Cx,$$ where $C$ is a constant. Find $C$
*Solution*: use the density function property $$ P(a \leq X \leq b) = \int_E f(x) dx.$$, we know $$ \int_{2}^{10} Cx dx = 1 $$  
*Problem*: Take a stick of unit length and break it into three pieces, choosing the break points at random. (The break points are assumed to be chosen simultaneously.) What is the probability that the three pieces can be used to form a triangle?
*Solution*: Let $b$ and $c$ be the two points' position, then, $b<\frac{1}{2}$, $c<\frac{1}{2}$, and $c-b<\frac{1}{2}$(we assume $b<c$), $c>1-c$. plot the functions in the coordinate system, the answer will be gotten:$\frac{1}{4}$  
*Problem*: Three points are chosen *at random* on a circle of *unit circumference.* What is the probability that the triangle defined by these points as vertices has three acute angles?
*Solution*: One of the angles is obtuse if and only if all three points lie in the same semicircle. Take the circumference as the interval [0, 1]. Take one point at 0 and others at B and C. so the probability is $\frac{1}{2}$.  
##Chapter 3 Permutation
**Definition 3.1** Let $A$ be any finite set. A *permutation of A* is a one-to-one mapping of *A* onto itself.  
The expression $n!$ will enter into many of our calculations, and we shall need to have some estimate of its magnitude when $n$ is large. It is clearly not practical to make exact calculations in this case, We shall instead use a result called $Stirling's formula$. Before stating this formula we need a definition.  
**Definition 3.3** Let $a_n$ and $b_n$ be two sequences of numbers. We say that $a_n$ is *asymptotically equal* to $b_n$, and write $a_n \sim b_n$.  
**Theorem 3.3(Stirling's Formula)** The sequence $n!$ is asymptotically equal to $$n^{n} e^{-n}\sqrt{2 \pi n}.$$ 
Since a permutation is a one-to-one mapping of the set onto itself, it is interesting to ask how many points are mapped onto themselves. We call such points *fixed points* of the mapping. The probability that there are no fixed points, when $n=10, 20, or 30$ is estimated to be between .35 and .37. We shall see later that for $n \geq 10$ the exact probabilities $p_{n}(0)$ are, to six decimal place accuracy, equal to $1/e \approx .367879$. Thus, for all practical purposes, after $n=10$ the probability that a random permutation of the set $\{1, 2, ..., n\}$ has no fixed points does not depend upon n. These simulations also suggest that the average number of fixed points is close to 1. It can be shown that the average is exactly equal to 1 for all n.  
**Definition 3.4**: Let $\sigma$ be a permutation of the set $\{1,2,...,n\}$. Then $i$ is a *record* of $\sigma$ if either $i=1$ or $\sigma(j) < \sigma(i)$ for every $j=1, ..., i-1$.  
There are $w_n$ permutations have no fixed point of n elements, then $$ w_n = (n-1) w_{n-1}+(n-1) w_{n-2}$$ for $n \geq 3.$   
In fact, it is easy to prove by induction that $$w_n = nw_{n-1} + (-1)^{n}.$$  Then $p_i = w_i / i!$ satisfies $$ p_i - p_{i-1} = \frac{(-1)^n}{n!}$$ If we sum from $i=2$ to n, and use the fact that $p_1 = 0$, we obtain $$p_n = \frac{1}{2!}-\frac{1}{3!}+...+\frac{(-1)^n}{n!}$$ This agrees with the first $n+1$ terms of the expansion for $e^x$ for $x=-1$ and hence for large $n$ is approximately $e^{-1} \approx .368$.   
**Theorem 3.4** For integers $n$ and $j$, with $0 < j < n$, the binomial coefficients satisfy: $${n \choose k} = {n-1 \choose j} + {n-1 \choose j-1}$$
**Definition 3.5** A *Bernoulli trials process* is a sequence of n chance experiments such that: 
1. Each experiment has two possible outcomes, which we may call *success* and *failure*.
2. The probability $p$ of success on each experiment is the same for each experiment, and this probability is not affected by any knowledge of previous outcomes. The probability $q$ of failure is given by $q=1-p$  
**Definition 3.6** Let $n$ be a positive integer, and let $p$ be a real number between 0 and 1. Let B be the random variable which counts the number of successes in Bernoulli trials process with parameters $n$ and $p$. Then the distribution $b(n, p, k)$ of B is called the *binomial distribution.*
**Theorem 3.6**: Given $n$ Bernoulli trials with probability  $p$ of success on each experiment, the probability of exactly $j$ successes is $$b(n,p,j) = {n \choose j} p^j q^{n-j}$$ where $q = 1-p$.  
**Theorem 3.8** Let $P$ be a probability distribution on a sample space $\Omega$, and let $ \{A_1, A_2, ..., A_n\}$ be a finite set of events. Then $$P(A_1 \cup A_2 \cup ... \cup A_n) = \sum_ {i=1}^{n}P(A_i) - \sum_ {1 \leq i < j \leq n}P(A_i \cap A_j) + \sum_ {1 \leq i < j < k \leq n} P(A_i \cap A_j \cap A_k) - ... $$  
**Proof** If the outcome $\omega$ occurs in at least one of the events $A_i$, its probability is added exactly once by the left side of Theorem 3.8. We must show that it is added exactly once by the right side of Theorem 3.8. Assume that $\omega$ is in exactly $k$ of the sets. Then its probability is added $k$ times in the first form, subtracted $ {k \choose 2} $ times in the second, added ${k \choose 3}$ times in the third term, and so forth. Thus the total number of times that it is added is $${k \choose 1} - {k \choose 2} + {k \choose 3} - ... (-1)^(k-1){k \choose k}$$. 
But $$0 = (1-1)^k = \sum _{j=0}^{k} {k \choose j} (-1)^j = {k \choose 0} - \sum _{j=1}^{k} {k \choose j} (-1)^{j-1}.$$