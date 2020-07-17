from .models import db

class Student(db.Model):
    __tablename__ = 'students'

    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.String(50), nullable=False)
    last_name = db.Column(db.String(50), nullable=False)
    pronounciation = db.Column(db.Sting(50))
    email = db.Column(db.String(50), nullable=False)
    pronount = db.Column(db.String(10), nullable=False) #make this a drop down and store string
    phone_number = db.Column(db.String(10), nullable=False)
    linked_in = db.Column(db.String(50))
    website = db.Column(db.String(50))
    github = db.Column(db.String(50), nullable=False)
    bio = db.Column(db.String(500))
    photoUrl = db.Column(db.String(100))

    cohort = db.relationship('Cohort', back_populates='students')
    assessment = db.relationship('Assessment', back_populates='students')
    project = db.relationship('Project', back_populates='students')

    def to_dict():
        return {
            'id': self.id,
            'first_name': self.first_name,
            'last_name': self.last_name,
            'pronounciation': self.pronounciation,
            'email': self.email,
            'pronoun': self.pronoun,
            'phone_number': self.phone_number,
            'linked_id': self.linked_id,
            'website': self.website,
            'github': self.github,
            'bio': self.bio,
            'photoUrl': self.photoUrl
        }