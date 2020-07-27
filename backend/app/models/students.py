from ..models import db
from werkzeug.security import generate_password_hash, check_password_hash


class Student(db.Model):
    __tablename__ = 'students'

    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.String(50), nullable=False)
    last_name = db.Column(db.String(50), nullable=False)
    hashed_password = db.Column(db.String(128), nullable=False)
    pronounciation = db.Column(db.String(50))
    email = db.Column(db.String(50), nullable=False)
    pronoun = db.Column(db.String(10), nullable=False)
    phone_number = db.Column(db.String(20), nullable=False)
    linked_in = db.Column(db.String(50))
    website = db.Column(db.String(50))
    github = db.Column(db.String(50))
    bio = db.Column(db.String(500))
    photoUrl = db.Column(db.String(100))
    cohort_id = db.Column(db.Integer, db.ForeignKey(
        'cohorts.id'), nullable=False)

    student_strikes = db.relationship(
        'Student_Strike', back_populates='students')
    cohorts = db.relationship('Cohort', back_populates='students')
    projects = db.relationship('Project', back_populates='students')

    assessments = db.relationship(
        'StudentAssessment', back_populates='students')

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
            'linked_in': self.linked_in,
            'website': self.website,
            'github': self.github,
            'bio': self.bio,
            'photoUrl': self.photoUrl,
            'cohort_id': self.cohort_id,
        }
