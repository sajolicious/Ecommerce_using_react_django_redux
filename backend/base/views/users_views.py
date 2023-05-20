
from rest_framework.response import Response
from rest_framework.decorators import api_view,permission_classes
from rest_framework.permissions import IsAuthenticated,IsAdminUser
from base.models import Product
from django.contrib.auth.hashers import make_password
from django.contrib.auth.models import User
from base.serailizers import ProductSerailizer ,UserSerailizer,UserSerializerWithTokens
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView

class MyTokenObtainPairSerializer(TokenObtainPairSerializer):   
    def validate(self,attrs):
        data = super().validate(attrs)
        serializer=UserSerializerWithTokens(self.user).data
        for k,v in serializer.items():
            data[k]=v
        return data
class MyTokenObtainPairView(TokenObtainPairView):
        serializer_class=MyTokenObtainPairSerializer
@api_view(['PUT'])
@permission_classes([IsAuthenticated])
def updateUserProfile(request):
    user=request.user
    serailizer=UserSerializerWithTokens(user,many=False)
    data=request.data
    user.first_name=data["name"]
    user.username=data["email"]
    user.email=data["email"]
    if data["password"] != '':
         user.password=make_password(data["password"])
    user.save()
    return Response(serailizer.data)



@api_view(['GET'])
@permission_classes([IsAuthenticated])
def getUserProfile(request):
    user=request.user
    serailizer=UserSerailizer(user,many=False)
    return Response(serailizer.data)

@api_view(['POST'])
def registerUser(request):
    data=request.data
    user=User.objects.create(
        first_name=data['name'],
        username=data['email'],
        email=data['email'],    
        password=make_password(data['password'])
    )
    serializer=UserSerializerWithTokens(user,many=False)
    return Response(serializer.data)

@api_view(['GET'])
@permission_classes([IsAdminUser])
def getUsers(request):
    users=User.objects.all()
    serailizer=UserSerailizer(users,many=True)
    return Response(serailizer.data)
