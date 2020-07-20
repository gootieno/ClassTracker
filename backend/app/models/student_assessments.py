from ..models import db


student_assessments = db.Table(
    "student_assessments",
    db.Model.metadata,
    db.Column('assessment_score', db.Integer),
    db.Column('student_id', db.ForeignKey('students.id'), primary_key=True),
    db.Column('assessment_id', db.ForeignKey(
        'assessments.id'), primary_key=True)
)
