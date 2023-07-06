from django.conf import settings
from django.contrib.auth.models import AbstractUser
from django.db import models
from django.urls import reverse
from django.utils.translation import ugettext_lazy as _


class User(AbstractUser):
    # WARNING!
    """
    Some officially supported features of Crowdbotics Dashboard depend on the initial
    state of this User model (Such as the creation of superusers using the CLI
    or password reset in the dashboard). Changing, extending, or modifying this model
    may lead to unexpected bugs and or behaviors in the automated flows provided
    by Crowdbotics. Change it at your own risk.


    This model represents the User instance of the system, login system and
    everything that relates with an `User` is represented by this model.
    """
    name = models.CharField(null=True,blank=True,max_length=255,)
    user_ID = models.UUIDField(null=True,blank=True,)
    username = models.CharField(max_length=256,null=True,blank=True,)
    signup_date = models.DateTimeField(null=True,blank=True,)
    last_login = models.DateTimeField(null=True,blank=True,)
    rel_detail_1_1 = models.OneToOneField("users.Detail",blank=True,null=True,on_delete=models.CASCADE,related_name="user_rel_detail_1_1",)
    def get_absolute_url(self):
        return reverse('users:detail', kwargs={'username': self.username})
class Detail(models.Model):
    'Generated Model'
    first_name = models.CharField(max_length=256,blank=True,)
    last_name = models.CharField(max_length=256,blank=True,)
    user_ID = models.UUIDField(blank=True,)
    email = models.EmailField(max_length=254,blank=True,)
    address = models.CharField(max_length=256,blank=True,)
    phone_number = models.PositiveSmallIntegerField(blank=True,)
