from flask_restful import Resource, reqparse
from flask_jwt import jwt_required
from models.patient import PatientModel


class PatientRegister(Resource):
    parser = reqparse.RequestParser()
    parser.add_argument('firstname',
                        type=str,
                        required=True,
                        help='this field cannot be empty'
                        )
    parser.add_argument('lastname',
                        type=str,
                        required=True,
                        help='this field cannot be empty'
                        )
    parser.add_argument('dob',
                        type=str,
                        required=True,
                        help='this field cannot be empty'
                        )
    parser.add_argument('medical_history',
                        type=str,
                        required=True,
                        help='this field cannot be empty'
                        )
    parser.add_argument('email',
                        type=str,
                        required=True,
                        help='this field cannot be empty'
                        )
    parser.add_argument('contact',
                        type=str,
                        required=True,
                        help='this field cannot be empty'
                        )
    parser.add_argument('address',
                        type=str,
                        required=True,
                        help='this field cannot be empty'
                        )

    def get(self, firstname):
        patient = PatientModel.find_by_patient_firstname(firstname)
        if patient:
            return patient.json()
        return {'message': 'Patient with the given name not found'}, 404

    def post(self, ):
        data = PatientRegister.parser.parse_args()
        if PatientModel.find_by_patient_firstname(data['firstname']):
            return {'message': "Patient with the name '{}' already exists.".format(data['firstname'])}, 400

        patient = PatientModel(**data)
        patient.save_to_db()
        # try:
        #
        # except:
        #     return {'message': "An error ocurred while adding an item"}, 500

        return {"message": "User Created successfully"}, 201
