from rest_framework import serializers
from django.contrib.auth.models import User
from rest_framework_simplejwt.tokens import RefreshToken
from .models import Product

class UserSerailizer(serializers.ModelSerializer):
    name=serializers.SerializerMethodField(read_only=True)
    _id=serializers.SerializerMethodField(read_only=True)
    isAdmin=serializers.SerializerMethodField(read_only=True)
   
    class Meta:
        model=User
        fields=['id','username','email','name','_id','isAdmin']

    def get_name(self,data):
        name=data.first_name
        if name =='':
           name = data.email
        return name

    def get__id(self,data):
        return data.id
    
    def get_isAdmin(self,data):
        return data.is_staff
class UserSerializerWithTokens(UserSerailizer):
    token=serializers.SerializerMethodField(read_only=True)
    class Meta:
        model=User
        fields=['id','username','email','name','_id','isAdmin','token']
    def get_token(self,data):
        token=RefreshToken.for_user(data)
        return str(token.access_token)

class ProductSerailizer(serializers.ModelSerializer):
    class Meta:
        model=Product
        fields='__all__'