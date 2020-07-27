from flask import Blueprint, request, jsonify
from ..models import db
from ..models.instructors import Instructor
from ..config import Configuration
from ..studentAuth import require_auth
import jwt

bp = Blueprint('instructors', __name__)


@bp.route('/instructors/login', methods=["POST"])
def login():
    data = request.json
    print(f"\n\n\nDATA\n{data}\n\n\n")
    instructor = Instructor.query.filter(
        Instructor.email == data['email']).first()
    if not instructor:
        return {"error": "Email not found"}, 422

    if instructor.check_password(data['password']):
        access_token = jwt.encode(
            {'email': instructor.email}, Configuration.SECRET_KEY)
        return {'access_token': access_token.decode('UTF-8'), 'instructor': instructor.to_dict()}
    else:
        return {"error": "Incorrect password"}, 401


@bp.route('/instructors')
def get_instructors():
    instructors = Instructor.query.all()
    instructors = [instructor.to_dict() for instructor in instructors]
    return {'instructors': instructors}
