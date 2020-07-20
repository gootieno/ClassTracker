from flask import Blueprint, request, jsonify
from ..models import db
from ..models.instructors import Instructor

bp = Blueprint('instructors', __name__)


@bp.route('/instructors')
def get_instructors():
    instructors = Instructor.query.all()
    instructors = [instructor.to_dict() for instructor in instructors]
    return {'instructors': instructors}
