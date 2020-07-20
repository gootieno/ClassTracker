from flask import Blueprint, request, jsonify
from ..models import db
from ..models.assessments import Assessment

bp = Blueprint('assessments', __name__)


@bp.route('/add-assessment', methods=['POST'])
def create_assessment():
    data = request.json
    try:
        assessment = Assessment(assessment_name=data['assessmentName'], duration=data['duration'], due_date=[
                                'dueDate'], submission=data['submission'], active=data['active'])
        db.session.add(assessment)
        db.session.commit()
        return {'assessment': assessment.to_dict()}
    except AssertionError as message:
        return jsonify({'error': str(message)}), 400


@bp.route('/assessments/<int:student_id>', methods=['GET'])
def get_assessments(student_id):
    assessments = Assessment.query.filter_by(student_id=student_id).all()
    assessments = [assessment.to_dict() for assessment in assessments]
    return {"assessments": assessments}
