from db import db
from models.user import UserModel
from models.appointment import AppointmentModel
from models.feedback import FeedbackModel
from models.prescription import PrescriptionModel


class DoctorModel(db.Model):
    __tablename__ = 'doctors'

    id = db.Column(db.Integer, primary_key=True)
    firstname = db.Column(db.String(30))
    lastname = db.Column(db.String(30))
    dob = db.Column(db.String(30))
    specialization = db.Column(db.String(100))
    email = db.Column(db.String(30), unique=True)
    contact = db.Column(db.String(30), unique=True)
    address = db.Column(db.String(100))
    experience = db.Column(db.Integer)
    available_timeslots = db.Column(db.String(100))

    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    user = db.relationship('UserModel')

    appointments = db.relationship('AppointmentModel')
    prescriptions = db.relationship('PrescriptionModel')
    feedbacks = db.relationship('FeedbackModel')

    def appointments_json(self):
        return {'patient_name': self.firstname, 'patients': [appointment.json() for appointment in self.appointments]}

    def prescriptions_json(self):
        return {'patient_name': self.firstname,
                'patients': [prescription.json() for prescription in self.prescriptions]}

    def feedbacks_json(self):
        return {'patient_name': self.firstname, 'patients': [feedback.json() for feedback in self.feedbacks]}

    # appointments = db.relationship('AppointmentModel', backref='doctor-model')
    # prescription = db.relationship('PrescriptionModel', backref='doctor-model')
    # feedback = db.relationship('FeedbackModel', backref='doctor-model')

    def __init__(self, firstname, lastname, dob, specialization, email, contact, address, experience,
                 available_timeslots, user_id):
        self.firstname = firstname
        self.lastname = lastname
        self.dob = dob
        self.specialization = specialization
        self.email = email
        self.contact = contact
        self.address = address
        self.experience = experience
        self.available_timeslots = available_timeslots
        self.user_id = user_id

    def json(self):
        return {'firstname': self.firstname, 'lastname': self.lastname}

    def save_to_db(self):
        db.session.add(self)
        db.session.commit()

    @classmethod
    def find_by_doctor_firstname(cls, firstname):
        return cls.query.filter_by(firstname=firstname).first()

    @classmethod
    def find_by_doctor_id(cls, _id):
        return cls.query.filter_by(id=_id).first()
