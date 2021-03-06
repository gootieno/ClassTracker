from ..models import db
from .cohort_instructors import cohort_instructors


class Cohort(db.Model):
    __tablename__ = 'cohorts'

    id = db.Column(db.Integer, primary_key=True)
    date = db.Column(db.Date, nullable=False)
    location = db.Column(db.String(50), nullable=False)

    students = db.relationship('Student', back_populates='cohorts')
    instructors = db.relationship(
        'Instructor', secondary=cohort_instructors, back_populates='cohorts')
    projects = db.relationship('Project', back_populates='cohorts')

    def to_dict(self):
        return {
            'id': self.id,
            'date': self.date,
            'location': self.location
        }
