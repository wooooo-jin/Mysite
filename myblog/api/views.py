from django.http import JsonResponse
from django.views.generic.list import BaseListView
from blog.models import Post  # Post 모델을 명시적으로 가져옵니다.
from api.utils import obj_to_post, prev_next_post
from django.views.generic.detail import BaseDetailView
from django.views import View
from blog.models import Post, Category, Tag




# Create your views here.


class ApiPostLV(BaseListView):
    model = Post  # Post 모델 설정


    def render_to_response(self, context, **response_kwargs):
        qs = context['object_list']
        postList = [obj_to_post(obj, False) for obj in qs]
        return JsonResponse(data=postList, safe=False, status=200)


class ApiPostDV(BaseDetailView):
    model = Post
    
    def render_to_response(self, context, **response_kwargs):
        obj = context['object']
        post = obj_to_post(obj)
        prevPost,nextPost = prev_next_post(obj)

        jsonData= {
            'post':post,
            'prevPost':prevPost,
            'nextPost':nextPost,
        }
        return JsonResponse(data=jsonData, safe=True, status=200)

class ApiCateTagView(View):
    def get(self, request, *args, **kwargs):
        qs1 = Category.objects.all()
        qs2 = Tag.objects.all()
        cateList = [cate.name for cate in qs1]
        tagList = [tag.name for tag in qs2]
        jsonData ={
            'cateList':cateList,
            'tagList': tagList
        }

        return JsonResponse(data=jsonData, safe=True, status=200)
