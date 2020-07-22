from ..models import db
from .cohort_instructors import cohort_instructors
from werkzeug.security import generate_password_hash, check_password_hash


class Instructor(db.Model):
    __tablename__ = 'instructors'

    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.String(50), nullable=False)
    last_name = db.Column(db.String(50), nullable=False)
    hashed_password = db.Column(db.String(128), nullable=False)
    pronounciation = db.Column(db.String(50))
    email = db.Column(db.String(50), nullable=False)
    pronoun = db.Column(db.String(10), nullable=False)
    phone_number = db.Column(db.String(20), nullable=False)
    photoUrl = db.Column(db.String(100))

    cohorts = db.relationship(
        'Cohort', secondary='cohort_instructors', back_populates='instructors')

    @property
    def password(self):
        return hashed_password

    @password.setter
    def password(self, password):
        self.hashed_password = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.hashed_password, password)

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
