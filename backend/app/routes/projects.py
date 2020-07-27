from flask import Blueprint, request, jsonify
from ..models import db
from ..models.projects import Project
from ..models.students import Student

from sqlalchemy.orm import joinedload

bp = Blueprint('projects', __name__)


@bp.route('/projects/<int:student_id>', methods=['POST'])
def get_project(student_id):
    data = request.json
    project = Project(
        project_name=data['projectName'], clone_name=data['cloneName'], student_id=student_id)
    db.session.add(project)
    db.session.commit()
    return {'project': project}


@bp.route('/projects/<int:cohort_id>', methods=['GET'])
def get_cohort_projects(cohort_id):
    projects = Project.query.filter_by(cohort_id=cohort_id).all()
    students = Student.query.filter_by(cohort_id=cohort_id).all()

    students = [student.to_dict() for student in students]
    projects = [project.to_dict() for project in projects]

    student_projects = []
    for student in students:
        for project in projects:
            if student['id'] == project['student_id']:
                student_projects.append({
                    'first_name': student['first_name'], 'last_name': student['last_name'], 'project_name': project['project_name'], 'clone_name': project['clone_name']})
    # print(student_projects)
    return {'student_projects': student_projects}
