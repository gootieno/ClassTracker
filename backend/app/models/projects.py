from .models import db

class Project(db.Model):
    __tablename__ = 'projects'

    id = db.Column(db.Integer, primary_key=True)
    project_name = db.Column(db.String(50), nullable=False)
    student_id = db.Column(db.Integer, db.ForeignKey('students.id'), nullable=False)

    student = db.relationship('Student', back_populates='projects')

    def to_dict():
        return {
            'id': self.id,
            'project_name': self.project_name,
            'student_id': self.student_id
        }