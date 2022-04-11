from flask_restful import Resource, reqparse
from flask_jwt import jwt_required
from models.prescription import PrescriptionModel


class Prescriptions(Resource):
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
        data = Prescriptions.parser.parse_args()
        if PrescriptionModel.find_by_id(data['id']):
            return {'message': "Appointment with this patient already exists."}, 400

        prescription = PrescriptionModel(**data)
        prescription.save_to_db()
        # try:
        #
        # except:
        #     return {'message': "An error ocurred while adding an item"}, 500

        return {"message": "User Created successfully"}, 201


class Prescription(Resource):
    def get(self, appointment_id):
        patient = PrescriptionModel.find_by_id(appointment_id)
        if patient:
            return patient.json()
        return {'message': 'Patient with the given name not found'}, 404
