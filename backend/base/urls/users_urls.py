
from django.urls import path
from base.views import users_views as views
urlpatterns = [
    path('register/', views.registerUser,name='register'),
    path('login/', views.MyTokenObtainPairView.as_view()),
    path('profile/', views.getUserProfile,name='User-Profile'),
    path('profile/update', views.updateUserProfile,name='User-Profile-update'),
    path('', views.getUsers,name='Users'),
   
    

]
