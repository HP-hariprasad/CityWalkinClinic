from db import db

class FeedbackModel(db.Model):
    __tablename__ = 'feedbacks'

    id = db.Column(db.Integer, primary_key=True)
    feedback_summary = db.Column(db.String(100))

    patient_id = db.Column(db.Integer, db.ForeignKey('patients.id'))
    patient = db.relationship('PatientModel')

    doctor_id = db.Column(db.Integer, db.ForeignKey('doctors.id'))
    doctor = db.relationship('DoctorModel')

    def __init__(self, feedback_summary, patient_id, doctor_id):
        self.feedback_summary = feedback_summary
        self.patient_id = patient_id
        self.doctor_id = doctor_id

    def save_to_db(self):
        db.session.add(self)
        db.session.commit()

    def delete_from_db(self):
        db.session.delete(self)
        db.session.commit()

    @classmethod
    def find_by_patient(cls, patient_id):
        return cls.query.filter_by(patient_id=patient_id).first()

    @classmethod
    def find_by_id(cls, _id):
        return cls.query.filter_by(id=_id).first()

    @classmethod
    def find_by_doctor(cls, doctor_id):
        return cls.query.filter_by(doctor_id=doctor_id).first()
