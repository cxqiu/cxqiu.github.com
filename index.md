---
layout: page
title: About
tagline: Supporting tagline
---
{% include JB/setup %}

我的另一个站点 [klion26](http://www.fengshuxin.com),开始与2010年。在2012年后半年知道github page，然后在网上看到有人用这个搭建博客的教程，就自己鼓捣了一个，不想再去买域名了，就直接用这个二级域名了，这个地方就当成一个用来给自己备份和记录生活点滴的地方吧。

我的网名叫做klion26,现在在中南大学[湖南]信息学院读研究生，研究方向是图像处理。我的联系方式在左边的about里面。欢迎大家和我交流


Here's a sample "posts list".

<ul class="posts">
  {% for post in site.posts %}
    <li><span>{{ post.date | date_to_string }}</span> &raquo; <a href="{{ BASE_PATH }}{{ post.url }}">{{ post.title }}</a></li>
  {% endfor %}
</ul>

