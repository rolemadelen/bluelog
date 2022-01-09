---
title: "[RoR] Partial Template 사용하기"
subtitle: "Learn how to create partials with local variables"
lang: "ko"
date: '2022-01-01'
tags:
- ror
- partial template
---


## Partial Template
> 해당 글에서 Partial Template을 임의로 **부분 템플릿**이라고 칭하도록 하겠다. 공식 명칭이 아님을 유의하자.

 비슷한 내용을 가진 두 개의 파일 `a.html.erb` 와 `b.html.erb` 가 있다.

<br>

a.html.erb
```erb
<div class="container mx-auto">
  <h1> a.html.erb </h1>

  <ul role="list">
    <li>Ruby</li>
    <li>Rails</li>
    <li>C++</li>
    <li>C</li> 
    <li>Python</li>
    <li>JavaScript</li>
    ... 
    ...
    <!-- many more -->
  </ul>
</div>
```

b.html.erb
```erb
<div class="container mx-auto">
  <h1> b.html.erb </h1>

  <ul role="list">
    <li>Ruby</li>
    <li>Rails</li>
    <li>C++</li>
    <li>C</li> 
    <li>Python</li>
    <li>JavaScript</li>
    ... 
    ...
    <!-- many more -->
  </ul>
</div>
```

`<h1>` 태그를 제외하고는 완전 같은 코드임을 확인 할 수 있다. RoR의 DRY (Don't Repeat Yourself) 이론을 따라, 부분 템플릿을 사용하여 중복을 제거해보자.

### 부분 템플릿 생성
부분 템플릿의 파일 이름은 언더스코어(`_`)로 시작해야 한다. 

<br>

중복되는 `<ul>` 태그의 리스트들은 프로그래밍의 이름을 나열하고 있으니 `_langList.html.erb` 라는 이름으로 부분 템플릿을 만들어 보겠다.

```erb
<ul role="list">
  <li>Ruby</li>
  <li>Rails</li>
  <li>C++</li>
  <li>C</li> 
  <li>Python</li>
  <li>JavaScript</li>
  ... 
  ...
  <!-- many more -->
</ul>
```

특별한 것 없이, 중복되는 부분을 그대로 가져왔다. 

### 부분 템플릿 호출

각각 `a.html.erb`와 `b.html.erb`의 중복되는 부분을 지우고, 해당 템플릿을 삽입했다.

<br>

a.html.erb
```erb
<div class="container mx-auto">
  <h1> a.html.erb </h1>
  
  <%= render partial: 'langList' %>
</div>
```

b.html.erb
```erb
<div class="container mx-auto">
  <h1> b.html.erb </h1>

  <%= render partial: 'langList' %>
</div>
```

`'_langList'`가 아님을 주의하자. 템플릿을 호출할 때는 언더스코어를 포함하지 않은, 부분 템플릿의 이름만을 사용한다. 

<br>

템플릿을 호출할 때 경로를 포함할 수 있다. 예를들면 `home` view에 있는 `_langList.html.erb`를 호출하기 위해서는 아래와 같이 할 수 있다.
```erb
<%= render partial: 'home/langList' %>
```

### 부분 템플릿과 지역 변수
`a.html.erb`와 `b.html.erb`의 `<h1>` 속 내용을 보면 해당 파일의 이름을 하드코딩해서 표현한 것 같다. 파일 이름만 다를 뿐 구조는 같으니, 이 부분만 변수에 저장하여 부분 템플릿에 인자로 보내버리면 보다 더 중복을 제거할 수 있지 않을까?

<br>

a.html.erb
```erb
<div class="container mx-auto">
  <%= render partial: 'langList', :locals => {:title => "a.html.erb"} %>
</div>
```

b.html.erb
```erb
<div class="container mx-auto">
  <%= render partial: 'langList', :locals => {:title => "b.html.erb"} %>
</div>
```

`:locals`를 사용하여 `{:key => value}` 페어로 변수를 넘겨주었다. 여기서 `:title`은 키(*key*) 그리고 각 `"a.html.erb"`와 `"b.html.erb"`는 값(*value*)이 된다.

<br>

넘겨준 key-value 페어를 사용할 때는 변수와 같이 콜론(`:`) 없이 key의 이름만을 사용한다.  

<br>

_langList.html.erb
```erb
<h1> <%= title %> </h1>

<ul role="list">
  <li>Ruby</li>
  <li>Rails</li>
  <li>C++</li>
  <li>C</li> 
  <li>Python</li>
  <li>JavaScript</li>
  ... 
  ...
  <!-- many more -->
</ul>
```

개인적으로는 이 정도에서 만족하지만, 원한다면 `<div>` 까지 부분 템플릿에 포함시켜도 된다.

<br>

_langList.html.erb
```erb
<div class="container mx-auto">
  <h1> <%= title %> </h1>

  <ul role="list">
    <li>Ruby</li>
    <li>Rails</li>
    <li>C++</li>
    <li>C</li> 
    <li>Python</li>
    <li>JavaScript</li>
    ... 
    ...
    <!-- many more -->
  </ul>
</div>
```

a.html.erb
```erb
<%= render partial: 'langList', :locals => {:title => "a.html.erb"} %>
```

b.html.erb
```erb
<%= render partial: 'langList', :locals => {:title => "b.html.erb"} %>
```

## Reference
- [Rails Guides - Layouts and Renderings](https://guides.rubyonrails.org/layouts_and_rendering.html)