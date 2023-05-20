
from rest_framework.response import Response
from rest_framework.decorators import api_view,permission_classes

from base.models import Product
from django.contrib.auth.hashers import make_password
from django.contrib.auth.models import User
from base.serailizers import ProductSerailizer ,UserSerailizer,UserSerializerWithTokens

@api_view(['GET'])
def getProducts(request):
    products=Product.objects.all()
    serailizer=ProductSerailizer(products,many=True)
    return Response(serailizer.data)

@api_view(['GET'])
def getProduct(request,pk):
  product=Product.objects.get(_id=pk)
  serailizer=ProductSerailizer(product,many=False)
  return Response(serailizer.data)