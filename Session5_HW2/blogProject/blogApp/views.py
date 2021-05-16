import time
from django.shortcuts import render,redirect
from .models import Article

# Create your views here.
def index(request):
    drama_number = Article.objects.filter(category="drama").count()  #category 가 drama인거를 filtering 해서 찾는다. 그리고 갯수를 count해줘라~ 
    movie_number = Article.objects.filter(category="movie").count()
    programming_number = Article.objects.filter(category="programming").count()
    return render(request, 'index.html', {'drama': drama_number, 'movie': movie_number, 'programming': programming_number})
    # render 의 3번째 인자 {} -> html 에서 보여주는 것들

def detail(request, article_pk): 
    article = Article.objects.get(pk=article_pk)
    return render(request, 'detail.html', {'article' : article})

def new(request):
    if request.method == 'POST' :
        #POST 요청일 경우
        # print(request.POST)  #data 확인
        article_time = time.strftime('%Y-%m-%d', time.localtime(time.time())) + time.strftime('%c', time.localtime(time.time()))

        new_article = Article.objects.create(
            title = request.POST['title'], #title 에 들어갈건 사람들이 입력한 title이다
            content = request.POST['content'],
            category = request.POST['category'],
            time=article_time
        )
        return redirect('detail', article_pk=new_article.pk)
        # return render(request, 'detail.html',  {'article' : new_article})

    #POST 요청이 아닐 경우
    return render(request, 'new.html')

def movie(request):
    movies = Article.objects.filter(category="movie")
    return render(request, 'movie.html', {'articles' : movies})

def drama(request):
    dramas = Article.objects.filter(category="drama")
    return render(request, 'drama.html', {'articles' : dramas})

def programming(request):
    programmings = Article.objects.filter(category="programming")
    return render(request, 'programming.html', {'articles' : programmings})




#사용자에게 어떤 정보를 보여줄건지 결정하는게 views. 글 중에서 각 카테고리에 맞게 선별헤서 옮겨주는 역할을 하는것,
#글이 여러개면 articles 가 된거고 글이 하나면 article이 된거댜!!






