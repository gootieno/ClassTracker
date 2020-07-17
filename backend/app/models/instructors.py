from .models import db

class Instructor(db.Model):
    __tablename__ = 'instructors'

    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.String(50), nullable=False)
    last_name = db.Column(db.String(50), nullable=False)
    pronounciation = db.Column(db.Sting(50))
    email = db.Column(db.String(50), nullable=False)
    pronoun = db.Column(db.String(10), nullable=False) #make this a drop down and store string
    phone_number = db.Column(db.String(10), nullable=False)
    photoUrl = db.Column(db.String(100))
    cohort_id = db.Column(db.Integer, db.ForeignKey('cohorts.id'), nullable=False)

    cohort = db.relationship('Cohort', back_populated='instructors')

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
            'cohort_id': self.cohort_id
        }