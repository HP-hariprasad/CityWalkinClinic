from flask import Flask
from flask_restful import Api
from flask_jwt import JWT
from db import db

from security import authenticate, identity
from resources.user import UserRegister
from resources.patient import PatientRegister, Patients
from resources.doctor import DoctorRegister, Doctors
from resources.appointments import BookAppointments, Appointments
from resources.prescription import Prescriptions, Prescription
from resources.feedback import Feedbacks, Feedback

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
api.add_resource(Patients, '/patient/<string:firstname>')
api.add_resource(DoctorRegister, '/doctor')
api.add_resource(Doctors, '/doctor/<string:firstname>')
api.add_resource(BookAppointments, '/appointments')
api.add_resource(Appointments, '/appointments/<int:id>')
api.add_resource(Prescriptions, '/prescription')
api.add_resource(Prescription, '/prescription/<int:id>')
api.add_resource(Feedbacks, '/feedback')
api.add_resource(Feedback, '/feedback/<int:id>')

if __name__ == '__main__':
    app.run(port=5000, debug=True)
