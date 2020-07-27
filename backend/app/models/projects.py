from ..models import db


class Project(db.Model):
    __tablename__ = 'projects'

    id = db.Column(db.Integer, primary_key=True)
    project_name = db.Column(db.String(50), nullable=False)
    clone_name = db.Column(db.String(100), nullable=False)
    student_id = db.Column(db.Integer, db.ForeignKey(
        'students.id'), nullable=False)

    cohort_id = db.Column(db.Integer, db.ForeignKey(
        'cohorts.id'), nullable=False)

    students = db.relationship('Student', back_populates='projects')
    cohorts = db.relationship('Cohort', back_populates='projects')

    def to_dict(self):
        return {
            'id': self.id,
            'project_name': self.project_name,
            'clone_name': self.clone_name,
            'student_id': self.student_id,
            'cohort_id': self.cohort_id
        }
