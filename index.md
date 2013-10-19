---
layout: page
title: About
tagline: Supporting tagline
---
{% include JB/setup %}

The site is my English blog for algorithm mainly, There is my another blog [klion26](http://www.fengshuxin.com), it was born in 2010. In 2012, I knew about github pages, then i built this blog for writing algorith solutions mainly.

My name is klion26, studying in [Central South University](http://www.csu.edu.cn), it locates in Changsha Hunan. My research field is Image Process. You could contact me with email on the left.

Here's a sample "posts list".

<ul class="posts">
  {% for post in site.posts %}
    <li><span>{{ post.date | date_to_string }}</span> &raquo; <a href="{{ BASE_PATH }}{{ post.url }}">{{ post.title }}</a></li>
  {% endfor %}
</ul>

