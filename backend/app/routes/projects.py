from flask import Blueprint, request, jsonify
from ..models import db
from ..models.projects import Project

bp = Blueprint('projects', __name__)


@bp.route('/projects/<int:student_id>', methods=['GET', 'POST'])
def get_project(student_id):
    if request.method == 'POST':
        data = request.json
        try:
            project = Project(
                project_name=data['projectName'], student_id=student_id)
            db.session.add(project)
            db.session.commit()
            return {'project': project}
        except AssertionError as message:
            return jsonify({'error': str(message)}), 400
    else:
        projects = Project.query.filter_by(student_id=student_id).all()
        projects = [project.to_dict() for project in projects]
        return {'projects': projects}
