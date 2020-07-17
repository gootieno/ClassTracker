from .models import db

class StudentState(db.Model):
    __tablename__ = 'student_stats'

    id = db.Column(db.Integer, primary_key=True)
    strikes = db.Column(db.Integer)
    assessment_score = db.Column(db.Integer)
    student_id = db.Column(db.Integer, db.ForeignKey('students.id'), nullable=False)

    student = db.relationship('Student', back_populates='student_stats')

    def to_dict():
        return {
            'id': self.id, 
            'strikes': self.strikes,
            'assessment_score': self.assessment_score,
            'student_id': self.student_id
        }