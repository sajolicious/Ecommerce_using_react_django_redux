# Generated by Django 4.1 on 2023-02-21 22:36

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0003_order_rename_user_product_user_shippingaddress_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='product',
            name='image',
            field=models.ImageField(blank=True, max_length=200, null=True, upload_to=''),
        ),
    ]
