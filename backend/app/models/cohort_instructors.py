from ..models import db


cohort_instructors = db.Table(
    'cohort_instructors',
    db.Model.metadata,
    db.Column('cohort_id', db.ForeignKey('cohorts.id'), nullable=False),
    db.Column('instructor_id', db.ForeignKey(
        'instructors.id'), nullable=False)
)
