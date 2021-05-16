# Generated by Django 2.2 on 2021-05-16 12:42

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Device',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('device', models.CharField(max_length=200)),
                ('manufacturer', models.CharField(max_length=200)),
                ('os', models.CharField(max_length=200)),
                ('last_checked_out_by', models.CharField(blank=True, max_length=200, null=True)),
                ('is_checked_out', models.BooleanField(default=False)),
                ('last_checked_out_date', models.DateTimeField(blank=True, max_length=200, null=True)),
            ],
        ),
    ]
