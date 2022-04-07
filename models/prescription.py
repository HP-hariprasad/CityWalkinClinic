from db import db


class PrescriptionModel(db.Model):
    __tablename__ = 'prescription'

    id = db.Column(db.Integer, primary_key=True)
    # patient_id = db.Column(db.Integer, db.ForeignKey('patient-model.id'))
    # doctor_id = db.Column(db.Integer, db.ForeignKey('doctor-model.id'))
    prescription = db.Column(db.String(100))

    patient_id = db.Column(db.Integer, db.ForeignKey('patients.id'))
    patient = db.relationship('PatientModel')

    doctor_id = db.Column(db.Integer, db.ForeignKey('doctors.id'))
    doctor = db.relationship('DoctorModel')

    def __init__(self, prescription, patient_id, doctor_id):
        self.prescription = prescription
        self.doctor_id = doctor_id
        self.patient_id = patient_id

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