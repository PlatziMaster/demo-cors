FROM python:3.6

WORKDIR /app

RUN pip install -U Flask
RUN pip install -U Flask-Cors

COPY . /app/

ENV FLASK_APP=app.py
ENV FLASK_DEBUG=1
ENV FLASK_ENV=development

EXPOSE 8888
CMD flask run --host=0.0.0.0 --port=8888