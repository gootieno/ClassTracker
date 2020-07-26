from ..models import db


cohort_instructors = db.Table(
    'cohort_instructors',
    db.Model.metadata,
    db.Column('id', db.Integer, primary_key=True),
    db.Column('cohort_id', db.Integer, db.ForeignKey(
        'cohorts.id'), nullable=False),
    db.Column('instructor_id', db.Integer, db.ForeignKey(
        'instructors.id'), nullable=False)
)
