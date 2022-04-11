from flask_restful import Resource, reqparse
from flask_jwt import jwt_required
from models.doctor import DoctorModel


class DoctorRegister(Resource):
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
    parser.add_argument('specialization',
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
    parser.add_argument('experience',
                        type=str,
                        required=True,
                        help='this field cannot be empty'
                        )
    parser.add_argument('available_timeslots',
                        type=str,
                        required=True,
                        help='this field cannot be empty'
                        )
    parser.add_argument('user_id',
                        type=int,
                        required=True,
                        help='this field cannot be empty'
                        )

    def get(self, firstname):
        patient = DoctorModel.find_by_doctor_firstname(firstname)
        if patient:
            return patient.json()
        return {'message': 'Doctor with the given name not found'}, 404

    def post(self, ):
        data = DoctorRegister.parser.parse_args()
        if DoctorModel.find_by_doctor_firstname(data['firstname']):
            return {'message': "Doctor with the name '{}' already exists.".format(data['firstname'])}, 400

        doctor = DoctorModel(**data)
        doctor.save_to_db()
        # try:
        #
        # except:
        #     return {'message': "An error ocurred while adding an item"}, 500

        return {"message": "Doctor added successfully"}, 201


class Doctors(Resource):
    def get(self, firstname):
        doctor = DoctorModel.find_by_doctor_firstname(firstname)
        if doctor:
            return doctor.json()
        return {'message': 'Doctor with the given name not found'}, 404
