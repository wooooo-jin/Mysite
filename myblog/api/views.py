from django.http import JsonResponse
from django.views.generic.list import BaseListView
from blog.models import Post  # Post 모델을 명시적으로 가져옵니다.
from api.utils import obj_to_post




# Create your views here.


class ApiPostLV(BaseListView):
    model = Post  # Post 모델 설정


    def render_to_response(self, context, **response_kwargs):
        qs = context['object_list']
        postList = [obj_to_post(obj, False) for obj in qs]
        return JsonResponse(data=postList, safe=False, status=200)



