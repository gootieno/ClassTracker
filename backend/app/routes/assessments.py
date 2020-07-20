from flask import Blueprint, request
from ..models import db
from ..models.assessments import Assessment

bp = Blueprint('assessments', __name__)


@bp.route('/assessments', methods=['POST'])
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
