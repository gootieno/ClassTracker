from ..models import db


class Student_Strike(db.Model):
    __tablename__ = 'student_strikes'

    id = db.Column(db.Integer, primary_key=True)
    description = db.Column(db.String(500), nullable=False)
    date = db.Column(db.DateTime)
    student_id = db.Column(db.Integer, db.ForeignKey(
        'students.id'), nullable=False)

    students = db.relationship('Student', back_populates='student_strikes')

    def to_dict(self):
        return {
            'id': self.id,
            'description': self.description,
            'date': self.date,
            'student_id': self.student_id
        }
