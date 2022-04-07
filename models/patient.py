from db import db
from models.user import UserModel
from models.doctor import  DoctorModel
from models.appointment import AppointmentModel
from models.feedback import FeedbackModel
from models.prescription import PrescriptionModel


class PatientModel(db.Model):
    __tablename__ = 'patients'

    id = db.Column(db.Integer, primary_key=True)
    firstname = db.Column(db.String(30))
    lastname = db.Column(db.String(30))
    dob = db.Column(db.DateTime())
    medical_history = db.Column(db.String(100))
    email = db.Column(db.String(30), unique=True)
    contact = db.Column(db.String(30), unique=True)
    address = db.Column(db.String(100))

    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    user = db.relationship('UserModel', on_delete= db.Model.CASCADE)

    appointments = db.relationship('AppointmentModel')
    prescriptions = db.relationship('PrescriptionModel')
    feedbacks = db.relationship('FeedbackModel')

    def appointments_json(self):
        return {'patient_name': self.firstname, 'patients': [appointment.json() for appointment in self.appointments]}

    def prescriptions_json(self):
        return {'patient_name': self.firstname, 'patients': [prescription.json() for prescription in self.prescriptions]}

    def feedbacks_json(self):
        return {'patient_name': self.firstname, 'patients': [feedback.json() for feedback in self.feedbacks]}

    # appointments = db.relationship('AppointmentModel', backref='patient-model')
    # prescription = db.relationship('PrescriptionModel', backref='patient-model')
    # feedback = db.relationship('FeedbackModel', backref='patient-model')

    def __init__(self, firstname, lastname, dob, medical_history, email, contact, address, user_id):
        self.firstname = firstname
        self.lastname = lastname
        self.dob = dob
        self.medical_history = medical_history
        self.email = email
        self.contact = contact
        self.address = address
        self.user_id = user_id

    def save_to_db(self):
        db.session.add(self)
        db.session.commit()

    @classmethod
    def find_by_patient_firstname(cls, firstname):
        return cls.query.filter_by(firstname=firstname).first()

    @classmethod
    def find_by_patient_id(cls, _id):
        return cls.query.filter_by(id=_id).first()
