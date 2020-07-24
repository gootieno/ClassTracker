from ..models import db


class StudentAssessment(db.Model):
    __tablename__ = 'student_assessments'
    assessment_score = db.Column(db.Integer)
    student_id = db.Column(db.Integer, db.ForeignKey(
        'students.id'), primary_key=True)
    assessment_id = db.Column(db.Integer, db.ForeignKey(
        'assessments.id'), primary_key=True)

    student = db.relationship('Student', back_populates='student_assessments')
    assessments = db.relationship(
        'Assessment', back_populates='student_students')

    def to_dict(self):
        return {
            'assessment_score': self.assessment_score,
            'student_id': self.student_id,
            'assessment_id': self.assessment_id
        }
