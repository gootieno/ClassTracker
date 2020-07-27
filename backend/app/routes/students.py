from flask import Blueprint, request
from ..models import db
from ..models.students import Student
from ..config import Configuration
from ..studentAuth import require_auth
import jwt

bp = Blueprint('students', __name__)


@bp.route('/students/<int:cohort_id>', methods=['GET'])
def get_students(cohort_id):
    students = Student.query.filter_by(cohort_id=cohort_id).all()
    students = [student.do_dict() for student in students]
    return {'students': students}


@bp.route('/students/login', methods=["POST"])
def login():
    data = request.json
    print(f"\n\n\nDATA\n{data}\n\n\n")
    student = Student.query.filter(Student.email == data['email']).first()
    if not student:
        return {"error": "Email not found"}, 422

    if student.check_password(data['password']):
        access_token = jwt.encode(
            {'email': student.email}, Configuration.SECRET_KEY)
        return {'access_token': access_token.decode('UTF-8'), 'student': student.to_dict()}
    else:
        return {"error": "Incorrect password"}, 401
