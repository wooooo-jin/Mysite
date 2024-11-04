from django.db import models

# Create your models here.

# 게시글
class Post(models.Model):
    # FK(Foregin Key-외례키)
    category= models.ForeignKey('Category', blank=True, null=True, on_delete= models.SET_NULL)   #카테고리를 가져옴
    tags = models.ManyToManyField('Tag',blank=True)  # 하나의 게시물에는 여러가지 태그가 있을 수 있고 
                                                                ## ''문자열로 받아오면 순서 상관없이 받아올 수 있다. category / 'category'
    title = models.CharField('TITLE', max_length=50)
    description = models.CharField('DESCRIPTION', max_length=100,
                                    blank=True,
                                    help_text= 'simple one = line text') #()안은 칼럼의에 쓰임
    image = models.ImageField('IMAGE', upload_to='blog/%Y/%m',
                              blank=True, null=True)
    contente = models.TextField('CONTENT')
    create_date = models.DateTimeField("CREATE DT", auto_now_add=True) # 한번 바뀌면 끝
    update_date = models.DateTimeField("UPDATE DT", auto_now=True) # 지금 순간으로 계속 업데이트 - 변수처럼 사용하겠다
    like = models.PositiveIntegerField('LIKE', default=0)

    def __ste__(self):
        return self.title

## 게시글의 종류를 지정
class Category(models.Model):
    name = models.CharField(max_length=50, unique=True) #동일한 이름은 들어올수가없다. unique는 중복으로 들어올수없다.
    description = models.CharField('DESCRIPTION', max_length=100,
                                   blank=True,
                                   help_text='simple one-line text')
    
    def __str__(self):
        return self.name

## 게시글의 해시 태그
class Tag(models.Model):
    name = models.CharField(max_length=50)

    def __str__(self):
        return self.name

## 댓글
class Comment(models.Model):
    post = models.ForeignKey(Post, on_delete=models.CASCADE)    # ''문자열로 받아오면 순서 상관없이 받아올 수 있다. post / 'post'
    content = models.TextField('CONTENT')
    create_date = models.DateTimeField('CRATE DT',auto_now_add=True)
    update_date = models.DateTimeField('UPDATE DT', auto_now=True) 


    @property
    def short_content(self):
        return self.content[:10]
    
    def __str__(self):
        return self.short_content
    
    