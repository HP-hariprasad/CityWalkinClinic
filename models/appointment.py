from db import db


class AppointmentModel(db.Model):
    __tablename__ = 'appointments'

    appointment_id = db.Column(db.Integer, primary_key=True)
    appointment_time_slot = db.Column(db.String(100))
    consultation_reason = db.Column(db.String(50))
    consultation_fees = db.Column(db.Integer)

    patient_id = db.Column(db.Integer, db.ForeignKey('patients.id'))
    patient = db.relationship('PatientModel')

    doctor_id = db.Column(db.Integer, db.ForeignKey('doctors.id'))
    doctor = db.relationship('DoctorModel')

    # patient_id = db.Column(db.Integer,db.ForeignKey('patient-model.id'))
    # doctor_id = db.Column(db.Integer, db.ForeignKey('doctor-model.id'))

    def __init__(self, appointment_time_slot, consultation_reason, consultation_fees, patient_id, doctor_id):
        self.appointment_time_slot = appointment_time_slot
        self.consultation_reason = consultation_reason
        self.consultation_fees = consultation_fees
        self.patient_id = patient_id
        self.doctor_id = doctor_id

    def save_to_db(self):
        db.session.add(self)
        db.session.commit()

    def delete_from_db(self):
        db.session.delete(self)
        db.session.commit()

    @classmethod
    def find_by_patient_id(cls, patient_id):
        return cls.query.filter_by(patient_id=patient_id).first()

    @classmethod
    def find_by_id(cls, _id):
        return cls.query.filter_by(id=_id).first()

    @classmethod
    def find_by_doctor_id(cls, doctor_id):
        return cls.query.filter_by(role=doctor_id).first()
