from .models import db

class Assessment(db.Model):
    __tablename__ = 'assessments'

    id = db.Column(db.Integer, primary_key=True)
    assessment_name = db.Column(db.String(50), nullable=False)
    duration = db.Column(db.Integer, nullable=False)
    due_date = db.Column(db.DateTime, nullable=False)
    submission = db.Column(db.String(50), nullable=False)
    active = db.Column(db.Boolean, nullable=False)
    student_id = db.Column(db.Integer, db.ForeignKey('students.id'), nullable=False)

    students = db.relationship('Student', back_populates='assessments')

    def to_dict():
        return {
            'id': self.id,
            'assessment_name': self.assessment_name,
            'duration': self.duration, 
            'due_date': self.due_date,
            'submission': self.submission,
            'active': self.active,
            'student_id': self.student_id
        }