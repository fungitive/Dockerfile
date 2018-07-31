
FROM python:3.5
RUN pip install --upgrade pip
COPY requirements.txt .
RUN pip install -r requirements.txt
RUN django-admin startproject feiyu
WORKDIR ./feiyu
RUN python manage.py startapp feiyu01
RUN python manage.py makemigrations && python manage.py migrate
EXPOSE 8000
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]
