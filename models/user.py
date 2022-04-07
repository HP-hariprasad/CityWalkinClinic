from db import db


class UserModel(db.Model):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(30), unique=True)
    password = db.Column(db.String(30))
    role = db.Column(db.String(20))

    patients = db.relationship('PatientModel')
    # doctors = db.relationship('DoctorModel')

    def __init__(self, username, password, role):
        self.username = username
        self.password = password
        self.role = role

    def patient_json(self):
        return {'username': self.username, 'patients': [patient.json() for patient in self.patients]}

    # def doctor_json(self):
    #     return {'username': self.username, 'doctors': [doctor.json() for doctor in self.doctors]}

    def save_to_db(self):
        db.session.add(self)
        db.session.commit()

    def delete_from_db(self):
        db.session.delete(self)
        db.session.commit()

    @classmethod
    def find_by_username(cls, username):
        return cls.query.filter_by(username=username).first()

    @classmethod
    def find_by_id(cls, _id):
        return cls.query.filter_by(id=_id).first()

    @classmethod
    def find_by_roles(cls, role):
        return cls.query.filter_by(role=role).first()
