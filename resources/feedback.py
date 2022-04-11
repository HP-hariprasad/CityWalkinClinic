from flask_restful import Resource, reqparse
from flask_jwt import jwt_required
from models.feedback import FeedbackModel


class Feedbacks(Resource):
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
        data = Feedbacks.parser.parse_args()
        if FeedbackModel.find_by_id(data['id']):
            return {'message': "Appointment with this patient already exists."}, 400

        feedback = FeedbackModel(**data)
        feedback.save_to_db()
        # try:
        #
        # except:
        #     return {'message': "An error ocurred while adding an item"}, 500

        return {"message": "User Created successfully"}, 201


class Feedback(Resource):
    def get(self, feedback_id):
        patient = FeedbackModel.find_by_id(feedback_id)
        if patient:
            return patient.json()
        return {'message': 'Patient with the given name not found'}, 404
