from flask import Flask
from flask_restful import Api
from flask_jwt import JWT
from db import db

from security import authenticate, identity
from resources.user import UserRegister
from resources.patient import PatientRegister

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///data.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.secret_key = "8755616"
api = Api(app)
db.init_app(app)


@app.before_request
def create_tables():
    db.create_all()


jwt = JWT(app, authenticate, identity)

api.add_resource(UserRegister, '/register')
api.add_resource(PatientRegister, '/patient')

if __name__ == '__main__':
    app.run(port=5000, debug=True)
