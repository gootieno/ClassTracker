from ..models import db
from .cohort_instructors import cohort_instructors


class Instructor(db.Model):
    __tablename__ = 'instructors'

    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.String(50), nullable=False)
    last_name = db.Column(db.String(50), nullable=False)
    pronounciation = db.Column(db.String(50))
    email = db.Column(db.String(50), nullable=False)
    pronoun = db.Column(db.String(10), nullable=False)
    phone_number = db.Column(db.String(10), nullable=False)
    photoUrl = db.Column(db.String(100))

    cohort = db.relationship(
        'Cohort', secondary='cohort_instructors', back_populates='instructors')

    def to_dict(self):
        return {
            'id': self.id,
            'first_name': self.first_name,
            'last_name': self.last_name,
            'pronounciation': self.pronounciation,
            'email': self.email,
            'pronoun': self.pronoun,
            'phone_number': self.phone_number,
            'photoUrl': self.photoUrl,
        }
