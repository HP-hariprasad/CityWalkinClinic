from flask_restful import Resource, reqparse
from flask_jwt import jwt_required
from models.appointment import AppointmentModel


class BookAppointments(Resource):
    parser = reqparse.RequestParser()
    parser.add_argument('doctor_id',
                        type=int,
                        required=True,
                        help='this field cannot be empty'
                        )
    parser.add_argument('patient_id',
                        type=int,
                        required=True,
                        help='this field cannot be empty'
                        )
    parser.add_argument('appointment_time_slot',
                        type=str,
                        required=True,
                        help='this field cannot be empty'
                        )
    parser.add_argument('consultation_reason',
                        type=str,
                        required=True,
                        help='this field cannot be empty'
                        )
    parser.add_argument('consultation_fees',
                        type=str,
                        required=True,
                        help='this field cannot be empty'
                        )

    def post(self, ):
        data = BookAppointments.parser.parse_args()
        if AppointmentModel.find_by_patient_id(data['id']):
            return {'message': "Appointment with this patient already exists."}, 400

        appointment = AppointmentModel(**data)
        appointment.save_to_db()
        # try:
        #
        # except:
        #     return {'message': "An error ocurred while adding an item"}, 500

        return {"message": "User Created successfully"}, 201


class Appointments(Resource):
    def get(self, appointment_id):
        patient = AppointmentModel.find_by_id(appointment_id)
        if patient:
            return patient.json()
        return {'message': 'Patient with the given name not found'}, 404
