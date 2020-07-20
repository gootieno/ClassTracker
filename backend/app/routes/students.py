from flask import Blueprint, request
from ..models import db
from ..models.students import Student

bp = Blueprint('students', __name__)


@bp.route('/students/<int:cohort_id>', methods=['GET'])
def get_students(cohort_id):
    students = Student.query.filter_by(cohort_id=cohort_id).all()
    students = [student.do_dict() for student in students]
    return {'students': students}
